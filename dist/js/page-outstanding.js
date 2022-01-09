(function () {
    var ChartDebtDevelopment = document
        .getElementById("chart-debt-development")
        .getContext("2d");

    new Chart(ChartDebtDevelopment, {
        type: "line",
        data: {
            labels: [
                "2015",
                "2016",
                "2017",
                "2018",
                "2019",
                "2020",
            ],
            datasets: [
                {
                    label: "Pemerintah",
                    data: [100, 120, 160, 180, 205, 210],
                    borderColor: '#FF3939',
                    backgroundColor: 'transparent'
                },

                {
                    label: "BUMN",
                    data: [20, 20, 30, 50, 70, 90],
                    borderColor: '#58B431',
                    backgroundColor: 'transparent'
                },

                {
                    label: "Swasta",
                    data: [80, 75, 95, 95, 95, 95],
                    borderColor: '#F8BA28',
                    backgroundColor: 'transparent'
                },

                {
                    label: "Total",
                    data: [250, 264, 290, 310, 340, 350],
                    borderColor: '#AC19BE',
                    backgroundColor: 'transparent'
                },
            ],
        },
        options: {
            legend: {
                position: 'bottom'
            },
            scales: {
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });

    var ChartCountryDebt = document
        .getElementById("chart-country-debt")
        .getContext("2d");

    new Chart(ChartCountryDebt, {
        type: "pie",
        data: {
            labels: [
                "Swasta",
                "Pemerintah",
                "BUMN",
            ],
            datasets: [
                {
                    label: "Jumlah Hutang",
                    data: [29, 58, 13,],
                    backgroundColor: [
                        '#F8BA28',
                        '#EC4545',
                        '#58B431'
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

    var ChartDetailDebt = document
        .getElementById("chart-detail-debt")
        .getContext("2d");

    new Chart(ChartDetailDebt, {
        type: "pie",
        data: {
            labels: [
                "SBN Internasional",
                "Komersial",
                "Bilateral",
                "Multilateral",
                "SBN Domestik",
            ],
            datasets: [
                {
                    label: "Jumlah Hutang",
                    data: [23, 1, 10, 6, 18],
                    backgroundColor: [
                        '#F88A28',
                        '#F8BA28',
                        '#EC4545',
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
