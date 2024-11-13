const persianMonth = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
];

interviewsData.splice(29, 5);

const persianYear = [];

interviewsData.forEach((interview) => {
    const interviewYear = interview.date.split("/")[0];

    if (persianYear.indexOf(interviewYear) === -1) {
        persianYear.push(interviewYear);
    }
});

// console.log("persianYear >>", persianYear);

const tableData = interviewsData.map((interview) => ({
    fullName: interview.name,

    monthYear: `${interview.date.split("/")[0]} ${
        persianMonth[+interview.date.split("/")[1] - 1]
    }`,
    meetingDay: +interview.date.split(" ")[0].split("/")[2],
    meetingClock: interview.date.split(" ")[1],

    hasXPost: !!interview.twitterLink,
    hasTelegramPost: !!interview.telegramLink,
}));

let monthArray = [];
let monthAmount = [];

const monthAmountCounter = () => {
    let addToTable = false;

    persianYear.map((year) => {
        persianMonth.map((month) => {
            const monthYear = year + " " + month;

            if (monthYear === tableData[0].monthYear) {
                addToTable = true;
            }

            if (addToTable) {
                // console.log(monthYear);

                monthArray.push(monthYear);

                monthAmount.push(0);

                tableData.map((interview) => {
                    if (monthYear === interview.monthYear) {
                        monthAmount[monthAmount.length - 1]++;
                    }
                });
            }

            if (monthYear === tableData[tableData.length - 1].monthYear) {
                addToTable = false;
            }
        });
    });

    console.log(monthArray, monthAmount);
};

console.log(monthAmountCounter());

console.log(tableData);
