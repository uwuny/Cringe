let DATA = null
let avgPosition = "right"
let currentType = "damage"

fetch("battle_data.json")
.then(r=>r.json())
.then(data=>{
DATA = data
loadTable("damage")
})

function toggleAverage(){
avgPosition = avgPosition === "right" ? "left" : "right"
loadTable(currentType)
}

function getPenRate(name,battles){

let shots=0
let hits=0
let pen=0

battles.forEach(b=>{
let p=b.players[name]
if(!p) return

shots+=p.shots
hits+=p.hits
pen+=p.piercings
})

if(hits==0) return 0
return pen/hits
}


// 🔥 НОВОЕ — генерация одной таблицы
function renderTable(battles,type){

let players = {}

battles.forEach((battle,battleIndex)=>{

for(let name in battle.players){

let p = battle.players[name]

if(!players[name]) players[name] = {}

let value = 0

if(type==="damage") value = p.damage
if(type==="damage_received") value = p.damage_received
if(type==="hits") value = `${p.shots}/${p.hits}/${p.piercings}`
if(type==="assist") value = p.assist_track + p.assist_radio

players[name][battleIndex] = {
tank:p.tank,
value:value,
assist_track:p.assist_track,
assist_radio:p.assist_radio,
alive:p.alive
}

}

})

let averages = {}

for(let name in players){

let sum=0
let count=0

battles.forEach((battle,i)=>{
let cell = players[name][i]
if(!cell) return

let v = cell.value
if(typeof v==="number"){
sum+=v
count++
}
})

averages[name] = count ? Math.round(sum/count) : 0
}

let sorted = Object.keys(players)

if(type==="hits"){
sorted.sort((a,b)=>getPenRate(b,battles)-getPenRate(a,battles))
}else{
sorted.sort((a,b)=>averages[b]-averages[a])
}

let html = "<table>"

html+="<tr><th>Ник</th>"

if(type==="hits" && avgPosition==="left") html+="<th>% пробития</th>"
if(type!=="hits" && avgPosition==="left") html+="<th>Среднее</th>"

battles.forEach(b=>{
let resultClass = b.win ? "win" : "lose"
let mapName = b.map.replace(" ","<br>")
html+=`<th class="${resultClass}">${mapName}</th>`
})

if(type==="hits" && avgPosition==="right") html+="<th>% пробития</th>"
if(type!=="hits" && avgPosition==="right") html+="<th>Среднее</th>"

html+="</tr>"

sorted.forEach(name=>{

html+="<tr>"
html+=`<td>${name}</td>`

if(type==="hits" && avgPosition==="left"){
let percent = Math.round(getPenRate(name,battles)*100)
html+=`<td>${percent}%</td>`
}

if(type!=="hits" && avgPosition==="left"){
html+=`<td>${averages[name]}</td>`
}

battles.forEach((battle,i)=>{

let cell = players[name][i]

if(!cell){
html+="<td></td>"
return
}

let tankClass = cell.alive ? "alive" : "dead"
let displayValue = cell.value

if(type==="assist"){
displayValue = `${cell.value}<br><small>каток:${cell.assist_track} / свет:${cell.assist_radio}</small>`
}

html+=`<td>
<span class="${tankClass}">${cell.tank}</span><br>
${displayValue}
</td>`
})

if(type==="hits" && avgPosition==="right"){
let percent = Math.round(getPenRate(name,battles)*100)
html+=`<td>${percent}%</td>`
}

if(type!=="hits" && avgPosition==="right"){
html+=`<td>${averages[name]}</td>`
}

html+="</tr>"
})

html+="</table>"

return html
}


// 🔥 ГЛАВНАЯ функция
function loadTable(type,event){

currentType = type

document.querySelectorAll("button.mode").forEach(b=>b.classList.remove("active"))
if(event) event.target.classList.add("active")

let battles = DATA.battles

// ✅ группировка по датам
let battlesByDate = {}

battles.forEach(b=>{
let d = b.date || "Без даты"
if(!battlesByDate[d]) battlesByDate[d] = []
battlesByDate[d].push(b)
})

// ✅ сортировка дат (новые сверху)
let sortedDates = Object.keys(battlesByDate).sort((a,b)=>{
let [d1,m1] = a.split(".").map(Number)
let [d2,m2] = b.split(".").map(Number)
return new Date(2025,m2-1,d2) - new Date(2025,m1-1,d1)
})

let finalHTML = ""

// 🔥 вывод
sortedDates.forEach(date=>{

finalHTML += `
<h2 style="
text-align:center;
color:#00ff66;
margin-top:30px;
font-family:monospace;
text-shadow:0 0 10px #00ff66;
letter-spacing:3px;
">
${date}
</h2>
`

finalHTML += renderTable(battlesByDate[date], type)

})

document.getElementById("table").innerHTML = finalHTML
}
