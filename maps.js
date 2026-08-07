"use strict";

const MAPS_DIR = "maps/reserves";
const MAP_DEFS_DIR = "maps/definitions";
const MAP_ICONS_DIR = "MapElement";
const POI_ICONS = { 3: "Poi_smoke.png", 4: "Poi_mines.png" };

const MAP_LIST = [
  { key: "19_monastery", name: "Монастырь" },
  { key: "31_airfield", name: "Аэродром" },
  { key: "506_battle_for_moscow", name: "Битва за Москву" },
  { key: "59_asia_great_wall", name: "Граница империи" },
  { key: "23_westfeld", name: "Вестфилд" },
  { key: "95_lost_city_ctf", name: "Затерянный город" },
  { key: "60_asia_miao", name: "Жемчужная река" },
  { key: "03_campania_big", name: "Провинция" },
  { key: "01_karelia", name: "Карелия" },
  { key: "37_caucasus", name: "Перевал" },
  { key: "503_kaliningrad", name: "Калининград" },
  { key: "07_lakeville", name: "Ласвилль" },
  { key: "38_mannerheim_line", name: "Линия Маннергейма" },
  { key: "14_siegfried_line", name: "Линия Зигфрида" },
  { key: "02_malinovka", name: "Малиновка" },
  { key: "90_minsk", name: "Минск" },
  { key: "11_murovanka", name: "Мурованка" },
  { key: "17_munchen", name: "Уайдпарк" },
  { key: "101_dday", name: "Оверлорд" },
  { key: "112_eiffel_tower_ctf", name: "Париж" },
  { key: "28_desert", name: "Песчаная река" },
  { key: "127_japort", name: "Старая гавань" },
  { key: "05_prohorovka", name: "Прохоровка" },
  { key: "34_redshire", name: "Редшир" },
  { key: "10_hills", name: "Рудники" },
  { key: "08_ruinberg", name: "Руинберг" },
  { key: "36_fishing_bay", name: "Рыбацкая бухта" },
  { key: "35_steppes", name: "Степи" },
  { key: "99_poland", name: "Студзянки" },
  { key: "47_canada_a", name: "Тихий берег" },
  { key: "63_tundra", name: "Тундра" },
  { key: "18_cliff", name: "Утёс" },
  { key: "33_fjord", name: "Фьорды" },
  { key: "44_north_america", name: "Лайв Окс" },
  { key: "45_north_america", name: "Хайвей" },
  { key: "83_kharkiv", name: "Харьков" },
  { key: "04_himmelsdorf", name: "Химмельсдорф" },
  { key: "114_czech", name: "Промзона" },
  { key: "115_sweden", name: "Штиль" },
  { key: "29_el_hallouf", name: "Эль-Халлуф" },
  { key: "06_ensk", name: "Энск" },
  { key: "13_erlenberg", name: "Эрленберг" },
];

const MODE_IMAGES = {
  assault2: new Set(["01_karelia", "02_malinovka", "14_siegfried_line", "222_er_clime", "60_asia_miao"]),
  comp7: new Set(["01_karelia", "02_malinovka", "06_ensk", "10_hills", "114_czech", "17_munchen", "217_er_alaska", "28_desert", "29_el_hallouf", "95_lost_city_ctf"]),
  domination3: new Set(["10_hills", "114_czech", "19_monastery", "36_fishing_bay", "95_lost_city_ctf"]),
};

const MODES = [
  { key: "ctf", name: "Стандартный бой" },
  { key: "domination", name: "Встречный бой" },
  { key: "comp7", name: "Натиск" },
  { key: "assault", name: "Штурм" },
  { key: "assault2", name: "Атака/Оборона" },
  { key: "domination3", name: "Столкновение" },
];

const MODE_ROUND_LENGTH = {
  comp7: 600,
  domination3: 420,
};

const POI_TYPES = [3, 4];

const POI_NAMES = {
  3: "Дымовая завеса",
  4: "Минное поле",
};

const RANDOM_MODE_ORDER = ["ctf", "domination", "assault", "assault2"];

const MODE_ORDER = MODES.map((mode) => mode.key);
const MODE_NAMES = Object.fromEntries(MODES.map((mode) => [mode.key, mode.name]));

const mapDefCache = new Map();
const mapByKey = new Map(MAP_LIST.map((item) => [item.key, item]));

let mapsInitialized = false;
let currentMapKey = null;
let currentModeKey = null;
let currentMapDef = null;
let pendingMapsState = {};

const mapModeName = (key) => MODE_NAMES[key] ?? key;
const mapDisplayName = (key) => mapByKey.get(key)?.name ?? key;

function normalizeSearch(value) {
  return String(value ?? "").trim().toLowerCase().replace(/ё/g, "е");
}

const baseMapImageUrl = (mapKey) => `${MAPS_DIR}/${mapKey}.png`;

const mapImageUrl = (mapKey, modeKey) =>
  MODE_IMAGES[modeKey]?.has(mapKey)
    ? `${MAPS_DIR}/${modeKey}/${mapKey}.png`
    : baseMapImageUrl(mapKey);

const PACKED_MAGIC = 0x62a14e45;

const PACKED_ELEMENT = 0;
const PACKED_STRING = 1;
const PACKED_INT = 2;
const PACKED_FLOAT = 3;
const PACKED_BOOL = 4;

function decodePacked(buffer) {
  const view = new DataView(buffer);
  const bytes = new Uint8Array(buffer);
  if (view.getUint32(0, true) !== PACKED_MAGIC) return null;

  const decoder = new TextDecoder("utf-8");
  const names = [];
  let cursor = 5;

  for (;;) {
    let end = cursor;
    while (bytes[end] !== 0) end += 1;
    if (end === cursor) {
      cursor = end + 1;
      break;
    }
    names.push(decoder.decode(bytes.subarray(cursor, end)));
    cursor = end + 1;
  }

  return { view, bytes, names, decoder, rootAt: cursor };
}

function packedSection(file, start) {
  const { view, names } = file;
  const count = view.getUint16(start, true);
  const ownEnd = view.getUint32(start + 2, true) & 0x0fffffff;
  const dataAt = start + 6 + count * 6;

  const entries = [];
  let offset = dataAt + ownEnd;

  for (let i = 0; i < count; i += 1) {
    const nameIndex = view.getUint16(start + 6 + i * 6, true);
    const descriptor = view.getUint32(start + 8 + i * 6, true);
    const end = dataAt + (descriptor & 0x0fffffff);
    entries.push({ name: names[nameIndex], type: descriptor >>> 28, start: offset, end });
    offset = end;
  }

  return entries;
}

function packedValue(file, entry) {
  const { view, bytes, decoder } = file;
  const length = entry.end - entry.start;

  switch (entry.type) {
    case PACKED_ELEMENT:
      return packedSection(file, entry.start);
    case PACKED_STRING:
      return decoder.decode(bytes.subarray(entry.start, entry.end));
    case PACKED_INT: {
      let result = 0;
      for (let i = length - 1; i >= 0; i -= 1) result = result * 256 + bytes[entry.start + i];
      if (length && bytes[entry.start + length - 1] & 0x80) result -= 256 ** length;
      return result;
    }
    case PACKED_FLOAT: {
      const floats = [];
      for (let i = 0; i + 4 <= length; i += 4) floats.push(view.getFloat32(entry.start + i, true));
      return floats.length === 1 ? floats[0] : floats;
    }
    case PACKED_BOOL:
      return length > 0 && bytes[entry.start] !== 0;
    default:
      return null;
  }
}

function pickAll(file, section, name) {
  return (section ?? []).filter((entry) => entry.name === name);
}

function pick(file, section, name) {
  const entry = (section ?? []).find((item) => item.name === name);
  return entry ? packedValue(file, entry) : null;
}

function toPosition(value) {
  if (Array.isArray(value) && value.length >= 2) {
    return Number.isFinite(value[0]) && Number.isFinite(value[1])
      ? { x: value[0], z: value[1] }
      : null;
  }
  if (typeof value === "string") {
    const parts = value.trim().split(/\s+/).map(Number);
    return parts.length >= 2 && parts.every(Number.isFinite)
      ? { x: parts[0], z: parts[1] }
      : null;
  }
  return null;
}

function readNumber(file, section, name) {
  const value = pick(file, section, name);
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function readText(file, section, name) {
  const value = pick(file, section, name);
  return typeof value === "string" ? value.trim() : null;
}

function readTeamPositions(file, section, groupName) {
  const group = pick(file, section, groupName);
  if (!Array.isArray(group)) return { team1: [], team2: [] };

  const teamOf = (teamName) => {
    const team = pick(file, group, teamName);
    if (!Array.isArray(team)) return [];
    return team.map((entry) => toPosition(packedValue(file, entry))).filter(Boolean);
  };

  return { team1: teamOf("team1"), team2: teamOf("team2") };
}

function readBoundingBox(file, section) {
  const box = pick(file, section, "boundingBox");
  if (!Array.isArray(box)) return null;
  const bl = toPosition(pick(file, box, "bottomLeft"));
  const ur = toPosition(pick(file, box, "upperRight"));
  return bl && ur ? { minX: bl.x, minZ: bl.z, maxX: ur.x, maxZ: ur.z } : null;
}

function readPointsOfInterest(file, section) {
  const holder = pick(file, section, "pointsOfInterestUDO");
  if (!Array.isArray(holder)) return [];

  return holder
    .map((entry) => {
      const point = packedValue(file, entry);
      if (!Array.isArray(point)) return null;
      const position = toPosition(pick(file, point, "position"));
      if (!position) return null;
      const type = readNumber(file, point, "type") ?? 0;
      return POI_TYPES.includes(type) ? { ...position, type } : null;
    })
    .filter(Boolean);
}

async function loadMapDefinition(mapKey) {
  if (mapDefCache.has(mapKey)) return mapDefCache.get(mapKey);

  const pending = (async () => {
    const response = await fetch(`${MAP_DEFS_DIR}/${mapKey}.xml`);
    if (!response.ok) throw new Error(`${mapKey}.xml: ${response.status}`);

    const file = decodePacked(await response.arrayBuffer());
    if (!file) throw new Error(`${mapKey}.xml: неизвестный формат`);

    const root = packedSection(file, file.rootAt);
    const bounds = readBoundingBox(file, root) ?? { minX: -500, minZ: -500, maxX: 500, maxZ: 500 };
    const common = {
      roundLength: readNumber(file, root, "roundLength"),
      maxPlayersInTeam: readNumber(file, root, "maxPlayersInTeam"),
    };

    const modes = [];
    const types = pick(file, root, "gameplayTypes");

    for (const entry of Array.isArray(types) ? types : []) {
      if (!MODE_ORDER.includes(entry.name)) continue;

      const node = packedValue(file, entry);
      if (!Array.isArray(node)) continue;

      const bases = readTeamPositions(file, node, "teamBasePositions");
      const spawns = readTeamPositions(file, node, "teamSpawnPoints");
      const control = pickAll(file, node, "controlPoint")
        .map((item) => toPosition(packedValue(file, item)))
        .filter(Boolean);

      const total = bases.team1.length + bases.team2.length
        + spawns.team1.length + spawns.team2.length + control.length;
      if (!total) continue;

      const poi = readPointsOfInterest(file, node);
      if (entry.name === "comp7" && poi.length === 0) continue;

      modes.push({
        key: entry.name,
        bases,
        spawns,
        control,
        poi,
        bounds: readBoundingBox(file, node) ?? bounds,
        roundLength: readNumber(file, node, "roundLength")
          ?? MODE_ROUND_LENGTH[entry.name]
          ?? common.roundLength,
        maxPlayersInTeam: readNumber(file, node, "maxPlayersInTeam") ?? common.maxPlayersInTeam,
      });
    }

    modes.sort((a, b) => MODE_ORDER.indexOf(a.key) - MODE_ORDER.indexOf(b.key));
    return { bounds, modes, common };
  })();

  mapDefCache.set(mapKey, pending);
  return pending;
}

function worldToPercent(point, bounds) {
  const rangeX = bounds.maxX - bounds.minX || 1;
  const rangeZ = bounds.maxZ - bounds.minZ || 1;
  return {
    left: ((point.x - bounds.minX) / rangeX) * 100,
    top: (1 - (point.z - bounds.minZ) / rangeZ) * 100,
  };
}

function baseIcon(count, order, ally) {
  if (count <= 1) return ally ? "Base_T.png" : "Base_E.png";
  return `Base_${Math.min(order, 2)}${ally ? "_our" : ""}.png`;
}

function neutralIcon(count, order) {
  return count <= 1 ? "Base_N.png" : `Base_N_${Math.min(order, 2)}.png`;
}

function spawnIcon(order, ally) {
  return `Spawn_${Math.min(order, 3)}${ally ? "_our" : ""}.png`;
}

function buildMarker(point, bounds, iconFile, label) {
  const { left, top } = worldToPercent(point, bounds);
  const marker = document.createElement("img");
  marker.className = "map-marker";
  marker.src = `${MAP_ICONS_DIR}/${iconFile}`;
  marker.alt = label;
  marker.title = label;
  marker.loading = "lazy";
  marker.style.left = `${left}%`;
  marker.style.top = `${top}%`;
  return marker;
}

function buildPoiMarker(point, bounds) {
  const label = POI_NAMES[point.type] ?? `Точка интереса · тип ${point.type}`;
  const { left, top } = worldToPercent(point, bounds);

  const marker = document.createElement("span");
  marker.className = `map-poi map-poi--t${point.type}`;
  marker.title = label;
  marker.style.left = `${left}%`;
  marker.style.top = `${top}%`;

  if (POI_ICONS[point.type]) {
    const icon = document.createElement("img");
    icon.className = "map-poi__icon";
    icon.src = `${MAP_ICONS_DIR}/${POI_ICONS[point.type]}`;
    icon.alt = label;
    icon.loading = "lazy";
    marker.appendChild(icon);
  } else {
    marker.textContent = point.type || "";
  }

  return marker;
}

function renderMapStage() {
  const stage = document.getElementById("mapStage");
  const empty = document.getElementById("mapsEmpty");
  if (!stage) return;

  const mode = currentMapDef?.modes.find((item) => item.key === currentModeKey);
  if (!mode) {
    stage.hidden = true;
    empty.hidden = false;
    return;
  }

  empty.hidden = true;
  stage.hidden = false;

  const image = document.getElementById("mapImage");
  const fallback = baseMapImageUrl(currentMapKey);
  image.dataset.fallback = fallback;
  image.src = mapImageUrl(currentMapKey, mode.key);
  image.alt = `${mapDisplayName(currentMapKey)} — ${mapModeName(mode.key)}`;

  const layer = document.getElementById("mapMarkers");
  layer.replaceChildren();

  const place = (points, icon, label) =>
    points.forEach((point, index) =>
      layer.appendChild(buildMarker(point, mode.bounds, icon(index + 1), label(index + 1))));

  place(mode.spawns.team1, (n) => spawnIcon(n, true),
    (n) => `Точка возрождения ${n} · первая команда`);
  place(mode.spawns.team2, (n) => spawnIcon(n, false),
    (n) => `Точка возрождения ${n} · вторая команда`);

  place(mode.bases.team1,
    (n) => baseIcon(mode.bases.team1.length, n, true),
    (n) => (mode.bases.team1.length > 1 ? `База ${n} · первая команда` : "База · первая команда"));

  place(mode.bases.team2,
    (n) => baseIcon(mode.bases.team2.length, n, false),
    (n) => (mode.bases.team2.length > 1 ? `База ${n} · вторая команда` : "База · вторая команда"));

  place(mode.control,
    (n) => neutralIcon(mode.control.length, n),
    (n) => (mode.control.length > 1 ? `Нейтральная база ${n}` : "Нейтральная база"));

  mode.poi.forEach((point) => layer.appendChild(buildPoiMarker(point, mode.bounds)));

  document.getElementById("mapStageTitle").textContent = mapDisplayName(currentMapKey);
  document.getElementById("mapStageMode").textContent = mapModeName(mode.key);
}

function defaultModeKey(def) {
  if (!def || !def.modes.length) return null;
  const random = RANDOM_MODE_ORDER.find((key) => def.modes.some((mode) => mode.key === key));
  return random ?? def.modes[0].key;
}

function syncModeButtons() {
  document.querySelectorAll("#mapModeButtons [data-mode]").forEach((button) => {
    const isActive = button.dataset.mode === currentModeKey;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function selectMode(modeKey) {
  currentModeKey = modeKey;
  syncModeButtons();
  renderMapStage();
  writeStateToHash();
}

function renderModeButtons() {
  const wrap = document.getElementById("mapModeButtons");
  const group = document.getElementById("mapModeGroup");

  if (!currentMapDef || !currentMapDef.modes.length) {
    group.hidden = true;
    wrap.replaceChildren();
    return;
  }

  group.hidden = false;
  wrap.replaceChildren();

  for (const mode of currentMapDef.modes) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "map-mode-btn btn-runborder";
    button.dataset.mode = mode.key;
    button.textContent = mapModeName(mode.key);
    button.addEventListener("click", () => selectMode(mode.key));
    wrap.appendChild(button);
  }

  syncModeButtons();
}

function syncMapListSelection() {
  document.querySelectorAll("#mapList [data-map]").forEach((button) => {
    const isActive = button.dataset.map === currentMapKey;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

async function selectMap(mapKey, preferredMode = null) {
  currentMapKey = mapKey;
  currentModeKey = null;
  currentMapDef = null;
  syncMapListSelection();
  renderMapStage();
  writeStateToHash();

  const group = document.getElementById("mapModeGroup");
  group.hidden = false;
  document.getElementById("mapModeButtons").innerHTML =
    `<span class="maps-hint">Загрузка режимов…</span>`;

  try {
    currentMapDef = await loadMapDefinition(mapKey);
  } catch (error) {
    document.getElementById("mapModeButtons").innerHTML =
      `<span class="maps-hint">Не удалось прочитать описание карты</span>`;
    console.warn("[maps]", error);
    return;
  }

  if (currentMapKey !== mapKey) return;

  currentModeKey = currentMapDef.modes.some((mode) => mode.key === preferredMode)
    ? preferredMode
    : defaultModeKey(currentMapDef);
  renderModeButtons();
  renderMapStage();
  writeStateToHash();
}

function mapsHashParams() {
  const { map, mode } = currentMapKey ? { map: currentMapKey, mode: currentModeKey } : pendingMapsState;
  if (!map) return {};

  const isDefault = mode && map === currentMapKey && mode === defaultModeKey(currentMapDef);
  return { map, ...(mode && !isDefault && { mode }) };
}

function applyMapsHashState({ map, mode } = {}) {
  pendingMapsState = mapByKey.has(map) ? { map, mode } : {};
  if (!mapsInitialized || !pendingMapsState.map) return;

  if (map !== currentMapKey) {
    selectMap(map, mode);
    return;
  }

  if (mode && mode !== currentModeKey && currentMapDef?.modes.some((item) => item.key === mode)) {
    selectMode(mode);
  }
}

function renderMapList(query = "") {
  const list = document.getElementById("mapList");
  const needle = normalizeSearch(query);

  const matches = MAP_LIST.filter((item) =>
    !needle
    || normalizeSearch(item.name).includes(needle)
    || normalizeSearch(item.key).includes(needle));

  list.replaceChildren();

  if (!matches.length) {
    const nothing = document.createElement("p");
    nothing.className = "maps-hint";
    nothing.textContent = "Ничего не найдено";
    list.appendChild(nothing);
    return;
  }

  for (const item of matches) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "map-list-btn btn-runborder";
    button.dataset.map = item.key;
    button.setAttribute("aria-pressed", String(item.key === currentMapKey));
    button.classList.toggle("active", item.key === currentMapKey);

    button.textContent = item.name;
    button.addEventListener("click", () => selectMap(item.key));
    list.appendChild(button);
  }
}

function initMapsTab() {
  if (mapsInitialized) return;
  mapsInitialized = true;

  renderMapList();

  const image = document.getElementById("mapImage");
  image.addEventListener("error", function () {
    const fallback = this.dataset.fallback;
    if (!fallback || this.src.endsWith(fallback)) return;
    this.src = fallback;
  });

  const search = document.getElementById("mapSearch");
  search.addEventListener("input", () => renderMapList(search.value));
  search.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    const first = document.querySelector("#mapList [data-map]");
    if (first) selectMap(first.dataset.map);
  });

  applyMapsHashState(readStateFromHash() ?? {});
}
