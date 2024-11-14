const dateChart = document.querySelector(".date-chart").getContext("2d");
const timeChart = document.querySelector(".time-chart").getContext("2d");

const sendOption = () => ({
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
                    size: 14,
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
                    size: 14,
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
            zoom: {
                enabled: true,
                mode: "xy",
                rangeMin: {
                    x: 0,
                },
                rangeMax: {
                    x: validClockCounter.length - 1,
                },
                rangeMin: {
                    y: 0,
                },
                rangeMax: {
                    y: Math.max(...clockData) + 2,
                },
            },
        },
        legend: {
            display: false,
        },
        tooltip: {
            enabled: true,
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
                // pointStyle: "cross",
                tension: 0.3,
                spanGaps: false,
            },
        ],
    },
    options: sendOption(),
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
                borderWidth: 3,
                pointRadius: 5,
                pointHoverRadius: 12,
                // pointStyle: "cross",
                tension: 0.3,
                spanGaps: false,
            },
        ],
    },
    options: sendOption(),
});
