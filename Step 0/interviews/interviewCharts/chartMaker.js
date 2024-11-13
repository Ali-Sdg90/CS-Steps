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

let mentorsInterviews = interviewsData.slice(29, 34);

interviewsData.splice(29, 5);

interviewsData.splice(41, 0, ...mentorsInterviews); // Add Mentors Interviews

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

    // console.log(monthArray, monthAmount);
};

monthAmountCounter();

// console.log(tableData);

// -- Time Section --

const timeArray = tableData.map((interview) => {
    return interview.meetingClock;
});

timeArray.sort((a, b) => {
    const [hoursA, minutesA] = a.split(":").map(Number);
    const [hoursB, minutesB] = b.split(":").map(Number);
    return hoursA - hoursB || minutesA - minutesB;
});

console.log(timeArray);

const addToTime = (currentTime) => {
    let totalMinuets =
        +(currentTime.split(":")[0] * 60) + +currentTime.split(":")[1];

    totalMinuets += 15;

    return `${Math.floor(totalMinuets / 60)
        .toString()
        .padStart(2, "0")}:${(totalMinuets - Math.floor(totalMinuets / 60) * 60)
        .toString()
        .padStart(2, "0")}`;
};

const clockCounter = ["06:00"];
const clockData = [];

const validClockCounter = [];

for (let i = 0; i < 72; i++) {
    clockCounter.push(addToTime(clockCounter[clockCounter.length - 1]));
}

let addToClockArrays = false;

clockCounter.forEach((clock) => {
    if (clock === timeArray[0]) {
        addToClockArrays = true;
    }

    if (addToClockArrays) {
        validClockCounter.push(clock);

        clockData.push(0);

        tableData.map((interview) => {
            if (clock === interview.meetingClock) {
                clockData[clockData.length - 1]++;
            }
        });
    }

    if (clock === timeArray[timeArray.length - 1]) {
        addToClockArrays = false;
    }
});

console.log(validClockCounter, clockData);
