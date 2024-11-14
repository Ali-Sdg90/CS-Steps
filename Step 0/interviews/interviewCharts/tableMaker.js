const dataTable = document.querySelector(".date-table");
const timeTable = document.querySelector(".time-table");

dataTable.innerHTML = monthAmount
    .map((month) => `<div>${month}</div>`)
    .join("");

timeTable.innerHTML = clockData.map((month) => `<div>${month}</div>`).join("");
