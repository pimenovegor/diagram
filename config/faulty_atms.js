(function () {
  const grapharea = document.getElementById("faulty_atms_chart");

  mainData = dataArr.reverse()
  const average =
    mainData.reduce((acc, el) => {
      return (acc += el.broke_amount);
    }, 0) / mainData.length;

  const data = {
    labels: mainData.map((el) => new Date(el.date).toLocaleDateString()),
    datasets: [
      {
        label: "Количество ошибок ATM",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: mainData.map((value) => value.broke_amount),
        borderWidth: 2,
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
      },
      {
        label: "Среднее значение",
        backgroundColor: "white",
        borderColor: "white",
        data: mainData.map(() => average),
        borderWidth: 1,
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      scales: {
        y: {
          min: Math.round(average - 60),
          max: Math.round(average + 60),
          ticks: {
            stepSize: 6,
          },
          grid:{
            color: "rgb(51, 51, 51)",
          },
        },
        x: {
          grid:{
            color: "rgb(51, 51, 51)",
          },
        }
      },
      plugins:{
        legend:{
          position:'bottom',
          labels:{
            boxHeight:5
          }
        }
      }
    },
  };

  new Chart(grapharea, config);

  setInterval(() => {
    window.location.reload();
  }, 600000);
})();
