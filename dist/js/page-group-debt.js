(function () {
  var chartProjectCount = document
    .getElementById("chart-detail-debt")
    .getContext("2d");

  var options = {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  new Chart(chartProjectCount, {
    type: "bar",
    data: {
      labels: [
        "Pemerintah",
        "Bank Sentral",
        "Bank",
        "LKBB",
        "Bukan Lembaga Keuangan",
      ],
      datasets: [
        {
          data: [60000, 140000, 110000, 60000, 80000],
          backgroundColor: [
            '#1C3682',
            '#1C3682',
            '#1C3682',
            '#1C3682',
            '#1C3682'
          ],
          barThickness: 20,
        },
      ],
    },
    options,
  });
})();
