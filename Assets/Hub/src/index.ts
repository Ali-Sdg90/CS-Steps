interface StepFormat {
    stepNumber: number;
    stepSumPath: string;
    twitchProjectPath: string;
    twitchLink: string;
}

class Step {
    stepNumber: number;
    stepSumPath: string;
    twitchProjectPath: string;
    twitchLink: string;

    constructor(
        stepNumber: number,
        stepSumPath: string,
        twitchProjectPath: string,
        twitchLink: string
    ) {
        this.stepNumber = stepNumber;
        this.stepSumPath = stepSumPath;
        this.twitchProjectPath = twitchProjectPath;
        this.twitchLink = twitchLink;
    }

    logInfo = () => {
        console.log(this.stepNumber);
    };
}

const step1: StepFormat = new Step(1, "hi1", "hi2", "hi3");

console.log(step1);
