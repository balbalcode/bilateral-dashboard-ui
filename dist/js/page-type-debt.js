(function () {
    var ChartDetailDebt = document
        .getElementById("chart-detail-debt")
        .getContext("2d");

    new Chart(ChartDetailDebt, {
        type: "pie",
        data: {
            labels: [
                "Bank Sentral",
                "Pemerintah",
            ],
            datasets: [
                {
                    label: "Jumlah Hutang",
                    data: [2.754, 196.532,],
                    backgroundColor: [
                        '#58B431',
                        '#1C3682'
                    ],
                },
            ],
        },
        options: {
            legend: {
                display: false,
            },
        }
    });
})();
