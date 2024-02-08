console.log("hello");

let ali = "hi";

// ali = 10;

const sum = (num1: number, num2: number): number => {
    return num1 + num2;
};

console.log(sum(5, 2));

interface Person {
    name: string;
    age: number;
}

class Intern implements Person {
    constructor(public name: string, public age: number) {}

    showInfo = () => {
        console.log(this.name, this.age);
    };
}

const reza = new Intern("reza", 99);

reza.showInfo();
