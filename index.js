// let lists = [];

// const input = document.getElementById("input-el");

// const button = document.getElementById("input-btn");

// const points = document.getElementById("ul-el");

// button.addEventListener("click", function () {
//   lists.push(input.value);
//   input.value = "";

//   inputText();
// });

// function inputText() {
//   for (let i = 0; i < lists.length; i++) {
//     points.innerHTML += "<li>" + lists[i] + "</li>";
//   }
// }
let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems +=
      "<li><a target='_blank' href='" +
      myLeads[i] +
      "'>" +
      myLeads[i] +
      "</a></li>";
  }
  ulEl.innerHTML = listItems;
}
