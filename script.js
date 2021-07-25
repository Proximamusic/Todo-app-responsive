const themeToggle = document.querySelector(".theme-switch");
const pendingtodo = document.querySelector(".pendingtodo .list");
const inputBox = document.querySelector(".text-boxes input");
const addBtn = document.querySelector(".fa-check");
const statusBar = document.querySelectorAll(".filter");

showTodo();

document.querySelector(".addnew .check").addEventListener("click", function () {
  this.classList.toggle("oncheck");
});

inputBox.onkeyup = () => {
  let userEnteredValue = inputBox.value; //getting user entered value
  if (userEnteredValue.trim() != 0) {
    //if the user value isn't only spaces
    addBtn.style.color = "white"; //active the add button
  } else {
    addBtn.style.color = "hsl(234, 11%, 52%)"; //unactive the add button
  }
};

themeToggle.onclick = () => {
  var imgsrc = themeToggle.src;
  if (imgsrc.indexOf("moon") != -1) {
    document.querySelector(".theme-switch").src = "images/icon-sun.svg";
  } else {
    document.querySelector(".theme-switch").src = "images/icon-moon.svg";
  }
//  toggle ligth body bg
//  toggle the Image.
//  toggle the textbox color. 
};

const checkButton = document.querySelectorAll('.pendingtodo .check');

for (var i = 0; i < checkButton.length; i++) {
        checkButton[i].addEventListener('click', function () {
        this.classList.toggle("oncheck");
        this.nextElementSibling.classList.toggle('line');

    });
}
statusBar.forEach((statusBar) => {
  statusBar.addEventListener("click", () => {
    $(".filter").css("color", "hsl(234, 11%, 52%)");
    statusBar.style.color = "hsl(220, 98%, 61%)";
  });
});

function getTodo(e) {
  const userData = inputBox.value;

  const getData = localStorage.getItem("New");
  if (getData == null) {
    taskArray = [];
  } else {
    taskArray = JSON.parse(getData);
  }
  taskArray.unshift(userData);
  localStorage.setItem("New", JSON.stringify(taskArray));
  showTodo();
}

function showTodo() {
  const getData = localStorage.getItem("New");
  if (getData == null) {
    taskArray = [];
  } else {
    taskArray = JSON.parse(getData);
  }
  // var newDivTag = "";

  taskArray.forEach((element) => {

    const newDivTag = document.createElement('div');
    newDivTag.classList.add("text-boxes", "task");
    newDivTag.innerHTML = `
    <button class="check"></button>
    <p class="todo-info">${element}</p>
  <i class="fa fa-times"  onclick="deletetodo()" aria-hidden="true"></i>`

    pendingtodo.appendChild(newDivTag);
    inputBox.value = "";   
  });
  
}

function deletetodo() {
  console.log('deleted');
}
