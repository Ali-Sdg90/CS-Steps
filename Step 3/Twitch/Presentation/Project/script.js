const circle = document.getElementById("circle");
const score = document.querySelector("#score span");
const timer = document.getElementById("timer");

let scoreCounter = 0;
let timerCounter = 0;

const changePlace = () => {
    let x = 0;
    let y = 0;

    x = Math.random() * 80 + 10;
    y = Math.random() * 80 + 10;

    circle.style.top = y + "%";
    circle.style.left = x + "%";

    circle.style.background = changeColor();

    score.textContent = ++scoreCounter;
};

circle.addEventListener("mouseover", changePlace);

const changeColor = () => {
    let r = Math.random() * 200 + 55;
    let g = Math.random() * 200 + 55;
    let b = Math.random() * 200 + 55;

    return `rgb(${r},${g},${b})`;
};

setInterval(() => {
    timer.textContent = `${timerCounter++}s`;
}, 1000);
