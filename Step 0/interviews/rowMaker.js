let htmlList = `
    <div class="header">Name</div>
    <div class="header">Telegram ID</div>
    <div class="header">State</div>
    <div class="header">Date</div>
    <div class="header">Twitter (<span class="thin-font">𝕏</span>)</div>
    <div class="header">Telegram</div>
    <div class="header">Local Note</div>
`;

interviewsData.forEach((memberInfo, index) => {
    switch (index) {
        case 29:
            htmlList += `
                <div class="separator">- - - - - - - - - - -</div>
                <div class="separator">- - - - - - - - - - -</div>
                <div class="separator">- - - - - - - - - - -</div>
                <div class="separator separator__header">Mentors</div>
                <div class="separator">- - - - - - - - - - -</div>
                <div class="separator">- - - - - - - - - - -</div>
                <div class="separator">- - - - - - - - - - -</div>
            `;
            break;
        case 34:
            htmlList += `
                <div class="separator">- - - - - - - - - - -</div>
                <div class="separator">- - - - - - - - - - -</div>
                <div class="separator">- - - - - - - - - - -</div>
                <div class="separator separator__header">New Interns</div>
                <div class="separator">- - - - - - - - - - -</div>
                <div class="separator">- - - - - - - - - - -</div>
                <div class="separator">- - - - - - - - - - -</div>
            `;
            break;
    }

    htmlList += `
        <div>${memberInfo.name}</div>
        <div>${memberInfo.username}</div>
        <div>Done.</div>
        <div>${memberInfo.date}</div>
        <div>
            ${
                memberInfo.twitterLink
                    ? `<a 
                    href="${memberInfo.twitterLink}"
                    target="_blank"
                    >Link</a
                >`
                    : "- -"
            }
        </div>
        <div>
            ${
                memberInfo.telegramLink
                    ? `<a 
                    href="${memberInfo.telegramLink}"
                    target="_blank"
                    >Link</a
                >`
                    : "- -"
            }
        </div>
        <div link="${memberInfo.name}" class="path">CopyPath</div>
    `;
});

document.querySelector("main").innerHTML = htmlList;
