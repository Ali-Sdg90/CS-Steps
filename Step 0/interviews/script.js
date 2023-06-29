document.querySelectorAll("div").forEach((div) => {
    const divContent = div.textContent;

    if (divContent.charAt(0) === "@" || divContent === "CopyPath") {
        div.style.cursor = "copy";
        div.addEventListener("click", function () {
            let textToCopy = divContent;
            if (div.getAttribute("link")) {
                textToCopy = `file:///C:/Users/ali90/OneDrive/Desktop/CS-Internship/Interviews/${div
                    .getAttribute("link")
                    .replace(/ /g, "%20")}.txt`;
            }
            navigator.clipboard.writeText(textToCopy).then(() => {
                toastifyCopy(textToCopy);
                console.log(`Copied "${textToCopy}" to clipboard`);
                const defBackgroundColor = div.style.background;
                div.style.background = "transparent";
                setTimeout(() => {
                    div.style.background = defBackgroundColor;
                }, 200);
            });
        });
    } else if (!divContent) {
        div.textContent = "- -";
    }

    switch (divContent) {
        case "Pending":
            div.style.color = "rgb(254, 78, 78)";
            break;
        case "Long Time":
            div.style.color = "rgb(204, 78, 254)";
            break;
        case "No Time":
            div.style.color = "rgb(78, 122, 254)";
            break;
        case "Done.":
            div.style.color = "rgb(254, 242, 78)";
            break;
    }
});

document.querySelectorAll("a").forEach((a) => {
    if (!a.getAttribute("href")) {
        a.style.color = "rgb(72, 87, 179)";
        a.style.cursor = "default";
        a.addEventListener("click", function (event) {
            event.preventDefault();
        });
    }
});

const toastifyCopy = (textToCopy) => {
    document.getElementById("toastify__Queue").innerHTML = `
        <span class="tostify">
            <span class="tostify__content">
                <span>Text copied</span>
                <span class="tostify__content__text" title="${textToCopy}">
                    ${textToCopy}
                </span>
            </span>
            <span class="tostify__timer"></span>
        </span>
    `;
};
