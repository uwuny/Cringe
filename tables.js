let DATA=null;
let avgPosition="right";
let currentType="damage";
let currentDate=null;


fetch("battle_data.json")
.then(r=>r.json())
.then(data=>{
DATA=data;
initDates();
loadTable(currentType);
});


function toggleAverage(){
avgPosition=avgPosition==="right"?"left":"right";
loadTable(currentType);
}


function parseDate(str){

let parts=str.split(".");
let day=parseInt(parts[0]);
let month=parseInt(parts[1]);

return new Date(2025,month-1,day);

}


function initDates(){

const dateButtons=document.getElementById("dateButtons");

let dates=[...new Set(DATA.battles.map(b=>b.date))];

dates.sort((a,b)=>parseDate(a)-parseDate(b));


/* кнопка ВСЕ БОИ */

let allBtn=document.createElement("button");

allBtn.innerText="ВСЕ БОИ";

allBtn.onclick=()=>{

currentDate=null;

document.querySelectorAll(".date-buttons button")
.forEach(b=>b.classList.remove("active"));

allBtn.classList.add("active");

loadTable(currentType);

};

dateButtons.appendChild(allBtn);



dates.forEach(date=>{

let btn=document.createElement("button");

btn.innerText=date;

btn.onclick=()=>{

currentDate=date;

document.querySelectorAll(".date-buttons button")
.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

loadTable(currentType);

};

dateButtons.appendChild(btn);

});


allBtn.classList.add("active");

}


function getPenRate(name,battles){

let shots=0;
let hits=0;
let pen=0;

battles.forEach(b=>{

let p=b.players[name];
if(!p) return;

shots+=p.shots;
hits+=p.hits;
pen+=p.piercings;

});

return hits?pen/hits:0;

}



function loadTable(type,event){

currentType=type;

document.querySelectorAll("button.mode")
.forEach(b=>b.classList.remove("active"));

if(event) event.target.classList.add("active");

let battles=DATA.battles.filter(
b=>!currentDate || b.date===currentDate
);

if(battles.length===0){

document.getElementById("table").innerHTML=
"<p style='text-align:center'>Нет боёв</p>";

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

if(type==="hits")
value=`${p.shots}/${p.hits}/${p.piercings}`;

if(type==="assist")
value=p.assist_track+p.assist_radio;


players[name][idx]={

tank:p.tank,
value:value,
assist_track:p.assist_track,
assist_radio:p.assist_radio,
alive:p.alive

};

}

});


let averages={};

for(let name in players){

let sum=0;
let count=0;

battles.forEach((b,i)=>{

let cell=players[name][i];
if(!cell) return;

if(typeof cell.value==="number"){

sum+=cell.value;
count++;

}

});

averages[name]=count?Math.round(sum/count):0;

}



let sorted=Object.keys(players);

if(type==="hits"){

sorted.sort(
(a,b)=>getPenRate(b,battles)-getPenRate(a,battles)
);

}else{

sorted.sort(
(a,b)=>averages[b]-averages[a]
);

}



let html="<table>";

html+="<tr>";

html+='<th class="nick">Ник</th>';

if(type==="hits" && avgPosition==="left")
html+="<th>% пробития</th>";

if(type!=="hits" && avgPosition==="left")
html+="<th>Среднее</th>";

battles.forEach(b=>{

let cls=b.win?"win":"lose";

html+=`<th class="${cls}">${b.map}</th>`;

});

if(type==="hits" && avgPosition==="right")
html+="<th>% пробития</th>";

if(type!=="hits" && avgPosition==="right")
html+="<th>Среднее</th>";

html+="</tr>";



sorted.forEach(name=>{

html+="<tr>";

html+=`<td class="nick">${name}</td>`;


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

let tankClass=cell.alive?"alive":"dead";

let displayValue=cell.value;

if(type==="assist"){

displayValue=
`${cell.value}<br><small>track:${cell.assist_track} / radio:${cell.assist_radio}</small>`;

}

html+=`<td>
<span class="${tankClass}">${cell.tank}</span><br>
<span>${displayValue}</span>
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

}
