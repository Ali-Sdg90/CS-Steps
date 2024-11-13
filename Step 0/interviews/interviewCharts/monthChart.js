const ctx = document.getElementById("myChart").getContext("2d");

const myChart = new Chart(ctx, {
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
                pointHoverRadius: 7,
                pointStyle: "cross",
                tension: 0.3,
                spanGaps: false,
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 1000,
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
                    color: "#00323F",
                    font: {
                        size: 14,
                        weight: "bold",
                    },
                },
            },
            y: {
                type: "linear",
                min: 0,
                // max: 14,
                stepSize: 2,
                grid: {
                    drawBorder: true,
                    drawOnChartArea: true,
                    color: "#B0BEC5",
                },
                ticks: {
                    color: "#00323F",
                    font: {
                        size: 14,
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: true,
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
    },
});
