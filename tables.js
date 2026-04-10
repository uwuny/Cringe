let DATA = { battles: [] };

let avgPosition = "left";
let currentType = "damage";
let currentDate = null;

let chart = null;

/* =========================
   ЗАГРУЗКА ВСЕХ JSON
========================= */

fetch("battle_index.json")
.then(r => r.json())
.then(files => {
  return Promise.all(
    files.map(file => fetch(file).then(r => r.json()))
  );
})
.then(allData => {

  allData.forEach(fileData => {
    if(fileData.battles){
      DATA.battles.push(...fileData.battles);
    }
  });

  initDates();
  loadTable(currentType);
})
.catch(()=>{
  document.getElementById("table").innerHTML = "Ошибка загрузки данных";
});

/* =========================
   СРЕДНЕЕ
========================= */

function toggleAverage(){
  avgPosition = avgPosition==="right" ? "left" : "right";
  loadTable(currentType);
}

/* =========================
   ДАТЫ
========================= */

function parseDate(str){
  let [d,m] = str.split(".").map(Number);
  return new Date(2025,m-1,d);
}

function initDates(){
  const box=document.getElementById("dateButtons");
  box.innerHTML="";

  let dates=[...new Set(DATA.battles.map(b=>b.date))];
  dates.sort((a,b)=>parseDate(a)-parseDate(b));

  dates.forEach((date,index)=>{
    let btn=document.createElement("button");
    btn.innerText=date;

    btn.onclick=()=>{
      currentDate=date;

      document.querySelectorAll(".date-buttons button")
        .forEach(b=>b.classList.remove("active"));

      btn.classList.add("active");
      loadTable(currentType);
    };

    box.appendChild(btn);

    if(index===0){
      btn.classList.add("active");
      currentDate=date;
    }
  });

  let allBtn=document.createElement("button");
  allBtn.innerText="ВСЕ БОИ";

  allBtn.onclick=()=>{
    currentDate=null;

    document.querySelectorAll(".date-buttons button")
      .forEach(b=>b.classList.remove("active"));

    allBtn.classList.add("active");
    loadTable(currentType);
  };

  box.appendChild(allBtn);
}

/* =========================
   ПРОБИТИЯ
========================= */

function getPenRate(name,battles){
  let hits=0,pen=0;

  battles.forEach(b=>{
    let p=b.players[name];
    if(!p) return;
    hits+=p.hits;
    pen+=p.piercings;
  });

  return hits ? pen/hits : 0;
}

/* =========================
   ТАБЛИЦА
========================= */

function loadTable(type,event){

  currentType=type;

  if(event){
    document.querySelectorAll(".mode")
      .forEach(b=>b.classList.remove("active"));

    event.target.classList.add("active");
  }

  let battles=DATA.battles.filter(
    b=>!currentDate || b.date===currentDate
  );

  if(battles.length===0){
    document.getElementById("table").innerHTML="<p>Нет боёв</p>";
    return;
  }

  let players={};

  battles.forEach((battle,idx)=>{
    for(let name in battle.players){

      let p=battle.players[name];

      if(!players[name]) players[name]={};

      let value=0;

      if(type==="damage") value=p.damage;
      if(type==="damage_received") value=p.damage_received;
      if(type==="hits") value=`${p.shots}/${p.hits}/${p.piercings}`;
      if(type==="assist") value=p.assist_track+p.assist_radio;

      players[name][idx]={
        tank:p.tank,
        value:value,
        alive:p.alive
      };
    }
  });

  let averages={};

  for(let name in players){
    let sum=0,count=0;

    battles.forEach((b,i)=>{
      let cell=players[name][i];
      if(!cell) return;

      if(typeof cell.value==="number"){
        sum+=cell.value;
        count++;
      }
    });

    averages[name]=count ? Math.round(sum/count) : 0;
  }

  let sorted=Object.keys(players);

  if(type==="hits")
    sorted.sort((a,b)=>getPenRate(b,battles)-getPenRate(a,battles));
  else
    sorted.sort((a,b)=>averages[b]-averages[a]);

  let html="<table>";

  html+="<tr><th>Ник</th>";

  if(type==="hits" && avgPosition==="left")
    html+="<th>%</th>";

  if(type!=="hits" && avgPosition==="left")
    html+="<th>Ср</th>";

  battles.forEach(b=>{
    html+=`<th class="${b.win ? "win":"lose"}">${b.map}</th>`;
  });

  if(type==="hits" && avgPosition==="right")
    html+="<th>%</th>";

  if(type!=="hits" && avgPosition==="right")
    html+="<th>Ср</th>";

  html+="</tr>";

  sorted.forEach(name=>{
    html+="<tr>";

    /* 🔥 КЛИКАБЕЛЬНЫЙ НИК */
    html+=`<td class="player-name" onclick="showPlayerStats('${name}')">${name}</td>`;

    if(type==="hits" && avgPosition==="left")
      html+=`<td>${Math.round(getPenRate(name,battles)*100)}%</td>`;

    if(type!=="hits" && avgPosition==="left")
      html+=`<td>${averages[name]}</td>`;

    battles.forEach((b,i)=>{
      let cell=players[name][i];

      if(!cell){
        html+="<td></td>";
        return;
      }

      let tankClass = cell.alive ? "alive":"dead";

      html+=`<td>
        <span class="${tankClass}">${cell.tank}</span><br>
        <span>${cell.value}</span>
      </td>`;
    });

    if(type==="hits" && avgPosition==="right")
      html+=`<td>${Math.round(getPenRate(name,battles)*100)}%</td>`;

    if(type!=="hits" && avgPosition==="right")
      html+=`<td>${averages[name]}</td>`;

    html+="</tr>";
  });

  html+="</table>";

  document.getElementById("table").innerHTML=html;

  enableHover();
}

/* =========================
   ГРАФИК
========================= */

function showPlayerStats(name){

  let battles = DATA.battles.filter(
    b=>!currentDate || b.date===currentDate
  );

  let values = [];
  let labels = [];

  battles.forEach(b=>{
    let p = b.players[name];
    if(!p) return;

    let value = 0;

    if(currentType==="damage") value = p.damage;
    if(currentType==="damage_received") value = p.damage_received;
    if(currentType==="assist") value = p.assist_track + p.assist_radio;

    if(currentType==="hits"){
      value = Math.round((p.piercings / p.hits) * 100) || 0;
    }

    values.push(value);
    labels.push(b.date);
  });

  drawChart(name, labels, values);
}

function drawChart(name, labels, data){

  const ctx = document.getElementById("chart").getContext("2d");

  if(chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: name,
        data: data,
        borderWidth: 2,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: "white" }
        }
      },
      scales: {
        x: { ticks: { color: "white" } },
        y: { ticks: { color: "white" } }
      }
    }
  });
}

/* =========================
   HOVER
========================= */

function enableHover(){
  const table=document.querySelector("table");
  if(!table) return;

  const cells=table.querySelectorAll("td");

  cells.forEach(cell=>{
    cell.addEventListener("mouseenter",()=>{
      const row=cell.parentElement;
      const index=cell.cellIndex;

      row.classList.add("hover-row");

      table.querySelectorAll("tr").forEach(tr=>{
        if(tr.children[index]){
          tr.children[index].classList.add("hover-col");
        }
      });

      cell.classList.add("hover-cell");
    });

    cell.addEventListener("mouseleave",()=>{
      const row=cell.parentElement;
      const index=cell.cellIndex;

      row.classList.remove("hover-row");

      table.querySelectorAll("tr").forEach(tr=>{
        if(tr.children[index]){
          tr.children[index].classList.remove("hover-col");
        }
      });

      cell.classList.remove("hover-cell");
    });
  });
}
