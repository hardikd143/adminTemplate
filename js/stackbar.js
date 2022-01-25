$(document).ready(function () {
  let xValues = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  new Chart("StackBar", {
    type: "bar",
    data: {
      // for x Axis
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      
      datasets: [
        {
          label: "Dataset 1",
          data: [10, 20, 30, 40, 50, 60, 70, 80],
          backgroundColor: "#4755ab",
          borderWidth: 1,
        },
        {
          label: "Dataset 2",
          data: [30, 10, 70, 15, 30, 20, 70, 80],
          backgroundColor: "#b162ac",
          borderWidth: 1,
        },
        {
          label: "Dataset 3",
          data: [20, 30, 40, 50, 60, 70, 80, 80],
          backgroundColor: "#e7edf6",
        },
      ],
    },
    options: {
      tooltips: {
        mode: "index",
        intersect: false,
      },
      responsive: true,
      scales: {
        xAxes: [
          {
            stacked: true,
          },
        ],
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
    },
  });
});
