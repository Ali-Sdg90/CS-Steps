document.querySelectorAll("div").forEach((div) => {
    const divContent = div.textContent;

    if (divContent.charAt(0) === "@") {
        div.style.cursor = "copy";
        div.addEventListener("click", function () {
            const textToCopy = divContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
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
        case "No Time":
            div.style.color = "rgb(78, 122, 254)";
            break;
        case "Done.":
            div.style.color = "rgb(254, 242, 78)";
            break;
    }
});
