const dateChart = document.querySelector(".date-chart").getContext("2d");
const timeChart = document.querySelector(".time-chart").getContext("2d");

const sendOption = (isDate) => ({
    responsive: true,
    maintainAspectRatio: false,
    // devicePixelRatio: 2,
    animation: {
        duration: 1300,
        easing: "easeOutBounce",
    },
    scales: {
        x: {
            type: "category",
            grid: {
                display: true,
                color: "#B0BEC5",
            },
            ticks: {
                color: "#ccdce4",
                font: {
                    size: isDate ? 10 : 16,
                },
            },
        },
        y: {
            type: "linear",
            min: 0,
            stepSize: 2,
            grid: {
                drawBorder: true,
                drawOnChartArea: true,
                color: "#B0BEC5",
            },
            ticks: {
                color: "#ccdce4",
                font: {
                    size: isDate ? 14 : 24,
                },
            },
        },
    },
    plugins: {
        zoom: {
            pan: {
                enabled: true,
                mode: "xy",
            },
        },
        legend: {
            display: false,
        },
        tooltip: {
            enabled: true,
            callbacks: {
                label: function (context) {
                    return "   " + context.raw;
                },
            },
            titleFont: {
                size: isDate ? 10 : 20,
                weight: "bold",
            },
            bodyFont: {
                size: isDate ? 10 : 18,
            },
            padding: {
                top: isDate ? 8 : 10,
                bottom: isDate ? 8 : 10,
                left: isDate ? 8 : 15,
                right: isDate ? 8 : 15,
            },
        },
        datalabels: {
            color: "#00323F",
            align: "top",
            anchor: "end",
            font: {
                size: 12,
                weight: "bold",
            },
            formatter: (value) => value,
        },
    },
});

new Chart(dateChart, {
    type: "line",
    data: {
        labels: monthArray,
        datasets: [
            {
                data: monthAmount,
                fill: false,
                borderColor: "#00D68A",
                backgroundColor: "#00D68A",
                borderWidth: 3,
                pointRadius: 5,
                pointHoverRadius: 12,
                tension: 0.3,
                spanGaps: false,
            },
        ],
    },
    options: sendOption(true),
});

new Chart(timeChart, {
    type: "line",
    data: {
        labels: validClockCounter,
        datasets: [
            {
                data: clockData,
                fill: false,
                borderColor: "#00D68A",
                backgroundColor: "#00D68A",
                borderWidth: 5,
                pointRadius: 6,
                pointHoverRadius: 14,
                tension: 0.3,
                spanGaps: false,
            },
        ],
    },
    options: sendOption(false),
});
