interface StepFormat {
    stepGHLink: string;
    stepSumPath: string;
    stepSumTitle: string;
    twitchProjectPath: string;
    twitchProjectTitle: string;
    twitchLink: string;
    twitchLinkTitle: string;
}

class Step implements StepFormat {
    stepGHLink: string;
    stepSumPath: string;
    stepSumTitle: string;
    twitchProjectPath: string;
    twitchProjectTitle: string;
    twitchLink: string;
    twitchLinkTitle: string;

    constructor(
        stepGHLink: string,
        stepSumPath: string,
        stepSumTitle: string,
        twitchProjectPath: string,
        twitchProjectTitle: string,
        twitchLink: string,
        twitchLinkTitle: string
    ) {
        this.stepGHLink = stepGHLink;
        this.stepSumPath = stepSumPath;
        this.stepSumTitle = stepSumTitle;
        this.twitchProjectPath = twitchProjectPath;
        this.twitchProjectTitle = twitchProjectTitle;
        this.twitchLink = twitchLink;
        this.twitchLinkTitle = twitchLinkTitle;
    }
}

const step0: StepFormat = new Step(
    "https://github.com/cs-internship/cs-internship-spec/blob/master/courses/Step%200.md",
    "/Step 0/Step sum/Step 0 sum.pdf",
    "Download",
    "/Step 0/interviews/index.html",
    "First Interviews",
    "",
    "- - -"
);
const step1: StepFormat = new Step(
    "https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/01-BasicLayout-IntroJS.md",
    "/Step 1/Step sum/Step 1 sum.pdf",
    "Download",
    "/Step 1/Twitch/Presentation/",
    "Twitch Project",
    "https://www.youtube.com/watch?v=z1SaoGKI2gI&t=931s",
    "YouTube Link"
);
const step2: StepFormat = new Step(
    "https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/02-AdvancedLayout-BasicJS.md",
    "/Step 2/Step sum/Step 2 sum.pdf",
    "Download",
    "/Step 2/Twitch/Presentation/",
    "Twitch Project",
    "https://www.youtube.com/watch?v=ANwV141YV0k&t=5s",
    "YouTube Link"
);
const step3: StepFormat = new Step(
    "https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/03-intermediateJS(I).md",
    "/Step 3/Step sum/Step 3 sum.pdf",
    "Download",
    "/Step 3/Twitch/Presentation/Project/",
    "Twitch Project",
    "https://www.youtube.com/watch?v=6-t5JVtxXMY&t=2s",
    "YouTube Link"
);
const step4: StepFormat = new Step(
    "https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/04-intermediateJS(II).md",
    "/Step 4/Step sum/Step 4 sum.pdf",
    "Download",
    "/Step 4/Twitch/Presentation/",
    "Twitch Project",
    "https://youtu.be/wSXKspjwA7Q",
    "YouTube Link"
);
const step5: StepFormat = new Step(
    "https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/05-DesignPattern.md",
    "/Step 5/Step sum/Step 5 sum.pdf",
    "Download",
    "/Step 5/Twitch/Presentation/",
    "Twitch Project",
    "https://www.youtube.com/watch?v=95MPKmxf_4Y",
    "YouTube Link"
);
const step6: StepFormat = new Step(
    "https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/06-http-storage.md",
    "/Step 6/Step sum/Step 6 sum.pdf",
    "Download",
    "/Step 6/Twitch/Presentation/Project/",
    "Twitch Project",
    "https://youtu.be/F4P1bU2R-3w?si=CNr3jf6zzuZxlfOy",
    "YouTube Link"
);
const step7: StepFormat = new Step(
    "https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/07-Security.md",
    "/Step 7/Step sum/Step 7 sum.pdf",
    "Download",
    "/Step 7/Twitch/Presentation/Presentation.md",
    "Twitch Project",
    "",
    "- - -"
);
const step8: StepFormat = new Step(
    "https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/08-BasicTS.md",
    "/Step 8/Step sum/Step 8 sum.pdf",
    "Download",
    "/Step 8/Twitch/Presentation/",
    "Twitch Project",
    "",
    "- - -"
);
const step9: StepFormat = new Step(
    "https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/09-IntermediateTS(I).md",
    // "/Step 9/Step sum/Step 9 sum.pdf",
    "",
    "- - -",
    // "/Step 9/Twitch/Presentation/",
    "",
    "- - -",
    "",
    "- - -"
);
const step10: StepFormat = new Step(
    "https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/10-IntermediateTS(II).md",
    // "/Step 9/Step sum/Step 9 sum.pdf",
    "",
    "- - -",
    // "/Step 10/Twitch/Presentation/",
    "",
    "- - -",
    "",
    "- - -"
);

let allSteps = [
    step0,
    step1,
    step2,
    step3,
    step4,
    step5,
    step6,
    step7,
    step8,
    step9,
    step10,
];

const stepsTable: HTMLElement | null = document.querySelector(
    ".steps-table"
) as HTMLElement;

for (let i = 0; i < allSteps.length; i++) {
    stepsTable.innerHTML += `
        <div class="step-contents">
            <a href="${allSteps[i].stepGHLink}" class="step-number step-content" target="_black">
                Step ${i}
            </a>

            <a href="${allSteps[i].stepSumPath}" class="step-sum step-content" target="_black">
                ${allSteps[i].stepSumTitle}
            </a>

            <a href="${allSteps[i].twitchProjectPath}" class="twitch-files step-content" target="_black">
                ${allSteps[i].twitchProjectTitle}
            </a>

            <a href="${allSteps[i].twitchLink}" class="twitch-link step-content" target="_black">
                ${allSteps[i].twitchLinkTitle}
            </a>
        </div>
    `;
}
