const form = document.querySelector("form");
form.onsubmit = function (e) {
  e.preventDefault();
  const toDoImput = document.getElementById("toDo");
  const list = document.getElementById("list");
  const toDoLi = document.createElement("li");
  const deleteBt = document.createElement("button");
  toDoLi.classList.add("line");
  toDoLi.innerText = toDoImput.value;
  deleteBt.innerText = "X";

  deleteBt.onclick = function (e) {
    e.currentTarget.closest(".line").remove();
  };

  toDoLi.onclick = function (e) {
    e.currentTarget.classList.toggle("barrato");
  };
  toDoLi.append(deleteBt);
  list.append(toDoLi);
  toDoImput.value = "";
};

const changeColorWithRandom = function () {
  const h1 = document.querySelector("h1");
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  h1.style.color = `rgb( ${r} ${g} ${b})`;
};

setInterval(() => {
  changeColorWithRandom();
}, 450);
