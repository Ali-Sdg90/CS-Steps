window.addEventListener("resize", updateDimensions);

function updateDimensions() {
    let widthInPixels = window.innerWidth;
    let heightInPixels = window.innerHeight;
    let widthInVh = (widthInPixels / window.innerWidth) * 100;
    let heightInVh = (heightInPixels / window.innerHeight) * 100;
    let widthInVw = (widthInPixels / window.innerWidth) * 100;
    let heightInVw = (heightInPixels / window.innerHeight) * 100;
    let widthInPercent = (widthInPixels / window.innerWidth) * 100;
    let heightInPercent = (heightInPixels / window.innerHeight) * 100;
    let fontSizeInRem = parseFloat(
        getComputedStyle(document.documentElement).fontSize
    );
    let widthInRem = widthInPixels / fontSizeInRem;
    let heightInRem = heightInPixels / fontSizeInRem;

    document.getElementById("px").textContent =
        widthInPixels + "px x " + heightInPixels + "px";
    document.getElementById("vh").textContent =
        widthInVh.toFixed(2) + "vh x " + heightInVh.toFixed(2) + "vh";
    document.getElementById("vw").textContent =
        widthInVw.toFixed(2) + "vw x " + heightInVw.toFixed(2) + "vw";
    document.getElementById("percent").textContent =
        widthInPercent.toFixed(2) + "% x " + heightInPercent.toFixed(2) + "%";
    document.getElementById("rem").textContent =
        widthInRem.toFixed(2) + "rem x " + heightInRem.toFixed(2) + "rem";
}

window.onload = updateDimensions;
