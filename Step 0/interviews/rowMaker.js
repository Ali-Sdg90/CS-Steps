const headersConfig = {
    asNewIntern: {
        title: "As New Intern",
        headers: [
            "#",
            "Name",
            "Telegram Username",
            "State",
            "Date",
            'Twitter (<span class="thin-font">𝕏</span>)',
            "Telegram",
            "Local Note",
        ],
    },
    withMentors: {
        title: "With Mentors",
        headers: [
            "#",
            "Name",
            "Telegram Username",
            "Date",
            "Linkedin",
            "Local Note",
        ],
    },
    withNewInterns: {
        title: "With New Interns",
        headers: [
            "#",
            "Name",
            "Telegram Username",
            "Date",
            "My introduction on Telegram",
            "Local Note",
        ],
    },
};

const createHeader = (mode) => {
    return headersConfig[mode].headers
        .map((item) => `<div class="header">${item}</div>`)
        .join("");
};

const createRow = (memberInfo, index, mode) => {
    const twitterCell =
        mode === "asNewIntern"
            ? `<div>${
                  memberInfo.twitterLink
                      ? `<a href="${memberInfo.twitterLink}" target="_blank">Link</a>`
                      : "- -"
              }</div>`
            : "";

    const telegramCell = `
        ${
            mode !== "withMentors"
                ? `<div>${
                      memberInfo.telegramLink
                          ? `<a href="${memberInfo.telegramLink}" target="_blank">Link</a>`
                          : "- -"
                  }</div>`
                : ""
        }
    `;

    const linkedinCell =
        mode === "withMentors"
            ? `<div>${
                  memberInfo.linkedinLink
                      ? `<a href="${memberInfo.linkedinLink}" target="_blank">Link</a>`
                      : "- -"
              }</div>`
            : "";

    const stateCell = mode === "asNewIntern" ? `<div>Done.</div>` : "";

    return `
        <div>${index + 1}</div>
        <div>${memberInfo.name}</div>
        <div>${memberInfo.username}</div>
        ${stateCell}
        <div>${memberInfo.date}</div>
        ${twitterCell}
        ${telegramCell}
        ${linkedinCell}
        <div link="${memberInfo.name}" class="path">CopyPath</div>
    `;
};

const createHtmlTable = (tableIndex) => {
    const modesData = Object.entries(headersConfig);
    const modesKeys = Object.keys(headersConfig);

    let htmlList = `<div class="separator" style="grid-column: span ${modesData[tableIndex][1].headers.length};">${modesData[tableIndex][1].title}</div>`;

    htmlList += createHeader(modesKeys[tableIndex]);

    interviewsData[modesKeys[tableIndex]].forEach((memberInfo, index) => {
        console.log(memberInfo, index, modesKeys[tableIndex]);

        htmlList += createRow(memberInfo, index, modesKeys[tableIndex]);
    });

    return htmlList;
};

document.querySelectorAll(".interview-table").forEach((tableElement, index) => {
    tableElement.innerHTML = createHtmlTable(index);
});

const tableColors = ["rgb(81,81,81)", "rgb(86,86,86)"];

const colorizeTable = (selector, groupSize) => {
    let items = Array.from(document.querySelectorAll(selector));
    items.shift();

    items.forEach((item, index) => {
        const groupIndex = Math.floor(index / groupSize) % tableColors.length;
        item.style.backgroundColor = tableColors[groupIndex];
    });
};

colorizeTable(".as-new-intern div", 8);
colorizeTable(".with-mentors div", 6);
colorizeTable(".with-new-interns div", 6);
