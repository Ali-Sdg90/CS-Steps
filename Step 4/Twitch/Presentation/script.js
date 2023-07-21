const numbers = document.querySelectorAll("#numbers div");
const keys = document.querySelectorAll("#keys div");

const numArray = [];
let correctAnsCounter = 0;
let timer = 0;
let timerInterval;

for (let i = 0; i < 5; i++) {
    numArray.push(Math.floor(Math.random() * 9) + 1);
    numbers[i].textContent = numArray[i];
}

for (let i = 0; i < 9; i++) {
    keys[i].addEventListener("click", () => {
        if (i + 1 === numArray[correctAnsCounter]) {
            numbers[correctAnsCounter].style.background = "rgb(0, 222, 26)";
            correctAnsCounter++;
            if (correctAnsCounter === 5) {
                console.clear();
                console.log("END GAME");
                clearInterval(timerInterval);
                console.log(`Timer: ${(timer / 10).toFixed(1)}s`);
            }
        }
    });
}

document.getElementById("keys").addEventListener(
    "click",
    () => {
        console.log("Start Timer");
        timerInterval = setInterval(() => {
            console.clear();
            console.log(`${correctAnsCounter}/5`);
            console.log(`${(++timer / 10).toFixed(1)}s`);
        }, 100);
    },
    { once: true }
);
