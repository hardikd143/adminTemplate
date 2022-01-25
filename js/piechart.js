$(document).ready(function () {
  let xValues = ["navy", "blue", "purple", "danger", "grey"];
  let yValues = [31,89,33,31,4];
  let barColors = ["#4755ab", "#4a496e", "#b162ac", "#ff4f81", "#e7edf6"];

  new Chart("PieChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
      
    },
  });
});
