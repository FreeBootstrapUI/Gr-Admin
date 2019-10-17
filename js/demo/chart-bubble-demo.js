// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito Sans, sans-serif', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("mybubbleChart");
var myPieChart = new Chart(ctx, {
  type: 'bubble',
  data: {
    labels: ["Sales", "Costs", "Export", 'Orders', 'Totle Sales'],
    datasets: [{
      data: [20, 40, 60, 80 , 100],
      backgroundColor: ['#ff5050', '#ffc36d', '#214798', '#2cabe3', '#2cd07e'],
      hoverBackgroundColor: ['#ff5050', '#ffc36d', '#214798', '#2cabe3', '#2cd07e'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
