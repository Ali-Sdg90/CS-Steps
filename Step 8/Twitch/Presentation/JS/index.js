"use strict";
class CreateNewIntern {
    fullName;
    course;
    step;
    constructor(fullName, course, step) {
        this.fullName = fullName;
        this.course = course;
        this.step = step;
    }
    showInternData = () => {
        console.log(`${this.fullName} is in ${this.course} course at Step ${this.step}.`);
    };
}
const ali = new CreateNewIntern("Ali Sadeghi", "Web", 8);
console.log(ali.showInternData());
//# sourceMappingURL=index.js.map