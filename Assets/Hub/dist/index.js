"use strict";
class Step {
    constructor(stepGHLink, stepSumPath, stepSumTitle, twitchProjectPath, twitchProjectTitle, twitchLink, twitchLinkTitle) {
        this.stepGHLink = stepGHLink;
        this.stepSumPath = stepSumPath;
        this.stepSumTitle = stepSumTitle;
        this.twitchProjectPath = twitchProjectPath;
        this.twitchProjectTitle = twitchProjectTitle;
        this.twitchLink = twitchLink;
        this.twitchLinkTitle = twitchLinkTitle;
    }
}
const step0 = new Step("https://github.com/cs-internship/cs-internship-spec/blob/master/courses/Step%200.md", "./Step 0/Step sum/Step 0 sum.pdf", "Download", "./Step 0/interviews/index.html", "First Interviews", "", "- - -");
const step1 = new Step("https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/01-BasicLayout-IntroJS.md", "./Step 1/Step sum/Step 1 Sum.pdf", "Download", "./Step 1/Twitch/Presentation/", "Twitch Project", "https://www.youtube.com/watch?v=z1SaoGKI2gI&t=931s", "YouTube Link");
const step2 = new Step("https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/02-AdvancedLayout-BasicJS.md", "./Step 2/Step sum/Step 2 Sum.pdf", "Download", "./Step 2/Twitch/Presentation/", "Twitch Project", "https://www.youtube.com/watch?v=ANwV141YV0k&t=5s", "YouTube Link");
const step3 = new Step("https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/03-intermediateJS(I).md", "./Step 3/Step sum/Step 3 Sum.pdf", "Download", "./Step 3/Twitch/Presentation/Project/", "Twitch Project", "https://www.youtube.com/watch?v=6-t5JVtxXMY&t=2s", "YouTube Link");
const step4 = new Step("https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/04-intermediateJS(II).md", "./Step 4/Step sum/Step 4 Sum.pdf", "Download", "./Step 4/Twitch/Presentation/", "Twitch Project", "https://youtu.be/wSXKspjwA7Q", "YouTube Link");
const step5 = new Step("https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/05-DesignPattern.md", "./Step 5/Step sum/Step 5 Sum.pdf", "Download", "./Step 5/Twitch/Presentation/", "Twitch Project", "https://www.youtube.com/watch?v=95MPKmxf_4Y", "YouTube Link");
const step6 = new Step("https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/06-http-storage.md", "./Step 6/Step sum/Step 6 Sum.pdf", "Download", "./Step 6/Twitch/Presentation/Project/", "Twitch Project", "https://youtu.be/F4P1bU2R-3w?si=CNr3jf6zzuZxlfOy", "YouTube Link");
const step7 = new Step("https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/07-Security.md", "./Step 7/Step sum/Step 7 Sum.pdf", "Download", "./Step 7/Twitch/Presentation/", "Twitch Project", "https://www.youtube.com/watch?v=Kbj4kt2G1o8", "YouTube Link");
const step8 = new Step("https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/08-BasicTS.md", "./Step 8/Step sum/Step 8 Sum.pdf", "Download", "./Step 8/Twitch/Presentation/", "Twitch Project", "https://www.youtube.com/watch?v=eibOCI12Ve4", "YouTube Link");
const step9 = new Step("https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/09-IntermediateTS(I).md", "./Step 9/Step sum/Step 9 Sum.pdf", "Download", "./Step 9/Twitch/Presentation/", "Twitch Project", "https://youtu.be/knzLZq5wbRs?si=_DkSdDUUdpsgrgtc", "YouTube Link");
const step10 = new Step("https://github.com/cs-internship/cs-internship-spec/blob/master/courses/web/10-IntermediateTS(II).md", "./Step 10/Step sum/Step 10 Sum.pdf", "Download", "./Step 10/Twitch/Presentation/", "Twitch Project", "https://youtu.be/ztk_81s49zE?si=PEFkZSvRBaiYEb5G", "YouTube Link");
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
const stepsTable = document.querySelector(".steps-table");
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
const createRandomValue = () => {
    return [
        Math.trunc(Math.random() * 120) + 120,
        !!Math.trunc(Math.random() * 2),
    ];
};
let r = createRandomValue();
let g = createRandomValue();
let b = createRandomValue();
const changeColorValue = (value) => {
    if (value[1]) {
        value[0] = value[0] + 1;
    }
    else {
        value[0] = value[0] - 1;
    }
    if (value[0] === 120 || value[0] === 255) {
        value[1] = !value[1];
    }
    return value;
};
const makeValue = (value, divideBy) => {
    return Math.trunc(value / divideBy);
};
const updateColors = () => {
    r = changeColorValue(r);
    g = changeColorValue(g);
    b = changeColorValue(b);
    document.documentElement.style.setProperty("--randomColor1", `rgb(${makeValue(r[0], 1)}, ${makeValue(g[0], 1)}, ${makeValue(b[0], 1)})`);
    document.documentElement.style.setProperty("--randomColor2", `rgb(${makeValue(r[0], 2)}, ${makeValue(g[0], 2)}, ${makeValue(b[0], 2)})`);
    document.documentElement.style.setProperty("--randomColor3", `rgb(${makeValue(r[0], 3)}, ${makeValue(g[0], 3)}, ${makeValue(b[0], 3)})`);
    document.documentElement.style.setProperty("--randomColor4", `rgb(${makeValue(r[0], 4)}, ${makeValue(g[0], 4)}, ${makeValue(b[0], 4)})`);
};
updateColors();
setInterval(updateColors, 50);
//# sourceMappingURL=index.js.map