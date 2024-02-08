"use strict";
console.log("hello");
let ali = "hi";
const sum = (num1, num2) => {
    return num1 + num2;
};
console.log(sum(5, 2));
class Intern {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.showInfo = () => {
            console.log(this.name, this.age);
        };
    }
}
const reza = new Intern("reza", 99);
reza.showInfo();
//# sourceMappingURL=script.js.map