let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let content3 = document.getElementById("content3");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

function openHTML() {
  content1.style.transform = "translateX(0)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(100%)";
  btn1.style.color = "#ff7846";
  btn2.style.color = "#000";
  btn3.style.color = "#000";
}
function openCSS() {
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(0)";
  content3.style.transform = "translateX(100%)";
  btn1.style.color = "#000";
  btn2.style.color = "#ff7846";
  btn3.style.color = "#000";
}
function openJS() {
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(0)";
  btn1.style.color = "#000";
  btn2.style.color = "#000";
  btn3.style.color = "#ff7846";
}