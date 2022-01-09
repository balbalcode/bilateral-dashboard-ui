(function () {
    var ChartDetailDebt = document
        .getElementById("chart-detail-debt")
        .getContext("2d");

    new Chart(ChartDetailDebt, {
        type: "pie",
        data: {
            labels: [
                "Lainnya",
                "Organisasi",
                "Negara Pemberi Pinjaman",
            ],
            datasets: [
                {
                    label: "Jumlah Hutang",
                    data: [160.38, 33.103, 215.453],
                    backgroundColor: [
                        '#58B431',
                        '#F88A28',
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
