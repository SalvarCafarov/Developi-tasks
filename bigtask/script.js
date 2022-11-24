const btn = document.querySelector(".btn");
const form = document.querySelector("#form");
const BASE = "BASE5";
let List = [];
const nameInput = document.querySelector(".nameInput");
const surInput = document.querySelector(".surInput");
const bornInput = document.querySelector(".bornInput");
const sektor = document.querySelector("#sector");
const table = document.querySelector(".table-cont");
const body = document.querySelector("h1");
const gentId = () => {
  if (List.length != 0) {
    return List.sort((a, b) => b.id - a.id)[0].id + 1;
  } else if (List.length == 0) {
    return 1;
  }
};
List = JSON.parse(localStorage.getItem(BASE) || "[]");
setTable = () => {
    table.innerHTML = ''
  List.sort((a, b) => b.id - a.id).map((t) => {
    table.innerHTML += `<tr>
        <td>${t.id}</td>
        <td>${t.name}</td>
        <td>${t.surInput}</td>
        <td>${t.bornInput}</td>
        <td>${t.sektor}</td>
        <td><button class='edit' id=${t.id}>Edit</button></td>
        <td><button class='delete' id=${t.id}>Delete</button></td>

        </tr>`;
  });
  if (List.length !== 0) {
    let editButton = document.querySelectorAll(".edit");
    editButton.forEach((t) => t?.addEventListener("click", editValues));
    let deletebtn = document.querySelectorAll(".delete");
    deletebtn.forEach((t) => t?.addEventListener("click", deleteFunc));
  }
};
deleteFunc = (e) =>{
    List = List.filter(t=>t.id !== Number(e.target.id))
  localStorage.setItem(BASE, JSON.stringify(List));
  setTable()
}
editValues = (e) => {
  body.innerHTML = `Student : <span id='stund'>${e.target.id}</span>`;
  nameInput.value = List.filter((t) => t.id == e.target.id)[0].name;
  surInput.value = List.filter((t) => t.id == e.target.id)[0].surInput;
  bornInput.value = List.filter((t) => t.id == e.target.id)[0].bornInput;
  sektor.value = List.filter((t) => t.id == e.target.id)[0].sektor;
  btn.innerHTML = "Edit";
};
setTable();
const addItem = (e) => {
  e.preventDefault();
  table.innerHTML = "";
  if (btn.innerHTML === "Submit") {
    List.push({
      id: gentId(),
      name: nameInput.value,
      surInput: surInput.value,
      bornInput: bornInput.value,
      sektor: sektor.value,
    });
  } else {
    let stundId = document.querySelector("#stund");
    List.forEach((t) => {
      if (t.id == stundId.innerHTML) {
        List = List.filter(y=>y.id!==t.id)
        let edited = {
            id: t.id,
      name: nameInput.value,
      surInput: surInput.value,
      bornInput: bornInput.value,
      sektor: sektor.value,
        }
        List.push(edited)
        btn.innerHTML = 'Submit'
        body.innerHTML = ''
      }
    });
  }
  setTable();
  localStorage.setItem(BASE, JSON.stringify(List));
  nameInput.value = "";
  bornInput.value = "";
  surInput.value = "";
  console.log(List);
};
btn.addEventListener("click", addItem);
console.log(List);
