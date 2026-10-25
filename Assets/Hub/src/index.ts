interface ResourceLink {
    label: string;
    href: string;
}

interface StepData {
    number: number;
    period: string;
    durationDays: number;
    courseLink: string;
    summaryPath: string;
    exercises: ResourceLink[];
    projects: ResourceLink[];
    presentation?: ResourceLink;
    youtube?: ResourceLink;
}

const EXERCISM_PAGES = "https://ali-sdg90.github.io/Exercism";
const COURSE_REPOSITORY =
    "https://github.com/cs-internship/cs-internship-spec/blob/master/courses";

const playground = (label: string, path: string): ResourceLink => ({
    label,
    href: `${EXERCISM_PAGES}/${path}/`,
});

const project = (label: string, repository: string): ResourceLink => ({
    label,
    href: `https://github.com/Ali-Sdg90/${repository}`,
});

const steps: StepData[] = [
    {
        number: 0,
        period: "1402/01/07 → 1402/01/26",
        durationDays: 19,
        courseLink: `${COURSE_REPOSITORY}/Step%200.md`,
        summaryPath: "./Step%200/Step%20sum/Step%200%20sum.pdf",
        exercises: [],
        projects: [
            {
                label: "First Interviews",
                href: "./Step%200/interviews/index.html",
            },
        ],
    },
    {
        number: 1,
        period: "1402/01/30 → 1402/02/05",
        durationDays: 6,
        courseLink: `${COURSE_REPOSITORY}/web/01-BasicLayout-IntroJS.md`,
        summaryPath: "./Step%201/Step%20sum/Step%201%20Sum.pdf",
        exercises: [],
        projects: [project("Calculator", "Calculator")],
        presentation: {
            label: "Project Preview",
            href: "./Step%201/Twitch/Presentation/",
        },
        youtube: {
            label: "Watch Presentation",
            href: "https://www.youtube.com/watch?v=z1SaoGKI2gI&t=931s",
        },
    },
    {
        number: 2,
        period: "1402/02/15 → 1402/02/30",
        durationDays: 15,
        courseLink: `${COURSE_REPOSITORY}/web/02-AdvancedLayout-BasicJS.md`,
        summaryPath: "./Step%202/Step%20sum/Step%202%20Sum.pdf",
        exercises: [
            playground("Hello World", "Hello%20World"),
            playground("Two Fer", "Two%20Fer"),
        ],
        projects: [project("Calculator", "Calculator")],
        presentation: {
            label: "Project Preview",
            href: "./Step%202/Twitch/Presentation/",
        },
        youtube: {
            label: "Watch Presentation",
            href: "https://www.youtube.com/watch?v=ANwV141YV0k&t=5s",
        },
    },
    {
        number: 3,
        period: "1402/03/03 → 1402/03/18",
        durationDays: 15,
        courseLink: `${COURSE_REPOSITORY}/web/03-intermediateJS(I).md`,
        summaryPath: "./Step%203/Step%20sum/Step%203%20Sum.pdf",
        exercises: [
            playground("Leap", "Leap"),
            playground("Pangram", "Pangram"),
        ],
        projects: [
            project("Calculator", "Calculator"),
        ],
        presentation: {
            label: "Project Preview",
            href: "./Step%203/Twitch/Presentation/Project/",
        },
        youtube: {
            label: "Watch Presentation",
            href: "https://www.youtube.com/watch?v=6-t5JVtxXMY&t=2s",
        },
    },
    {
        number: 4,
        period: "1402/04/01 → 1402/04/21",
        durationDays: 20,
        courseLink: `${COURSE_REPOSITORY}/web/04-intermediateJS(II).md`,
        summaryPath: "./Step%204/Step%20sum/Step%204%20Sum.pdf",
        exercises: [playground("Pascal's Triangle", "Pascal%27s%20Triangle")],
        projects: [
            project("Todo App", "Todo-App"),
        ],
        presentation: {
            label: "Project Preview",
            href: "./Step%204/Twitch/Presentation/",
        },
        youtube: {
            label: "Watch Presentation",
            href: "https://youtu.be/wSXKspjwA7Q",
        },
    },
    {
        number: 5,
        period: "1402/04/31 → 1402/05/17",
        durationDays: 17,
        courseLink: `${COURSE_REPOSITORY}/web/05-DesignPattern.md`,
        summaryPath: "./Step%205/Step%20sum/Step%205%20Sum.pdf",
        exercises: [
            playground(
                "Resistor Color Duo",
                "Resistor%20Color%20Duo/Attempt%202"
            ),
        ],
        projects: [
            project("Todo App: KnockoutJS", "Todo-App-KnockoutJS"),
        ],
        presentation: {
            label: "Project Preview",
            href: "./Step%205/Twitch/Presentation/",
        },
        youtube: {
            label: "Watch Presentation",
            href: "https://www.youtube.com/watch?v=95MPKmxf_4Y",
        },
    },
    {
        number: 6,
        period: "1402/05/26 → 1402/07/04",
        durationDays: 40,
        courseLink: `${COURSE_REPOSITORY}/web/06-http-storage.md`,
        summaryPath: "./Step%206/Step%20sum/Step%206%20Sum.pdf",
        exercises: [playground("Sum of Multiples", "Sum%20of%20Multiples")],
        projects: [project("Todo App", "Todo-App")],
        presentation: {
            label: "Project Preview",
            href: "./Step%206/Twitch/Presentation/Project/",
        },
        youtube: {
            label: "Watch Presentation",
            href: "https://youtu.be/F4P1bU2R-3w?si=CNr3jf6zzuZxlfOy",
        },
    },
    {
        number: 7,
        period: "1402/07/14 → 1402/08/17",
        durationDays: 33,
        courseLink: `${COURSE_REPOSITORY}/web/07-Security.md`,
        summaryPath: "./Step%207/Step%20sum/Step%207%20Sum.pdf",
        exercises: [
            playground("ETL · JavaScript", "ETL-JS"),
            playground("Grade School · JavaScript", "Grade%20School-JS"),
        ],
        projects: [project("Todo Login Page", "Todo-Login-Page")],
        presentation: {
            label: "Project Preview",
            href: "./Step%207/Twitch/Presentation/",
        },
        youtube: {
            label: "Watch Presentation",
            href: "https://www.youtube.com/watch?v=Kbj4kt2G1o8",
        },
    },
    {
        number: 8,
        period: "1402/08/25 → 1402/09/08",
        durationDays: 13,
        courseLink: `${COURSE_REPOSITORY}/web/08-BasicTS.md`,
        summaryPath: "./Step%208/Step%20sum/Step%208%20Sum.pdf",
        exercises: [playground("Simple Cipher · JavaScript", "Simple%20Cipher-JS")],
        projects: [
            project(
                "Simple Shopping Site",
                "CS-Concept-TypeScript-Project"
            ),
        ],
        presentation: {
            label: "Project Preview",
            href: "./Step%208/Twitch/Presentation/",
        },
        youtube: {
            label: "Watch Presentation",
            href: "https://www.youtube.com/watch?v=eibOCI12Ve4",
        },
    },
    {
        number: 9,
        period: "1402/09/17 → 1402/10/20",
        durationDays: 33,
        courseLink: `${COURSE_REPOSITORY}/web/09-IntermediateTS(I).md`,
        summaryPath: "./Step%209/Step%20sum/Step%209%20Sum.pdf",
        exercises: [
            playground("ETL · TypeScript", "ETL-TS"),
            playground("Grade School · TypeScript", "Grade%20School-TS"),
        ],
        projects: [
            project(
                "Simple Shopping Site",
                "CS-Concept-TypeScript-Project"
            ),
        ],
        presentation: {
            label: "Project Preview",
            href: "./Step%209/Twitch/Presentation/",
        },
        youtube: {
            label: "Watch Presentation",
            href: "https://youtu.be/knzLZq5wbRs?si=_DkSdDUUdpsgrgtc",
        },
    },
    {
        number: 10,
        period: "1402/10/24 → 1402/11/10",
        durationDays: 16,
        courseLink: `${COURSE_REPOSITORY}/web/10-IntermediateTS(II).md`,
        summaryPath: "./Step%2010/Step%20sum/Step%2010%20Sum.pdf",
        exercises: [playground("Simple Cipher · TypeScript", "Simple%20Cipher-TS")],
        projects: [
            project(
                "Simple Shopping Site",
                "CS-Concept-TypeScript-Project"
            ),
        ],
        presentation: {
            label: "Project Preview",
            href: "./Step%2010/Twitch/Presentation/",
        },
        youtube: {
            label: "Watch Presentation",
            href: "https://youtu.be/ztk_81s49zE?si=PEFkZSvRBaiYEb5G",
        },
    },
];

const LINK_ICON = `
    <svg class="link-icon" viewBox="0 0 12 12" aria-hidden="true">
        <path d="M3 9 9 3M4.25 3H9v4.75" />
    </svg>
`;

const externalLink = (
    resource: ResourceLink,
    className = "resource-link"
): string => `
    <a class="${className}" href="${resource.href}" target="_blank" rel="noreferrer">
        <span>${resource.label}</span>
        ${LINK_ICON}
    </a>
`;

const renderResourceList = (
    resources: ResourceLink[],
    emptyMessage: string
): string => {
    if (resources.length === 0) {
        return `<span class="empty-state">${emptyMessage}</span>`;
    }

    return `<div class="resource-list">${resources
        .map((resource) => externalLink(resource))
        .join("")}</div>`;
};

const formatStepNumber = (stepNumber: number): string =>
    stepNumber < 10 ? `0${stepNumber}` : stepNumber.toString();

const stepsBody = document.querySelector<HTMLTableSectionElement>("#steps-body");

if (stepsBody) {
    stepsBody.innerHTML = steps
        .map(
            (step) => `
                <tr>
                    <th scope="row" class="step-cell">
                        <a class="step-link" href="${step.courseLink}" target="_blank" rel="noreferrer" aria-label="Open the official course brief for Step ${step.number}">
                            <span class="step-identity">
                                <span class="step-word">Step</span>
                                <span class="step-number">${formatStepNumber(step.number)}</span>
                            </span>
                            <span class="step-destination">Step link</span>
                            ${LINK_ICON}
                        </a>
                    </th>
                    <td>
                        <div class="step-period">
                            <span dir="ltr">${step.period}</span>
                            <span class="step-duration">${step.durationDays} days</span>
                        </div>
                    </td>
                    <td>
                        <a class="pdf-link" href="${step.summaryPath}" target="_blank">
                            <span class="file-icon" aria-hidden="true">PDF</span>
                            <span>Open summary</span>
                            ${LINK_ICON}
                        </a>
                    </td>
                    <td>${renderResourceList(step.exercises, "No exercise")}</td>
                    <td>${renderResourceList(step.projects, "No separate project")}</td>
                    <td>${
                        step.presentation
                            ? externalLink(step.presentation)
                            : '<span class="empty-state">No presentation</span>'
                    }</td>
                    <td>${
                        step.youtube
                            ? externalLink(
                                  step.youtube,
                                  "resource-link youtube-link"
                              )
                            : '<span class="empty-state">No recording</span>'
                    }</td>
                </tr>
            `
        )
        .join("");
}

const stepsTable = document.querySelector<HTMLTableElement>(".steps-table");

if (stepsTable && window.matchMedia("(hover: hover)").matches) {
    let highlightedColumn = -1;

    const clearColumnHighlight = (): void => {
        stepsTable
            .querySelectorAll(".is-column-hovered")
            .forEach((cell) => cell.classList.remove("is-column-hovered"));
        highlightedColumn = -1;
    };

    stepsTable.addEventListener("pointerover", (event) => {
        const target = event.target as HTMLElement;
        const cell = target.closest<HTMLTableCellElement>("th, td");

        if (!cell || !stepsTable.contains(cell)) {
            return;
        }

        if (cell.cellIndex === highlightedColumn) {
            return;
        }

        clearColumnHighlight();
        highlightedColumn = cell.cellIndex;
        stepsTable
            .querySelectorAll(`tr > :nth-child(${highlightedColumn + 1})`)
            .forEach((columnCell) =>
                columnCell.classList.add("is-column-hovered")
            );
    });

    stepsTable.addEventListener("pointerleave", clearColumnHighlight);
}

stepsTable?.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (target.closest("a")) {
        return;
    }

    const cell = target.closest<HTMLTableCellElement>("th, td");

    if (!cell || !stepsTable.contains(cell)) {
        return;
    }

    const links = Array.from(cell.querySelectorAll<HTMLAnchorElement>("a"));

    if (links.length === 0) {
        return;
    }

    const closestLink = links.reduce((closest, link) => {
        const closestBox = closest.getBoundingClientRect();
        const linkBox = link.getBoundingClientRect();
        const closestDistance = Math.abs(
            event.clientY - (closestBox.top + closestBox.height / 2)
        );
        const linkDistance = Math.abs(
            event.clientY - (linkBox.top + linkBox.height / 2)
        );

        return linkDistance < closestDistance ? link : closest;
    });

    closestLink.click();
});

type ColorValue = [number, boolean];

const root = document.documentElement;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const createRandomValue = (): ColorValue => [
    Math.trunc(Math.random() * 120) + 120,
    Boolean(Math.trunc(Math.random() * 2)),
];

let red = createRandomValue();
let green = createRandomValue();
let blue = createRandomValue();
let colorTimer: number | undefined;

const changeColorValue = (value: ColorValue): ColorValue => {
    value[0] += value[1] ? 1 : -1;

    if (value[0] <= 120 || value[0] >= 255) {
        value[1] = !value[1];
    }

    return value;
};

const channel = (value: number, divisor: number): number =>
    Math.trunc(value / divisor);

const updateColors = (): void => {
    red = changeColorValue(red);
    green = changeColorValue(green);
    blue = changeColorValue(blue);

    root.style.setProperty(
        "--random-color-1",
        `rgb(${channel(red[0], 1)}, ${channel(green[0], 1)}, ${channel(blue[0], 1)})`
    );
    root.style.setProperty(
        "--random-color-2",
        `rgb(${channel(red[0], 2.25)}, ${channel(green[0], 2.25)}, ${channel(blue[0], 2.25)})`
    );
    root.style.setProperty(
        "--random-color-3",
        `rgb(${channel(red[0], 3.25)}, ${channel(green[0], 3.25)}, ${channel(blue[0], 3.25)})`
    );
    root.style.setProperty(
        "--random-color-4",
        `rgb(${channel(red[0], 4.5)}, ${channel(green[0], 4.5)}, ${channel(blue[0], 4.5)})`
    );
};

const updateMotionPreference = (): void => {
    if (colorTimer !== undefined) {
        window.clearInterval(colorTimer);
        colorTimer = undefined;
    }

    updateColors();

    if (!reducedMotion.matches) {
        colorTimer = window.setInterval(updateColors, 80);
    }
};

reducedMotion.addEventListener("change", updateMotionPreference);
updateMotionPreference();
