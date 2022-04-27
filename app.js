const grapharea = document.getElementById("myChart");

const average =
  dataArr.reduce((acc, el) => {
    return (acc += el.broke_amount);
  }, 0) / dataArr.length;

const data = {
  labels: dataArr.map((el) => el.date),
  datasets: [
    {
      label: "Количество ошибок",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: dataArr.map((value) => value.broke_amount),
      borderWidth:5,
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
    },
    {
      label: "Среднее значение",
      backgroundColor: "black",
      borderColor: "black",
      data: dataArr.map(()=>average),
      borderWidth:2,
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};

const myChart = new Chart(grapharea, config);

setInterval(() => {
  window.location.reload();
}, 600000);
