// console.log("hello");

// const ali = "hi";

// Math.trunc(2.2);

// let Aloha: string | number = "ali";

// Aloha = 21;

// const randomFunction = (input: number): number | void => {
//     input++;

//     if (input > 10) {
//         return input;
//     }
// };

// console.log(randomFunction(Aloha));

// const text: HTMLElement | null = document.querySelector(".text");

// if (text) {
//     text.textContent = (randomFunction(Aloha)).toString();
// }

interface Intern {
    fullName: string;
    course: string;
    step: number;
    showInternData(): void;
}

class CreateNewIntern implements Intern {
    fullName: string;
    course: string;
    step: number;

    constructor(fullName: string, course: string, step: number) {
        this.fullName = fullName;
        this.course = course;
        this.step = step;
    }

    showInternData = (): void => {
        console.log(
            `${this.fullName} is in ${this.course} course at Step ${this.step}.`
        );
    };
}

const ali: Intern = new CreateNewIntern("Ali Sadeghi", "Web", 8);

console.log(ali.showInternData());
