const countDisplayer = document.getElementById("count-displayer");
const addCountBtn = document.getElementById("add-count-btn");

let counter = 0;

function myAddCount(){
counter++;

countDisplayer.textContent = counter;
}

addCountBtn.addEventListener("click", myAddCount);