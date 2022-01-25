$(document).ready(function(){
    
let xValues = ["January", "February", "March","April","May","June", "July"];

new Chart("LineChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{ 
        data: [10,40,20,35,25,50,10,70],
        borderColor: "purple",
        fill: false
    }, { 
          data: [30,10,70,15,60,20,70,80],
        borderColor: "navy",
        fill: false
      }]
    },
    options: {
      legend: {display: false},
      responsive:true,
      tooltips: {
        mode: 'index',
        intersect: false,
    },
    hover: {
        mode: 'nearest',
        intersect: true
    },
    }
  });
  
})