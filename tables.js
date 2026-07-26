"use strict";

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const parseDate = (str) => {
  const [d, m, y] = str.split(".").map(Number);
  const year = Number.isFinite(y) ? y : new Date().getFullYear();
  return new Date(year, (m || 1) - 1, d || 1);
};

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const getField = (obj, key) => obj?.[key] ?? obj?.[`${key} `];
const readField = (obj, key) => String(getField(obj, key) ?? "").trim();

const tabPanels = {
  stats: document.getElementById("statsPage"),
  maps: document.getElementById("mapsPage"),
  equipment: document.getElementById("equipmentPage"),
};

function switchTab(tab) {
  document.querySelectorAll(".tab").forEach((btn) => {
    const isActive = btn.dataset.tab === tab;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  for (const [name, panel] of Object.entries(tabPanels)) {
    panel.hidden = name !== tab;
  }

  if (tab === "maps") initMapsTab();
  if (tab === "equipment" && !EQUIPMENT_DB) loadEquipmentDB();
}

document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    switchTab(btn.dataset.tab);
    writeStateToHash();
  });
});

const STAT_ICON_MARKUP = {
  damage: `
    <g transform="translate(28,28)" fill="currentColor">
      <rect x="6" y="-3.325" width="16" height="6.65" rx="3.325" transform="rotate(45)"/>
      <rect x="6" y="-3.325" width="16" height="6.65" rx="3.325" transform="rotate(135)"/>
      <rect x="6" y="-3.325" width="16" height="6.65" rx="3.325" transform="rotate(225)"/>
      <rect x="6" y="-3.325" width="16" height="6.65" rx="3.325" transform="rotate(315)"/>
    </g>
  `,
  received: `<path d="M30.81,18.35 L30.14,18.74 L29.79,19.30 L23.80,19.30 L22.17,19.51 L19.96,20.60 L18.51,22.20 L1.80,22.20 L0.70,22.57 L0.14,23.31 L0.06,24.47 L0.53,25.27 L1.57,25.78 L17.50,25.80 L17.55,28.52 L17.94,30.00 L9.99,30.00 L10.56,30.57 L10.70,31.00 L10.56,31.43 L10.09,31.69 L9.57,31.56 L8.01,30.00 L6.85,30.17 L5.34,31.01 L4.33,32.42 L4.03,33.54 L4.00,37.61 L4.14,38.14 L7.84,41.84 L8.36,42.00 L47.94,42.00 L52.00,37.89 L51.99,30.33 L51.40,28.70 L50.58,27.89 L49.53,27.41 L44.30,27.33 L43.74,27.48 L42.77,28.11 L41.76,30.00 L38.06,30.00 L38.45,28.52 L38.45,24.78 L37.66,22.45 L36.39,20.92 L36.39,19.60 L36.20,19.05 L35.65,18.50 L35.10,18.31 L30.81,18.35ZM27.56,22.43 L26.68,23.31 L28.00,23.00 L29.41,23.35 L30.49,24.33 L30.99,25.71 L30.87,26.87 L30.32,27.90 L29.41,28.65 L28.29,28.99 L26.85,28.77 L25.68,27.90 L25.23,27.15 L25.01,26.29 L25.06,25.41 L25.34,24.61 L24.65,24.61 L24.31,24.09 L24.44,23.57 L26.65,21.39 L27.18,21.32 L27.56,21.57 L27.70,22.00 L27.56,22.43ZM49.56,30.43 L47.35,32.61 L46.82,32.68 L46.39,32.35 L46.44,31.57 L48.65,29.39 L49.18,29.32 L49.56,29.57 L49.70,30.00 L49.56,30.43ZM16.55,34.49 L16.55,35.51 L16.16,36.44 L15.44,37.16 L14.51,37.55 L13.49,37.55 L12.56,37.16 L11.84,36.44 L11.45,35.51 L11.45,34.49 L11.84,33.56 L12.56,32.84 L13.49,32.45 L14.51,32.45 L15.44,32.84 L16.16,33.56 L16.55,34.49ZM46.16,34.57 L46.16,35.43 L45.83,36.22 L45.22,36.83 L44.43,37.16 L43.57,37.16 L42.78,36.83 L42.17,36.22 L41.84,35.43 L41.84,34.57 L42.17,33.78 L42.78,33.17 L43.57,32.84 L44.43,32.84 L45.22,33.17 L45.83,33.78 L46.16,34.57Z" fill="currentColor" fill-rule="evenodd"/>`,
  hits: `<path d="M30.81,18.35 L30.14,18.74 L29.79,19.30 L23.80,19.30 L22.17,19.51 L19.96,20.60 L18.51,22.20 L1.80,22.20 L0.70,22.57 L0.14,23.31 L0.06,24.47 L0.53,25.27 L1.57,25.78 L17.50,25.80 L17.55,28.52 L17.94,30.00 L7.42,30.04 L6.31,30.38 L5.34,31.01 L4.33,32.42 L4.03,33.54 L4.00,37.61 L4.14,38.14 L7.84,41.84 L8.36,42.00 L47.94,42.00 L52.00,37.89 L51.99,30.33 L51.40,28.70 L50.58,27.89 L49.53,27.41 L44.30,27.33 L43.74,27.48 L42.77,28.11 L41.76,30.00 L38.06,30.00 L38.45,28.52 L38.45,24.78 L37.66,22.45 L36.39,20.92 L36.39,19.60 L36.20,19.05 L35.65,18.50 L35.10,18.31 L30.81,18.35ZM21.75,21.37 L26.50,26.18 L26.72,26.81 L26.67,27.47 L26.38,28.07 L25.88,28.50 L25.03,28.73 L24.00,28.38 L19.24,23.57 L19.03,22.94 L19.07,22.28 L19.68,21.37 L20.72,21.02 L21.75,21.37ZM36.63,23.75 L31.82,28.50 L31.19,28.72 L30.53,28.67 L29.93,28.38 L29.50,27.88 L29.27,27.03 L29.62,26.00 L34.43,21.24 L35.06,21.03 L35.72,21.07 L36.63,21.68 L36.98,22.72 L36.63,23.75ZM19.37,36.25 L24.18,31.50 L24.81,31.28 L25.47,31.33 L26.07,31.62 L26.50,32.12 L26.73,32.97 L26.38,34.00 L21.57,38.76 L20.49,38.97 L19.87,38.76 L19.37,38.32 L19.02,37.28 L19.37,36.25ZM34.25,38.63 L29.50,33.82 L29.28,33.19 L29.33,32.53 L29.62,31.93 L30.12,31.50 L30.97,31.27 L32.00,31.62 L36.76,36.43 L36.97,37.51 L36.76,38.13 L36.32,38.63 L35.28,38.98 L34.25,38.63Z" fill="currentColor" fill-rule="evenodd"/>`,
  assist: `
    <g transform="translate(0.000,0.000) scale(0.31285)">
    <path d="M115 114C115 141.614 92.6142 164 65 164M115 114C115 86.3858 92.6142 64 65 64M115 114H126M65 164C37.3858 164 15 141.614 15 114M65 164V175M15 114C15 86.3858 37.3858 64 65 64M15 114H4M65 64V53" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
<path d="M70.1259 41C78.6198 25.5052 95.0831 15 114 15M114 15V4M114 15C141.614 15 164 37.3858 164 65M164 65C164 83.9169 153.495 100.38 138 108.874M164 65H175" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
<circle cx="65" cy="114" r="5" fill="currentColor"/>
<circle cx="114" cy="65" r="5" fill="currentColor"/>
    </g>
  `,
  survival: `<path d="M30.81,18.35 L30.14,18.74 L29.79,19.30 L23.80,19.30 L22.17,19.51 L19.96,20.60 L18.51,22.20 L1.80,22.20 L0.70,22.57 L0.14,23.31 L0.06,24.47 L0.53,25.27 L1.57,25.78 L17.50,25.80 L17.55,28.52 L17.94,30.00 L7.42,30.04 L6.31,30.38 L5.34,31.01 L4.33,32.42 L4.03,33.54 L4.00,37.61 L4.14,38.14 L7.84,41.84 L8.36,42.00 L47.94,42.00 L52.00,37.89 L51.99,30.33 L51.40,28.70 L50.58,27.89 L49.53,27.41 L44.30,27.33 L43.74,27.48 L42.77,28.11 L41.76,30.00 L38.06,30.00 L38.45,28.52 L38.45,24.78 L37.66,22.45 L36.39,20.92 L36.39,19.60 L36.20,19.05 L35.65,18.50 L35.10,18.31 L30.81,18.35ZM21.73,30.27 L21.26,29.47 L21.34,28.31 L22.10,27.44 L23.23,27.22 L24.27,27.73 L27.76,31.21 L33.84,22.62 L34.69,22.23 L35.39,22.24 L36.22,22.67 L36.63,23.24 L36.79,24.16 L36.47,25.03 L29.47,35.03 L28.74,35.64 L27.80,35.79 L26.91,35.43 L21.73,30.27Z" fill="currentColor" fill-rule="evenodd"/>`,
};

const STAT_TYPES = [
  { key: "damage", label: "Урон", svgIcon: "damage" },
  { key: "damage_received", label: "Получено", svgIcon: "received" },
  { key: "hits", label: "Попадания", svgIcon: "hits" },
  { key: "assist", label: "Ассист", svgIcon: "assist" },
  { key: "survival", label: "Выживаемость", svgIcon: "survival" },
];

const STAGE_ICON_MARKUP = {
  global_map: { viewBox: "0 0 250 224", markup: `
    <path d="M96 81.9162V131.848L125 149L154 131.848V81.9162L142.306 75H107.694L96 81.9162Z" fill="none" stroke="currentColor" stroke-width="4" stroke-miterlimit="16"/>
    <path d="M148 85.0338L126.92 97.4821L124.9 98.6752L122.83 97.5795L111.526 91.5985V122.827L124.819 131.646L138.524 122.793V108.04L124.788 116.152V106.082L140.656 96.7128L147.05 92.9365V127.6L127.065 140.51L124.758 142L122.468 140.481L104.943 128.854L103 127.565V86.4456L105.004 85.1644L108.793 82.7421L110.853 81.4259L113.011 82.567L124.675 88.7382L139.473 80L148 85.0338Z" fill="currentColor"/>
    <path d="M125 0C158.152 0 189.947 11.7996 213.389 32.8037C236.831 53.8078 250 82.2958 250 112C250 141.704 236.831 170.192 213.389 191.196C189.947 212.2 158.152 224 125 224C91.8479 224 60.0534 212.2 36.6113 191.196C13.1693 170.192 0 141.704 0 112C0 82.2958 13.1693 53.8078 36.6113 32.8037C60.0534 11.7996 91.8479 0 125 0ZM80.3906 168C82.5573 173.413 84.9948 178.397 87.7031 182.952C96.3281 197.442 106.734 206.052 117.188 208.922V168H80.3906ZM132.812 208.922C143.281 206.066 153.672 197.442 162.297 182.952C165.005 178.407 167.443 173.423 169.609 168H132.812V208.922ZM35.2344 168C47.2027 183.419 63.8638 195.432 83.2344 202.608C79.7448 198.482 76.6257 194.114 73.9062 189.546C69.8599 182.647 66.5131 175.436 63.9062 168H35.2344ZM186.094 168C183.487 175.436 180.14 182.647 176.094 189.546C173.374 194.114 170.255 198.482 166.766 202.608C186.136 195.432 202.797 183.419 214.766 168H186.094ZM15.9062 119C16.875 131.46 20.4531 143.262 26.1562 154H59.6875C56.8662 142.492 55.2343 130.776 54.8125 119H15.9062ZM75.7344 70C72.6612 81.4772 70.8917 93.2036 70.4531 105H90.5V119H70.4688C70.9022 130.796 72.6664 142.522 75.7344 154H174.266C177.188 143.29 179.047 131.488 179.547 119H159.5V105H179.531C179.098 93.2041 177.334 81.4777 174.266 70H75.7344ZM195.188 119C194.766 130.776 193.134 142.492 190.312 154H223.844C229.547 143.262 233.125 131.46 234.094 119H195.188ZM26.1562 70C20.3445 80.9955 16.8686 92.8644 15.9062 105H54.8125C55.2812 92.722 56.9688 80.948 59.6875 70H26.1562ZM190.312 70C193.031 80.948 194.719 92.722 195.188 105H234.094C233.131 92.8644 229.656 80.9955 223.844 70H190.312ZM83.2344 21.3916C63.8773 28.5886 47.2221 40.5974 35.2344 56H63.9062C66.5131 48.5643 69.8599 41.3534 73.9062 34.4541C76.6257 29.8862 79.7448 25.518 83.2344 21.3916ZM117.188 15.0781C106.719 17.9341 96.3281 26.5579 87.7031 41.0479C84.8629 45.8658 82.419 50.8633 80.3906 56H117.188V15.0781ZM132.812 56H169.609C167.581 50.8633 165.137 45.8658 162.297 41.0479C153.672 26.5579 143.281 17.9481 132.812 15.0781V56ZM166.766 21.3916C170.172 25.3676 173.297 29.7641 176.094 34.4541C179.953 40.9501 183.313 48.174 186.094 56H214.766C202.797 40.5812 186.136 28.5681 166.766 21.3916Z" fill="currentColor"/>
  ` },
  thunder: { viewBox: "0 0 198 177", markup: `
    <path d="M198 68.6372C198.001 74.6083 196.29 80.4543 193.07 85.4816C189.85 90.5089 185.256 94.5065 179.833 97C177.661 93.1828 174.927 89.715 171.722 86.7135C176.514 85.4074 180.591 82.2503 183.056 77.9367C185.521 73.6232 186.173 68.5066 184.867 63.7125C183.562 58.9183 180.406 54.8394 176.095 52.373C171.783 49.9067 166.669 49.2548 161.878 50.561C161.015 50.7948 160.113 50.8406 159.231 50.6953C158.349 50.55 157.509 50.2169 156.768 49.7186C156.026 49.2203 155.4 48.5684 154.932 47.807C154.463 47.0456 154.164 46.1925 154.054 45.3054C153.172 38.1563 150.247 31.4135 145.632 25.8853C141.016 20.357 134.904 16.2779 128.03 14.1368C121.155 11.9957 113.81 11.8836 106.873 13.8138C99.9366 15.744 93.7036 19.6347 88.9213 25.0195C83.5897 24.7761 78.2478 25.1447 73 26.1181C77.785 17.3023 85.1118 10.1319 94.0268 5.54032C102.942 0.948739 113.032 -0.851355 122.984 0.374362C132.935 1.60008 142.288 5.79483 149.823 12.4126C157.359 19.0303 162.729 27.7645 165.234 37.4781C169.457 37.265 173.678 37.9128 177.643 39.3823C181.608 40.8518 185.232 43.1124 188.297 46.0266C191.361 48.9408 193.802 52.4479 195.47 56.3348C197.138 60.2216 197.999 64.4072 198 68.6372Z" fill="currentColor"/>
<path d="M125.015 45.3838C114.701 36.1184 101.35 30.9973 87.5142 31C75.8595 30.9978 64.4919 34.6331 54.9832 41.4033C45.4745 48.1736 38.2943 57.7443 34.4353 68.7922C24.7861 69.5856 15.8164 74.098 9.40387 81.3846C2.99132 88.6713 -0.367014 98.1674 0.0318658 107.885C0.430745 117.603 4.55591 126.789 11.5439 133.521C18.5318 140.252 28.3186 144.007 38 144V132H37C33.6768 131.981 30.913 130.741 27.8562 129.431C24.7995 128.121 22.0334 126.212 19.7198 123.816C17.4062 121.419 15.5916 118.583 14.382 115.474C13.1724 112.364 12.5922 109.043 12.6753 105.706C12.7584 102.368 13.5031 99.081 14.8659 96.036C16.2287 92.9911 18.1823 90.2498 20.6122 87.9724C23.0422 85.6949 25.8998 83.9272 29.0179 82.7725C32.1361 81.6177 35.4521 81.0992 38.7721 81.2473C40.2121 81.3218 41.6335 80.8937 42.7952 80.0355C43.9569 79.1774 44.7875 77.9421 45.146 76.539C47.7961 66.172 54.1214 57.1331 62.9346 51.1188C71.7477 45.1044 82.4429 42.5282 93.0127 43.8736C103.582 45.219 113.3 50.3936 120.342 58.426C127.383 66.4585 131.264 76.7966 131.257 87.5V88.1905C131.242 89.1556 131.449 90.111 131.862 90.9827C132.275 91.8543 132.882 92.6186 133.636 93.2161C134.391 93.8137 135.272 94.2285 136.212 94.4283C137.152 94.628 138.125 94.6073 139.056 94.3679C141.631 93.7047 144.317 93.5991 146.935 94.0583C149.554 94.5175 152.045 95.5308 154.244 97.0311C156.443 98.5314 158.299 100.484 159.69 102.76C161.08 105.036 161.973 107.583 162.309 110.232C162.644 112.881 162.415 115.572 161.637 118.125C160.859 120.679 159.549 123.037 157.794 125.043C156.04 127.049 153.881 128.657 151.46 129.761C149.04 130.864 146.658 131.994 144 132V144C152.287 144 159.989 140.693 165.849 134.806C171.708 128.92 175 120.936 175 112.611C175 104.286 171.708 96.3024 165.849 90.4158C159.989 84.5292 152.042 81.2222 143.755 81.2222H143.418C141.88 67.4087 135.328 54.6492 125.015 45.3838Z" fill="currentColor"/>
<g clip-path="url(#clip0_0_1)">
<path d="M106.287 87.3825C106.837 87.7017 107.263 88.1981 107.495 88.7906C107.727 89.3832 107.751 90.0369 107.564 90.645L97.4331 123.562H116.125C116.674 123.562 117.212 123.723 117.671 124.025C118.13 124.326 118.49 124.756 118.708 125.26C118.926 125.764 118.991 126.321 118.896 126.862C118.801 127.403 118.549 127.905 118.173 128.304L73.1725 176.117C72.7371 176.58 72.1577 176.882 71.5287 176.973C70.8998 177.065 70.2584 176.941 69.709 176.621C69.1597 176.301 68.7348 175.805 68.5037 175.213C68.2726 174.621 68.2488 173.968 68.4362 173.361L78.5669 140.437H59.875C59.3257 140.438 58.7883 140.277 58.3293 139.975C57.8702 139.674 57.5096 139.244 57.2918 138.74C57.074 138.236 57.0087 137.679 57.1039 137.138C57.1991 136.597 57.4507 136.095 57.8275 135.696L102.827 87.8831C103.262 87.4207 103.841 87.1191 104.469 87.0272C105.097 86.9352 105.738 87.0585 106.287 87.3769V87.3825ZM66.3831 134.812H82.375C82.8151 134.812 83.2492 134.916 83.6421 135.114C84.0351 135.312 84.3761 135.6 84.6377 135.954C84.8992 136.308 85.074 136.718 85.148 137.152C85.222 137.586 85.1932 138.031 85.0637 138.452L77.3688 163.444L109.611 129.187H93.625C93.1849 129.188 92.7508 129.084 92.3578 128.886C91.9649 128.688 91.6239 128.4 91.3623 128.046C91.1008 127.692 90.926 127.282 90.852 126.848C90.778 126.414 90.8068 125.969 90.9363 125.548L98.6313 100.556L66.3831 134.812Z" fill="currentColor"/>
</g>
<path d="M38 132H47C50.3137 132 53 134.686 53 138V138C53 141.314 50.3137 144 47 144H38V132Z" fill="currentColor"/>
<path d="M123 138C123 134.686 125.686 132 129 132H144V144H129C125.686 144 123 141.314 123 138V138Z" fill="currentColor"/>
<defs>
<clipPath id="clip0_0_1">
<rect width="90" height="90" fill="white" transform="translate(43 87)"/>
</clipPath>
</defs>
  ` },
  rain_wall: { viewBox: "0 0 200 199", markup: `
    <path d="M200 68.6372C200.001 74.6083 198.29 80.4543 195.07 85.4816C191.85 90.5089 187.256 94.5065 181.833 97C179.661 93.1828 176.927 89.715 173.722 86.7135C178.514 85.4074 182.591 82.2503 185.056 77.9367C187.521 73.6232 188.173 68.5066 186.867 63.7125C185.562 58.9183 182.406 54.8394 178.095 52.373C173.783 49.9067 168.669 49.2548 163.878 50.561C163.015 50.7948 162.113 50.8406 161.231 50.6953C160.349 50.55 159.509 50.2169 158.768 49.7186C158.026 49.2203 157.4 48.5684 156.932 47.807C156.463 47.0456 156.164 46.1925 156.054 45.3054C155.172 38.1563 152.247 31.4135 147.632 25.8853C143.016 20.357 136.904 16.2779 130.03 14.1368C123.155 11.9957 115.81 11.8836 108.873 13.8138C101.937 15.744 95.7036 19.6347 90.9213 25.0195C85.5897 24.7761 80.2478 25.1447 75 26.1181C79.785 17.3023 87.1118 10.1319 96.0268 5.54032C104.942 0.948739 115.032 -0.851355 124.984 0.374362C134.935 1.60008 144.288 5.79483 151.823 12.4126C159.359 19.0303 164.729 27.7645 167.234 37.4781C171.457 37.265 175.678 37.9128 179.643 39.3823C183.608 40.8518 187.232 43.1124 190.297 46.0266C193.361 48.9408 195.802 52.4479 197.47 56.3348C199.138 60.2216 199.999 64.4072 200 68.6372Z" fill="currentColor"/>
<path d="M87.5142 37C101.35 36.9973 114.701 42.1184 125.015 51.3838C135.328 60.6492 141.88 73.4087 143.418 87.2222H143.755C152.042 87.2222 159.989 90.5293 165.849 96.4158C171.708 102.302 175 110.286 175 118.611C175 126.936 171.708 134.92 165.849 140.806C159.989 146.693 152.042 150 143.755 150H37.5223C27.8408 150.007 18.5318 146.252 11.5439 139.521C4.55591 132.789 0.430745 123.603 0.0318658 113.885C-0.367014 104.167 2.99132 94.6713 9.40387 87.3846C15.8164 80.098 24.7861 75.5857 34.4353 74.7922C38.2943 63.7443 45.4745 54.1736 54.9832 47.4034C64.4919 40.6331 75.8595 36.9978 87.5142 37ZM131.257 93.5C131.264 82.7966 127.383 72.4585 120.342 64.4261C113.3 56.3936 103.582 51.219 93.0127 49.8736C82.4429 48.5282 71.7477 51.1044 62.9346 57.1188C54.1214 63.1331 47.7961 72.172 45.146 82.539C44.7875 83.9421 43.9569 85.1774 42.7952 86.0356C41.6335 86.8937 40.2121 87.3218 38.7721 87.2473C35.4521 87.0993 32.1361 87.6177 29.0179 88.7725C25.8998 89.9272 23.0422 91.695 20.6122 93.9724C18.1823 96.2498 16.2287 98.9911 14.8659 102.036C13.5031 105.081 12.7584 108.368 12.6753 111.706C12.5922 115.043 13.1724 118.364 14.382 121.474C15.5916 124.583 17.4062 127.419 19.7198 129.816C22.0334 132.212 24.7995 134.121 27.8562 135.431C30.913 136.741 34.1991 137.426 37.5223 137.444H143.755C146.413 137.438 149.04 136.864 151.46 135.761C153.881 134.657 156.04 133.049 157.794 131.043C159.549 129.037 160.859 126.679 161.637 124.125C162.415 121.572 162.644 118.881 162.309 116.232C161.973 113.583 161.08 111.036 159.69 108.76C158.299 106.484 156.443 104.531 154.244 103.031C152.045 101.531 149.554 100.517 146.935 100.058C144.317 99.5991 141.631 99.7047 139.056 100.368C138.125 100.607 137.152 100.628 136.212 100.428C135.272 100.229 134.391 99.8137 133.636 99.2162C132.882 98.6186 132.275 97.8543 131.862 96.9827C131.449 96.1111 131.242 95.1556 131.257 94.1906V93.5Z" fill="currentColor"/>
<path d="M50.342 162.155C49.8786 161.748 49.3404 161.437 48.7583 161.241C47.5831 160.846 46.301 160.94 45.1942 161.502C44.0874 162.064 43.2464 163.048 42.8562 164.238L38.1868 178.423C37.8486 179.597 37.9728 180.858 38.5333 181.941C39.0939 183.024 40.0471 183.846 41.1928 184.232C42.3386 184.619 43.5877 184.541 44.678 184.015C45.7683 183.489 46.6149 182.556 47.04 181.411L51.7094 167.227C51.9041 166.637 51.9822 166.015 51.9393 165.395C51.8963 164.775 51.7332 164.17 51.4591 163.614C51.185 163.058 50.8054 162.563 50.342 162.155Z" fill="currentColor"/>
<path d="M78.3584 162.155C77.895 161.748 77.3568 161.437 76.7747 161.241C75.5995 160.846 74.3175 160.94 73.2106 161.502C72.1038 162.064 71.2628 163.048 70.8726 164.238L61.5338 192.607C61.1956 193.781 61.3199 195.043 61.8804 196.126C62.4409 197.209 63.3941 198.03 64.5398 198.417C65.6856 198.804 66.9347 198.726 68.025 198.2C69.1153 197.674 69.9619 196.74 70.387 195.596L79.7258 167.227C79.9205 166.637 79.9986 166.015 79.9557 165.395C79.9128 164.775 79.7496 164.17 79.4755 163.614C79.2014 163.058 78.8218 162.563 78.3584 162.155Z" fill="currentColor"/>
<path d="M106.375 162.155C105.911 161.748 105.373 161.437 104.791 161.241C103.616 160.846 102.334 160.94 101.227 161.502C100.12 162.064 99.2792 163.048 98.889 164.238L94.2196 178.423C93.8815 179.597 94.0057 180.858 94.5662 181.941C95.1267 183.024 96.0799 183.846 97.2257 184.232C98.3714 184.619 99.6206 184.541 100.711 184.015C101.801 183.489 102.648 182.556 103.073 181.411L107.742 167.227C107.937 166.637 108.015 166.015 107.972 165.395C107.929 164.775 107.766 164.17 107.492 163.614C107.218 163.058 106.838 162.563 106.375 162.155Z" fill="currentColor"/>
<path d="M134.391 162.155C133.928 161.748 133.39 161.437 132.808 161.241C131.632 160.846 130.35 160.94 129.243 161.502C128.137 162.064 127.296 163.048 126.905 164.238L117.567 192.607C117.346 193.203 117.245 193.837 117.272 194.473C117.299 195.108 117.452 195.732 117.722 196.306C117.992 196.88 118.374 197.393 118.844 197.814C119.315 198.235 119.865 198.556 120.461 198.757C121.056 198.958 121.686 199.036 122.312 198.985C122.938 198.934 123.548 198.755 124.104 198.46C124.661 198.165 125.153 197.759 125.55 197.267C125.948 196.775 126.244 196.206 126.42 195.596L135.759 167.227C135.953 166.637 136.031 166.015 135.989 165.395C135.946 164.775 135.782 164.17 135.508 163.614C135.234 163.058 134.855 162.563 134.391 162.155Z" fill="currentColor"/>
  ` },
  eternal_storm: { viewBox: "0 0 200 199", markup: `
    <path d="M200 68.6372C200.001 74.6083 198.29 80.4543 195.07 85.4816C191.85 90.5089 187.256 94.5065 181.833 97C179.661 93.1828 176.927 89.715 173.722 86.7135C178.514 85.4074 182.591 82.2503 185.056 77.9367C187.521 73.6232 188.173 68.5066 186.867 63.7125C185.562 58.9183 182.406 54.8394 178.095 52.373C173.783 49.9067 168.669 49.2548 163.878 50.561C163.015 50.7948 162.113 50.8406 161.231 50.6953C160.349 50.55 159.509 50.2169 158.768 49.7186C158.026 49.2203 157.4 48.5684 156.932 47.807C156.463 47.0456 156.164 46.1925 156.054 45.3054C155.172 38.1563 152.247 31.4135 147.632 25.8853C143.016 20.357 136.904 16.2779 130.03 14.1368C123.155 11.9957 115.81 11.8836 108.873 13.8138C101.937 15.744 95.7036 19.6347 90.9213 25.0195C85.5897 24.7761 80.2478 25.1447 75 26.1181C79.785 17.3023 87.1118 10.1319 96.0268 5.54032C104.942 0.948739 115.032 -0.851355 124.984 0.374362C134.935 1.60008 144.288 5.79483 151.823 12.4126C159.359 19.0303 164.729 27.7645 167.234 37.4781C171.457 37.265 175.678 37.9128 179.643 39.3823C183.608 40.8518 187.232 43.1124 190.297 46.0266C193.361 48.9408 195.802 52.4479 197.47 56.3348C199.138 60.2216 199.999 64.4072 200 68.6372Z" fill="currentColor"/>
<path d="M87.5142 37C101.35 36.9973 114.701 42.1184 125.015 51.3838C135.328 60.6492 141.88 73.4087 143.418 87.2222H143.755C152.042 87.2222 159.989 90.5293 165.849 96.4158C171.708 102.302 175 110.286 175 118.611C175 126.936 171.708 134.92 165.849 140.806C159.989 146.693 152.042 150 143.755 150H37.5223C27.8408 150.007 18.5318 146.252 11.5439 139.521C4.55591 132.789 0.430745 123.603 0.0318658 113.885C-0.367014 104.167 2.99132 94.6713 9.40387 87.3846C15.8164 80.098 24.7861 75.5857 34.4353 74.7922C38.2943 63.7443 45.4745 54.1736 54.9832 47.4034C64.4919 40.6331 75.8595 36.9978 87.5142 37ZM131.257 93.5C131.264 82.7966 127.383 72.4585 120.342 64.4261C113.3 56.3936 103.582 51.219 93.0127 49.8736C82.4429 48.5282 71.7477 51.1044 62.9346 57.1188C54.1214 63.1331 47.7961 72.172 45.146 82.539C44.7875 83.9421 43.9569 85.1774 42.7952 86.0356C41.6335 86.8937 40.2121 87.3218 38.7721 87.2473C35.4521 87.0993 32.1361 87.6177 29.0179 88.7725C25.8998 89.9272 23.0422 91.695 20.6122 93.9724C18.1823 96.2498 16.2287 98.9911 14.8659 102.036C13.5031 105.081 12.7584 108.368 12.6753 111.706C12.5922 115.043 13.1724 118.364 14.382 121.474C15.5916 124.583 17.4062 127.419 19.7198 129.816C22.0334 132.212 24.7995 134.121 27.8562 135.431C30.913 136.741 34.1991 137.426 37.5223 137.444H143.755C146.413 137.438 149.04 136.864 151.46 135.761C153.881 134.657 156.04 133.049 157.794 131.043C159.549 129.037 160.859 126.679 161.637 124.125C162.415 121.572 162.644 118.881 162.309 116.232C161.973 113.583 161.08 111.036 159.69 108.76C158.299 106.484 156.443 104.531 154.244 103.031C152.045 101.531 149.554 100.517 146.935 100.058C144.317 99.5991 141.631 99.7047 139.056 100.368C138.125 100.607 137.152 100.628 136.212 100.428C135.272 100.229 134.391 99.8137 133.636 99.2162C132.882 98.6186 132.275 97.8543 131.862 96.9827C131.449 96.1111 131.242 95.1556 131.257 94.1906V93.5Z" fill="currentColor"/>
<path d="M47.6171 161.214C47.1433 160.265 46.3128 159.544 45.308 159.208C44.3027 158.874 43.2059 158.952 42.2583 159.426C41.3107 159.9 40.5899 160.731 40.2542 161.737L36.2559 173.741C36.0666 174.244 35.9808 174.781 36.0036 175.319C36.0264 175.857 36.1575 176.384 36.3888 176.87C36.6202 177.356 36.9471 177.79 37.3501 178.147C37.753 178.503 38.2237 178.775 38.7339 178.945C39.2442 179.115 39.7835 179.18 40.3196 179.137C40.8557 179.094 41.3775 178.943 41.8539 178.693C42.3303 178.443 42.7515 178.1 43.0922 177.683C43.4328 177.267 43.6861 176.786 43.8367 176.269L47.835 164.266C48.1692 163.26 48.0909 162.162 47.6171 161.214Z" fill="currentColor"/>
<path d="M123.585 161.214C123.111 160.265 122.28 159.544 121.276 159.208C120.27 158.874 119.173 158.952 118.226 159.426C117.278 159.9 116.558 160.731 116.222 161.737L112.223 173.741C112.034 174.244 111.948 174.781 111.971 175.319C111.994 175.857 112.125 176.384 112.356 176.87C112.588 177.356 112.915 177.79 113.318 178.147C113.721 178.503 114.191 178.775 114.702 178.945C115.212 179.115 115.751 179.18 116.287 179.137C116.823 179.094 117.345 178.943 117.822 178.693C118.298 178.443 118.719 178.1 119.06 177.683C119.4 177.267 119.654 176.786 119.804 176.269L123.803 164.266C124.137 163.26 124.058 162.162 123.585 161.214Z" fill="currentColor"/>
<path d="M63.6103 173.217C63.1365 172.269 62.306 171.548 61.3012 171.212C60.2959 170.877 59.199 170.956 58.2515 171.43C57.3039 171.904 56.5831 172.735 56.2474 173.741L52.2491 185.744C52.0598 186.248 51.9739 186.785 51.9968 187.323C52.0196 187.86 52.1506 188.388 52.382 188.874C52.6134 189.36 52.9403 189.794 53.3432 190.15C53.7462 190.507 54.2169 190.778 54.7271 190.949C55.2373 191.119 55.7766 191.184 56.3127 191.141C56.8488 191.098 57.3707 190.947 57.8471 190.697C58.3235 190.447 58.7447 190.104 59.0853 189.687C59.426 189.271 59.6792 188.79 59.8298 188.273L63.8281 176.269C64.1624 175.263 64.0841 174.166 63.6103 173.217Z" fill="currentColor"/>
<path d="M139.578 173.217C139.104 172.269 138.274 171.548 137.269 171.212C136.264 170.877 135.167 170.956 134.219 171.43C133.271 171.904 132.551 172.735 132.215 173.741L128.217 185.744C128.027 186.248 127.942 186.785 127.964 187.323C127.987 187.86 128.118 188.388 128.35 188.874C128.581 189.36 128.908 189.794 129.311 190.15C129.714 190.507 130.184 190.778 130.695 190.949C131.205 191.119 131.744 191.184 132.28 191.141C132.816 191.098 133.338 190.947 133.815 190.697C134.291 190.447 134.712 190.104 135.053 189.687C135.394 189.271 135.647 188.79 135.797 188.273L139.796 176.269C140.13 175.263 140.052 174.166 139.578 173.217Z" fill="currentColor"/>
<path d="M81.9271 159.597C81.2958 159.987 80.7854 160.545 80.453 161.209L72.4565 177.214C72.151 177.824 72.0065 178.502 72.0367 179.183C72.0669 179.865 72.2708 180.528 72.6289 181.108C72.9871 181.689 73.4877 182.168 74.0832 182.5C74.6786 182.833 75.3491 183.007 76.0309 183.007H82.908L80.1492 194.043C79.9317 194.927 80.0222 195.859 80.4057 196.685C80.7892 197.511 81.4427 198.181 82.2583 198.585C83.0739 198.989 84.0028 199.102 84.8915 198.906C85.7802 198.711 86.5756 198.217 87.1462 197.508L103.139 177.502C103.609 176.913 103.903 176.204 103.988 175.456C104.073 174.708 103.945 173.951 103.619 173.273C103.293 172.594 102.783 172.021 102.146 171.62C101.51 171.218 100.773 171.005 100.021 171.004H93.5754L95.8145 164.266C96.0146 163.664 96.0691 163.024 95.9736 162.398C95.8782 161.771 95.6354 161.177 95.2653 160.663C94.8952 160.148 94.4083 159.73 93.8448 159.44C93.2813 159.151 92.6573 159 92.0241 159H84.0275C83.2856 159 82.5583 159.207 81.9271 159.597Z" fill="currentColor"/>
  ` },
};

STAGE_ICON_MARKUP.new_global_map = STAGE_ICON_MARKUP.global_map;

const SEASONS = [
  {
    key: "storm_birth",
    label: "Рождение бури",
    stages: [
      { key: "global_map", label: "Глобальная карта", icon: "stat/stage3.png", start: [3, 23], end: [4, 5] },
      { key: "thunder", label: "И грянул гром", icon: "stat/stage4.png", start: [4, 20], end: [4, 26] },
      { key: "rain_wall", label: "Стена дождя", icon: "stat/stage5.png", start: [5, 12], end: [5, 18] },
      { key: "eternal_storm", label: "Вечная гроза", icon: "stat/stage6.png", start: [6, 1], end: [6, 7] },
    ],
  },
  {
    key: "new_season",
    label: "Новый сезон",
    stages: [
      { key: "stage_1", label: "Первый этап", icon: "stat/stage1.png", start: null, end: null },
      { key: "stage_2", label: "Второй этап", icon: "stat/stage2.png", start: null, end: null },
      { key: "stage_3", label: "Третий этап", icon: "stat/stage7.png", start: null, end: null },
      { key: "stage_4", label: "Четвёртый этап", icon: "stat/stage8.png", start: null, end: null },
      { key: "new_global_map", label: "Глобальная карта", icon: "stat/stage9.png", start: null, end: null },
    ],
  },
];

const STAGE_DATE_BUFFER_DAYS = 1;
const HTML_REPLAYS_DIR = "replays_html";

const DATA_FILES = [
  "data/battle_data.json", "data/2.json", "data/3.json", "data/4.json",
  "data/5.json", "data/6.json", "data/7.json", "data/8.json",
  "data/9.json", "data/10.json", "data/11.json", "data/12.json",
  "data/13.json", "data/14.json", "data/15.json", "data/16.json", "data/17.json",
  "data/18.json", "data/19.json", "data/20.json", "data/21.json",
];

let DATA = null;
let avgPosition = "left";
let currentType = "damage";
let currentSeason = SEASONS[0].key;
let currentStage = SEASONS[0].stages[0].key;
let currentDate = null;
let visibleBattles = [];

let hashUpdateTimer = null;

function currentActiveTab() {
  return document.querySelector(".tab.active")?.dataset.tab || "stats";
}

function writeStateToHash() {
  clearTimeout(hashUpdateTimer);
  hashUpdateTimer = setTimeout(() => {
    const params = new URLSearchParams({
      tab: currentActiveTab(),
      stat: currentType,
      season: currentSeason,
      stage: currentStage,
      date: currentDate ?? "all",
      avg: avgPosition,
    });
    history.replaceState(null, "", "#" + params.toString());
  }, 250);
}

function readStateFromHash() {
  const raw = location.hash.replace(/^#/, "");
  if (!raw) return null;
  const params = new URLSearchParams(raw);
  return {
    tab: params.get("tab"),
    stat: params.get("stat"),
    season: params.get("season"),
    stage: params.get("stage"),
    date: params.get("date"),
    avg: params.get("avg"),
  };
}

function stageHasBattles(seasonKey, stageKey) {
  const prevSeason = currentSeason;
  const prevStage = currentStage;
  currentSeason = seasonKey;
  currentStage = stageKey;
  const found = DATA.battles.some(battleMatchesStage);
  currentSeason = prevSeason;
  currentStage = prevStage;
  return found;
}

function selectLatestStageWithBattles() {
  for (let s = SEASONS.length - 1; s >= 0; s--) {
    const season = SEASONS[s];
    for (let i = season.stages.length - 1; i >= 0; i--) {
      if (stageHasBattles(season.key, season.stages[i].key)) {
        currentSeason = season.key;
        currentStage = season.stages[i].key;
        return true;
      }
    }
  }
  return false;
}

function applyHashState(hashState) {
  if (hashState?.season && SEASONS.some((s) => s.key === hashState.season)) {
    currentSeason = hashState.season;
  }
  if (hashState?.stage && getSeason(currentSeason).stages.some((s) => s.key === hashState.stage)) {
    currentStage = hashState.stage;
  }
  if (hashState?.stat && STAT_TYPES.some((s) => s.key === hashState.stat)) {
    currentType = hashState.stat;
  }
  if (hashState?.avg === "left" || hashState?.avg === "right") {
    avgPosition = hashState.avg;
    syncAverageToggle();
  }

  if (!hashState?.stage) selectLatestStageWithBattles();

  syncStatButtons();
  syncSeasonButtons();
  renderStageButtons();

  const preferredDate = hashState?.date === "all" ? null : (hashState?.date || undefined);
  initDates(preferredDate);
  loadTable(currentType);

  if (hashState?.tab && tabPanels[hashState.tab]) {
    switchTab(hashState.tab);
  }
}

window.addEventListener("hashchange", () => {
  if (!DATA) return; // хэш поменялся раньше, чем догрузились бои — нечего применять
  applyHashState(readStateFromHash());
});

const getSeason = (key) => SEASONS.find((s) => s.key === key) ?? SEASONS[0];
const getStage = (seasonKey, stageKey) => {
  const season = getSeason(seasonKey);
  return season.stages.find((s) => s.key === stageKey) ?? season.stages[0];
};

function battleMatchesStage(battle) {
  const stage = getStage(currentSeason, currentStage);
  if (!stage) return false;

  if (!stage.start || !stage.end) {
    return (battle.stage || battle.campaign) === currentStage;
  }

  const battleDate = parseDate(battle.date);
  const year = battleDate.getFullYear();
  const [startMonth, startDay] = stage.start;
  const [endMonth, endDay] = stage.end;
  const rangeStart = addDays(new Date(year, startMonth - 1, startDay), -STAGE_DATE_BUFFER_DAYS);
  const rangeEnd = addDays(new Date(year, endMonth - 1, endDay), STAGE_DATE_BUFFER_DAYS);

  return battleDate >= rangeStart && battleDate <= rangeEnd;
}

function normalizeReplayFilename(rawName) {
  const name = String(rawName ?? "").trim();
  if (!name) return null;
  return name.toLowerCase().endsWith(".html") ? name : `${name}.html`;
}

function openBattleHtml(battle) {
  const replayFile =
    normalizeReplayFilename(battle.filename) ?? normalizeReplayFilename(battle.html_file);
  if (!replayFile) {
    console.warn("[stats] У боя нет поля filename/html_file — открывать нечего.", battle);
    return;
  }
  window.open(`${HTML_REPLAYS_DIR}/${encodeURIComponent(replayFile)}`, "_blank");
}

function openBattleHtmlByIndex(index) {
  const battle = visibleBattles[index];
  if (battle) openBattleHtml(battle);
}

function renderStatButtons() {
  const wrap = document.getElementById("statButtons");
  wrap.innerHTML = STAT_TYPES.map((stat) => `
    <button type="button" class="stat-btn btn-runborder" data-stat="${stat.key}" aria-pressed="false">
      <svg class="stat-btn__icon" viewBox="0 0 56 56" aria-hidden="true">${STAT_ICON_MARKUP[stat.svgIcon] ?? ""}</svg>
      <span>${escapeHtml(stat.label)}</span>
    </button>
  `).join("");

  wrap.querySelectorAll("[data-stat]").forEach((btn) => {
    btn.addEventListener("click", () => loadTable(btn.dataset.stat));
  });

  syncStatButtons();
}

function syncStatButtons() {
  document.querySelectorAll("#statButtons [data-stat]").forEach((btn) => {
    const isActive = btn.dataset.stat === currentType;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

function renderSeasonButtons() {
  const wrap = document.getElementById("seasonButtons");
  wrap.innerHTML = SEASONS.map((season) => `
    <button type="button" class="season-btn btn-runborder" data-season="${season.key}" aria-pressed="false">
      ${escapeHtml(season.label)}
    </button>
  `).join("");

  wrap.querySelectorAll("[data-season]").forEach((btn) => {
    btn.addEventListener("click", () => switchSeason(btn.dataset.season));
  });

  syncSeasonButtons();
}

function syncSeasonButtons() {
  document.querySelectorAll("#seasonButtons [data-season]").forEach((btn) => {
    const isActive = btn.dataset.season === currentSeason;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

function switchSeason(seasonKey) {
  if (seasonKey === currentSeason) return;
  currentSeason = seasonKey;
  currentStage = getSeason(seasonKey).stages[0].key;
  syncSeasonButtons();
  renderStageButtons();
  initDates();
  loadTable(currentType);
  writeStateToHash();
}

function renderStageButtons() {
  const wrap = document.getElementById("stageButtons");
  const season = getSeason(currentSeason);
  wrap.innerHTML = season.stages.map((stage) => `
    <button type="button" class="stage-btn btn-runborder" data-stage="${stage.key}" aria-pressed="false">
      ${STAGE_ICON_MARKUP[stage.key]
        ? `<svg class="stage-btn__icon" viewBox="${STAGE_ICON_MARKUP[stage.key].viewBox}" aria-hidden="true">${STAGE_ICON_MARKUP[stage.key].markup}</svg>`
        : `<img class="stage-btn__icon" src="${stage.icon}" alt="">`}
      <span>${escapeHtml(stage.label)}</span>
    </button>
  `).join("");

  wrap.querySelectorAll("[data-stage]").forEach((btn) => {
    btn.addEventListener("click", () => switchStage(btn.dataset.stage));
  });

  syncStageButtons();
}

function syncStageButtons() {
  document.querySelectorAll("#stageButtons [data-stage]").forEach((btn) => {
    const isActive = btn.dataset.stage === currentStage;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

function switchStage(stageKey) {
  if (stageKey === currentStage) return;
  currentStage = stageKey;
  syncStageButtons();
  initDates();
  loadTable(currentType);
  writeStateToHash();
}

function initDates(preferredDate) {
  const box = document.getElementById("dateButtons");
  const allBattlesBtn = document.getElementById("allBattlesBtn");

  const dates = [...new Set(DATA.battles.filter(battleMatchesStage).map((b) => b.date))]
    .sort((a, b) => parseDate(a) - parseDate(b));

  if (!dates.length) {
    box.innerHTML = `<p class="empty-state">Нет данных</p>`;
    currentDate = null;
    allBattlesBtn?.classList.remove("active");
    return;
  }

  const showAll = preferredDate === null;
  const initialDate = !showAll && dates.includes(preferredDate) ? preferredDate : dates[0];

  box.innerHTML = dates.map((date) =>
    `<button type="button" class="date-btn btn-runborder${!showAll && date === initialDate ? " active" : ""}" data-date="${escapeHtml(date)}">${escapeHtml(date)}</button>`
  ).join("");

  currentDate = showAll ? null : initialDate;
  allBattlesBtn?.classList.toggle("active", showAll);

  box.querySelectorAll("[data-date]").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentDate = btn.dataset.date;
      box.querySelectorAll(".date-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      allBattlesBtn?.classList.remove("active");
      loadTable(currentType);
    });
  });
}

function showAllBattles() {
  currentDate = null;
  document.querySelectorAll("#dateButtons .date-btn").forEach((b) => b.classList.remove("active"));
  document.getElementById("allBattlesBtn").classList.add("active");
  loadTable(currentType);
}

function syncAverageToggle() {
  document.getElementById("avgToggleTrack").dataset.position = avgPosition;
  for (const side of ["left", "right"]) {
    const btn = document.getElementById(side === "left" ? "avgToggleLeft" : "avgToggleRight");
    const isActive = avgPosition === side;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  }
}

function setAveragePosition(position) {
  avgPosition = position;
  syncAverageToggle();
  loadTable(currentType);
}

document.getElementById("allBattlesBtn").addEventListener("click", showAllBattles);
document.getElementById("avgToggleLeft").addEventListener("click", () => setAveragePosition("left"));
document.getElementById("avgToggleRight").addEventListener("click", () => setAveragePosition("right"));

function getPenetrationRate(playerName, battles) {
  let hits = 0;
  let pierces = 0;
  battles.forEach((battle) => {
    const player = battle.players[playerName];
    if (!player) return;
    hits += player.hits;
    pierces += player.piercings;
  });
  return hits ? pierces / hits : 0;
}

function extractCellValue(type, player) {
  switch (type) {
    case "damage": return player.damage;
    case "damage_received": return player.damage_received;
    case "hits": return `${player.shots}/${player.hits}/${player.piercings}`;
    case "assist": return player.assist_track + player.assist_radio;
    case "survival": return 0;
    default: return 0;
  }
}

function buildPlayerGrid(type, battles) {
  const players = {};
  battles.forEach((battle, index) => {
    for (const name in battle.players) {
      const player = battle.players[name];
      players[name] ??= {};
      players[name][index] = {
        tank: player.tank,
        value: extractCellValue(type, player),
        assist_track: player.assist_track,
        assist_radio: player.assist_radio,
        alive: player.alive,
      };
    }
  });
  return players;
}

function computeAverages(players, battles) {
  const averages = {};
  for (const name in players) {
    let sum = 0;
    let count = 0;
    battles.forEach((_, i) => {
      const cell = players[name][i];
      if (cell && typeof cell.value === "number") {
        sum += cell.value;
        count++;
      }
    });
    averages[name] = count ? Math.round(sum / count) : 0;
  }
  return averages;
}

function computeSurvivalRates(players, battles) {
  const rates = {};
  for (const name in players) {
    let deaths = 0;
    let total = 0;
    battles.forEach((_, i) => {
      const cell = players[name][i];
      if (!cell) return;
      total++;
      if (!cell.alive) deaths++;
    });
    rates[name] = total ? Math.round(((total - deaths) / total) * 100) : 0;
  }
  return rates;
}

function sortPlayerNames(type, players, battles, averages, survivalRates) {
  const names = Object.keys(players);
  if (type === "hits") {
    return names.sort((a, b) => getPenetrationRate(b, battles) - getPenetrationRate(a, battles));
  }
  if (type === "survival") {
    return names.sort((a, b) => survivalRates[b] - survivalRates[a]);
  }
  return names.sort((a, b) => averages[b] - averages[a]);
}

const hasElo = (value) => value !== null && value !== undefined && value !== "";

function computeBattleSummary(battles) {
  let eloSum = 0;
  let eloCount = 0;
  let winCount = 0;
  battles.forEach((b) => {
    if (hasElo(b.elo)) {
      eloSum += Number(b.elo);
      eloCount++;
    }
    if (b.win) winCount++;
  });
  return {
    avgElo: eloCount ? Math.round(eloSum / eloCount) : "-",
    winRate: battles.length ? Math.round((winCount / battles.length) * 100) : 0,
  };
}

function renderSummaryCell({ avgElo, winRate }) {
  return `
    <div class="elo-summary">Elo: ${avgElo}</div>
    <div class="elo-summary__winrate">Побед: ${winRate}%</div>
  `;
}

function renderClanHeaderRow(battles, summary) {
  const cells = battles.map((battle) => {
    const clanTag = String(battle.enemy_clan_abbrev || battle.enemy_clan_tag || "").trim();
    let cell = "";
    if (clanTag) {
      const href = `https://hemero.ru/ru/ru2026may/personal.php?tag=${encodeURIComponent(clanTag.toUpperCase())}`;
      cell += `<a class="clan-link" href="${href}" target="_blank" rel="noopener">${escapeHtml(clanTag.toUpperCase())}</a>`;
    }
    if (hasElo(battle.elo)) {
      cell += `<br><span class="elo-value">${escapeHtml(battle.elo)}</span>`;
    }
    return `<th class="clan-header">${cell}</th>`;
  }).join("");

  const avgCell = `<th>${renderSummaryCell(summary)}</th>`;
  return `<tr><th></th>${avgPosition === "left" ? avgCell : ""}${cells}${avgPosition === "right" ? avgCell : ""}</tr>`;
}

function renderMapHeaderRow(type, battles) {
  const label = type === "hits" ? "%" : "Среднее";
  const avgCell = `<th>${label}</th>`;
  const mapCells = battles.map((battle, index) =>
    `<th class="${battle.win ? "win" : "lose"}"><a class="map-link" href="#" data-battle-index="${index}">${escapeHtml(battle.map)}</a></th>`
  ).join("");
  return `<tr><th>Ник</th>${avgPosition === "left" ? avgCell : ""}${mapCells}${avgPosition === "right" ? avgCell : ""}</tr>`;
}

function renderAverageDataCell(type, name, battles, averages, survivalRates) {
  if (type === "hits") {
    return `<td>${Math.round(getPenetrationRate(name, battles) * 100)}%</td>`;
  }
  const value = type === "survival" ? survivalRates[name] : averages[name];
  return `<td>${value}${type === "survival" ? "%" : ""}</td>`;
}

function renderPlayerCell(type, cell) {
  if (!cell) return "<td></td>";

  const statusClass = cell.alive ? "alive" : "dead";
  const tankLabel = `<span class="${statusClass}">${escapeHtml(cell.tank)}</span>`;

  if (type === "survival") return `<td>${tankLabel}</td>`;

  const value = type === "assist"
    ? `${escapeHtml(cell.value)}<br><small class="assist-icons"><img src="icons/track.png" alt="Засвет с гусеницы"> ${escapeHtml(cell.assist_track)} &nbsp;|&nbsp; <img src="icons/spot.png" alt="Засвет по рации"> ${escapeHtml(cell.assist_radio)}</small>`
    : escapeHtml(cell.value);

  return `<td>${tankLabel}<br>${value}</td>`;
}

function renderPlayerRow(type, name, players, battles, averages, survivalRates, rowIndex = 0) {
  const avgCell = renderAverageDataCell(type, name, battles, averages, survivalRates);
  const dataCells = battles.map((_, i) => renderPlayerCell(type, players[name][i])).join("");
  return `<tr style="--row-i:${Math.min(rowIndex, 12)}"><td>${escapeHtml(name)}</td>${avgPosition === "left" ? avgCell : ""}${dataCells}${avgPosition === "right" ? avgCell : ""}</tr>`;
}

function loadTable(type) {
  currentType = type;
  syncStatButtons();

  writeStateToHash();

  const battles = DATA.battles.filter(
    (b) => battleMatchesStage(b) && (!currentDate || b.date === currentDate)
  );

  if (!battles.length) {
    document.getElementById("table").innerHTML = `<p class="empty-state">Нет боёв</p>`;
    visibleBattles = [];
    return;
  }

  visibleBattles = battles;

  const players = buildPlayerGrid(type, battles);
  const averages = computeAverages(players, battles);
  const survivalRates = type === "survival" ? computeSurvivalRates(players, battles) : {};
  const sortedNames = sortPlayerNames(type, players, battles, averages, survivalRates);
  const summary = computeBattleSummary(battles);

  const rows = sortedNames
    .map((name, index) => renderPlayerRow(type, name, players, battles, averages, survivalRates, index))
    .join("");

  document.getElementById("table").innerHTML = `
    <table>
      ${renderClanHeaderRow(battles, summary)}
      ${renderMapHeaderRow(type, battles)}
      ${rows}
    </table>
  `;

  attachTableInteractions();
  updateStickyOffsets();
}

function updateStickyOffsets() {
  const firstRow = document.querySelector("#table table tr:first-child");
  if (!firstRow) return;
  const height = firstRow.getBoundingClientRect().height;
  if (height > 0) {
    document.getElementById("table").style.setProperty("--sticky-row-1", `${Math.round(height)}px`);
  }
}

window.addEventListener("resize", updateStickyOffsets);

function attachTableInteractions() {
  const table = document.querySelector("table");
  if (!table) return;

  table.querySelectorAll("[data-battle-index]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openBattleHtmlByIndex(Number(link.dataset.battleIndex));
    });
  });

  enableHover(table);
}

function enableHover(table) {
  table.querySelectorAll("td, th").forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      const { parentElement: row, cellIndex: index } = cell;
      row.classList.add("hover-row");
      table.querySelectorAll("tr").forEach((tr) => {
        tr.children[index]?.classList.add("hover-col");
      });
      cell.classList.add("hover-cell");
    });
    cell.addEventListener("mouseleave", () => {
      const { parentElement: row, cellIndex: index } = cell;
      row.classList.remove("hover-row");
      table.querySelectorAll("tr").forEach((tr) => {
        tr.children[index]?.classList.remove("hover-col");
      });
      cell.classList.remove("hover-cell");
    });
  });
}

Promise.allSettled(
  DATA_FILES.map(async (file) => {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`${file}: ${response.status}`);
    return response.json();
  })
).then((results) => {
  const loaded = [];
  const failed = [];

  results.forEach((result, index) => {
    if (result.status === "fulfilled") loaded.push(result.value);
    else failed.push(`${DATA_FILES[index]} (${result.reason?.message ?? "ошибка"})`);
  });

  if (failed.length) {
    console.info(`[stats] Загружено ${loaded.length} из ${DATA_FILES.length} файлов данных; остальные ещё не созданы.`);
  }

  if (!loaded.length) {
    document.getElementById("table").innerHTML =
      `<p class="error-state">Не удалось загрузить ни одного файла с боями.<br>` +
      `Проверьте папку <code>data/</code> и консоль браузера.</p>`;
    return;
  }

  DATA = { battles: loaded.flatMap((d) => d.battles || []) };
  renderStatButtons();
  renderSeasonButtons();
  applyHashState(readStateFromHash());
});
