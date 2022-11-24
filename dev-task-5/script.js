const btn = document.querySelector(".btn");
const form = document.querySelector("#form");
const BASE = "BASE";
let List = [];
const nameInput = document.querySelector(".nameInput");
const surInput = document.querySelector(".surInput");
const bornInput = document.querySelector(".bornInput");

const table = document.querySelector(".table-cont");

const gentId = () => {
  if (List.length != 0) {
    return List.sort((a, b) => b.id - a.id)[0].id + 1;
  } else if (List.length == 0) {
    return 1;
  }
};
List = JSON.parse(localStorage.getItem(BASE) || "[]");
setTable = () =>{
    List.sort((a, b) => b.id - a.id).map(t=>{
        
        table.innerHTML += `<tr>
        <td>${t.id}</td>
        <td>${t.name}</td>
        <td>${t.surInput}</td>
        <td>${t.bornInput}</td>
        </tr>`
    })
}
setTable()
const addItem = (e) => {
    e.preventDefault();
    table.innerHTML = ''
  List.push({
    id: gentId(),
    name: nameInput.value,
    surInput: surInput.value,
    bornInput: bornInput.value
  });
  setTable()
  localStorage.setItem(BASE, JSON.stringify(List));
  nameInput.value = "";
  bornInput.value = "";
  surInput.value = "";
  console.log(List);
};
btn.addEventListener("click", addItem);
console.log(List);
