let DATA = null;
let avgPosition = "right";
let currentType = "damage";
let currentDate = null;

// Загружаем JSON
fetch("battle_data.json")
  .then(r => r.json())
  .then(data => {
    DATA = data;
    initDates();
    loadTable(currentType);
  });

// Переключение среднего
function toggleAverage() {
  avgPosition = avgPosition === "right" ? "left" : "right";
  loadTable(currentType);
}

// Создание кнопок дат
function initDates() {
  const dateButtons = document.createElement("div");
  dateButtons.className = "date-buttons";
  dateButtons.id = "dateButtons";
  document.querySelector(".page").insertBefore(dateButtons, document.getElementById("tableWrapper"));

  const dates = [...new Set(DATA.battles.map(b => b.date))].sort();
  
  dates.forEach(date => {
    const btn = document.createElement("button");
    btn.innerText = date;
    btn.onclick = () => {
      currentDate = date;
      document.querySelectorAll(".date-buttons button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadTable(currentType);
    };
    dateButtons.appendChild(btn);
  });
  
  if(dates.length > 0){
    currentDate = dates[0];
    dateButtons.querySelector("button").classList.add("active");
  }
}

// Функция расчета % пробитий
function getPenRate(name, battles){
  let shots=0, hits=0, pen=0;
  battles.forEach(b=>{
    let p=b.players[name];
    if(!p) return;
    shots+=p.shots;
    hits+=p.hits;
    pen+=p.piercings;
  });
  return hits ? pen/hits : 0;
}

// Основная функция построения таблицы
function loadTable(type, event){
  currentType = type;
  if(event) event.target.classList.add("active");
  document.querySelectorAll("button.mode").forEach(b=>b.classList.remove("active"));
  if(event) event.target.classList.add("active");

  // Фильтруем по дате
  let battles = DATA.battles.filter(b => !currentDate || b.date === currentDate);
  if(battles.length === 0) {
    document.getElementById("table").innerHTML = "<p style='text-align:center'>Нет боёв за эту дату</p>";
    return;
  }

  // Собираем игроков
  let players = {};
  battles.forEach((battle, idx)=>{
    for(let name in battle.players){
      let p = battle.players[name];
      if(!players[name]) players[name]={};
      let value = 0;
      if(type==="damage") value = p.damage;
      if(type==="damage_received") value = p.damage_received;
      if(type==="hits") value = `${p.shots}/${p.hits}/${p.piercings}`;
      if(type==="assist") value = p.assist_track + p.assist_radio;

      players[name][idx] = {
        tank: p.tank,
        value: value,
        assist_track: p.assist_track,
        assist_radio: p.assist_radio,
        alive: p.alive
      };
    }
  });

  // Средние значения
  let averages = {};
  for(let name in players){
    let sum=0, count=0;
    battles.forEach((b,i)=>{
      let cell = players[name][i];
      if(!cell) return;
      let v = cell.value;
      if(typeof v==="number"){sum+=v; count++;}
    });
    averages[name] = count ? Math.round(sum/count) : 0;
  }

  // Сортировка
  let sorted = Object.keys(players);
  if(type==="hits"){
    sorted.sort((a,b)=>getPenRate(b,battles)-getPenRate(a,battles));
  }else{
    sorted.sort((a,b)=>averages[b]-averages[a]);
  }

  // HTML таблицы
  let html="<table>";
  html+="<tr><th>Ник</th>";
  if(type==="hits" && avgPosition==="left") html+="<th>% пробития</th>";
  if(type!=="hits" && avgPosition==="left") html+="<th>Среднее</th>";
  battles.forEach(b=>{
    let cls = b.win ? "win":"lose";
    html+=`<th class="${cls}">${b.map}</th>`;
  });
  if(type==="hits" && avgPosition==="right") html+="<th>% пробития</th>";
  if(type!=="hits" && avgPosition==="right") html+="<th>Среднее</th>";
  html+="</tr>";

  sorted.forEach(name=>{
    html+="<tr>";
    html+=`<td>${name}</td>`;
    if(type==="hits" && avgPosition==="left") html+=`<td>${Math.round(getPenRate(name,battles)*100)}%</td>`;
    if(type!=="hits" && avgPosition==="left") html+=`<td>${averages[name]}</td>`;

    battles.forEach((b,i)=>{
      let cell = players[name][i];
      if(!cell){html+="<td></td>"; return;}
      let tankClass = cell.alive ? "alive" : "dead";
      let displayValue = cell.value;
      if(type==="assist"){
        displayValue = `${cell.value}<br><small>track:${cell.assist_track} / radio:${cell.assist_radio}</small>`;
      }

      // Логика раскраски цифр в названии и значениях (как в изначальном)
      html+=`<td>
        <span class="${tankClass}">${cell.tank}</span><br>
        <span class="${tankClass}">${displayValue}</span>
      </td>`;
    });

    if(type==="hits" && avgPosition==="right") html+=`<td>${Math.round(getPenRate(name,battles)*100)}%</td>`;
    if(type!=="hits" && avgPosition==="right") html+=`<td>${averages[name]}</td>`;

    html+="</tr>";
  });

  html+="</table>";
  document.getElementById("table").innerHTML = html;
}
