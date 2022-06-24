(function () {
  const grapharea = document.getElementById("overdue_tasks_chart");

  const mainData = dataArr3.reverse()

  const average =
    mainData.reduce((acc, el) => {
      return (acc += el.tasks_amount);
    }, 0) / mainData.length;

  const data = {
    labels: mainData.map((el) => new Date(el.date).toLocaleDateString()),
    datasets: [
      {
        label: "Количество заданий в РТК с просроченным SLA",
        backgroundColor: "rgb(30, 30, 243)",
        borderColor: "rgb(30, 30, 243)",
        data: mainData.map((value) => value.tasks_amount),
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
