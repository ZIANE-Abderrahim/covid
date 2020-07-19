import Chart from 'chart.js';
import {
  formatNumber
} from './tableViews';
export const renderGlobalCharts = (global, deaths, continent) => {
  const html = `<div class="row">
  <h2>Latest data about the world</h2>
</div>
<div class="row charts">
  <div class="col span-1-of-2 chart">
    <div class="chart_title">Global stats</div>
    <div class="chart_container">
    <div class="inside_doughnut"><span>${formatNumber(global.cases)}</span><br>Cases</div>
      <canvas id="myChart"></canvas>
    </div>
  </div>
  <div class="col span-1-of-2 chart">
    <div class="chart_title">Daily stats</div>
    <div class="chart_container">
      
      <canvas id="myChart1"></canvas>
    </div>
  </div>
</div>
<div class="barChart">
<div class="row">
  <div class="col span-2-of-2 line">
    <div class="chart_title" id="bartitle">Continents Totals</div>
    <div class="chart_container lineContainer">
      <canvas id="lineChart"></canvas>
    </div>
  </div>
</div>
</div>`;
  document.querySelector('.aboutWorld').insertAdjacentHTML('beforeend', html);
  doughuntChart(global);
  linechart(deaths);
  barChart(continent);
}
export const doughuntChart = (Data) => {
  let myChart = document.getElementById('myChart').getContext('2d');
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = '#777';
  let massPopChart = new Chart(myChart, {

    type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: ['Total deaths', 'Active cases', 'Total recovered'],
      datasets: [{
        label: 'Covid-19',
        data: [

          Data.deaths,
          Data.active,
          Data.recovered
        ],
        //backgroundColor:'green',
        backgroundColor: [
          '#FF0000',
          '#F9BF3B',

          '#336E7B',

        ],

        borderColor: '#777',
        //hoverBorderWidth:6,
        hoverBorderColor: [
          '#777',
          '#777',
          '#2f90d2'
        ]
        
      }]
    },
    options: {
      cutoutPercentage: 65,
      maintainAspectRatio: false,
      title: {
        display: false,
        text: 'Global data',
        fontSize: 25
      },
      legend: {
        display: 'true',
        position: 'left',
        align: 'center',
        labels: {
          fontColor: '#000',
          boxWidth: 30,
          fontSize: 15
        }
      },

      tooltips: {


      }
    }
  });
}
export const barChart = (Data) => {
  let myChart = document.getElementById('lineChart').getContext('2d');
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = '#777';

  let data = {
    labels: ["North America", "Europe", "Asia", "South America", "Oceania", "Africa"],
    datasets: [

      {

        backgroundColor: "#FF0000",
        borderColor: "#FF0000",
        borderWidth: 2,
        hoverBackgroundColor: "#b00",
        hoverBorderColor: "rgba(255,99,132,1)",

        label: "Total Deaths",
        data: tabTotab(Data, 'deaths'),

      },
      {
        backgroundColor: "#336E7B",
        borderColor: "rgba(2, 114, 2, 0.712)",
        borderWidth: 2,
        hoverBackgroundColor: "#2f90d2",
        hoverBorderColor: "rgba(255,99,132,1)",

        label: "Total Recovered",
        data: tabTotab(Data, 'recovered')

      },
      {

        borderColor: "#1E8BC3",
        backgroundColor: "#F9BF3B",
        borderWidth: 2,
        hoverBackgroundColor: "#F7CA18",
        hoverBorderColor: "rgba(255,99,132,1)",
        label: "Total active",
        data: tabTotab(Data, 'active')

      }

    ]
  };

  let options = {

    cutoutPercentage: 65,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'top',
      align: 'center',
      labels: {
        fontColor: '#000',
        boxWidth: 30,
        fontSize: 15
      }
    },
    tooltips: {
      callbacks: {

        label: function (tooltipItem, data) {

          return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        },

      },

    },
    scales: {
      yAxes: [{
        ticks: {
          callback: function (label, index, labels) {
            /*return label/1000+'k';*/
            return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

          }
        }
      }]

    }

  };
  let massPopChart = new Chart(myChart, {
    type: 'bar',
    options: options,
    data: data
  });

}

export const linechart = (Data) => {
  let mychart = document.getElementById('myChart1').getContext('2d');
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = '#777';

  let data = {
    labels: objToTab(Data.recovered, 'key'),
    datasets: [

      {

        fill: false,
        borderColor: "#FF0000",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(0,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",

        label: "Total Deaths",
        data: objToTab(Data.deaths, 'value'),

      },
      {

        borderColor: "rgba(2, 114, 2, 0.712)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        fill: false,
        label: "Total Recovered",
        data: objToTab(Data.recovered, 'value')

      },
      {
        fill: false,
        borderColor: "#F9BF3B",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        label: "Total cases",
        data: objToTab(Data.cases, 'value')

      }

    ]
  };

  let options = {

    cutoutPercentage: 65,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'top',
      align: 'center',
      labels: {
        fontColor: '#000',
        boxWidth: 30,
        fontSize: 15
      }
    },
    tooltips: {
      callbacks: {

        label: function (tooltipItem, data) {

          return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        },

      },

    },
    scales: {
      yAxes: [{
        ticks: {
          callback: function (label, index, labels) {
            /*return label/1000+'k';*/
            return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

          }
        }
      }]

    }
  };
  let massPopChart = new Chart(mychart, {
    type: 'line',
    options: options,
    data: data
  });
}


const objToTab = (data, type) => {
  let k, x, i = 2;
  x = [];
  if (type == 'key') {
    k = Object.keys(data);
  } else {
    k = Object.values(data);
  }
  while (i < k.length) {
    x.push(k[i]);
    i = i + 3;
  }
  return x;
}
const tabTotab = (data, type) => {
  return data.map(function (current) {
    return current[type]
  });

}