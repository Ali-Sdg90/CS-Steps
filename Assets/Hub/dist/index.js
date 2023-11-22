"use strict";
class Step {
    constructor(stepNumber, stepSumPath, twitchProjectPath, twitchLink) {
        this.logInfo = () => {
            console.log(this.stepNumber);
        };
        this.stepNumber = stepNumber;
        this.stepSumPath = stepSumPath;
        this.twitchProjectPath = twitchProjectPath;
        this.twitchLink = twitchLink;
    }
}
const step1 = new Step(1, "hi1", "hi2", "hi3");
console.log(step1);
//# sourceMappingURL=index.js.map