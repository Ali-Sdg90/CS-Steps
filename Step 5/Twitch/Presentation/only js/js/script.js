const input = document.getElementById("input");
const output = document.querySelector("#output");
const btn = document.querySelector(".btn");

const person = {
    name: "ali",
    age: 21,
    showInfo: function () {
        return `Hi im ${this.name} and im ${this.age} yo.`;
    },
};

let name = "Ali";

input.addEventListener("change", () => {
    console.log("click");
    name = input.value;
    output.textContent = name;
});

btn.addEventListener("click", () => {
    console.log(person.showInfo());
});
