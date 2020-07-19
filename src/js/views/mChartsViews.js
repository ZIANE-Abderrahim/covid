import Chart from 'chart.js';
import { linechart } from './chartViews';
import {formatNumber} from './tableViews';
export const renderMoCharts = (dailyDATA,globalDATA) => {

  const html = `
        <div class="row">
          <h2>Latest stats in Morocco</h2>
        </div>
        <div class="row charts">
          <div class="col span-1-of-2 chart">
            <div class="chart_title">Global stats in Morocco</div>
            <div class="chart_container">
            <div class="inside_doughnut"><span>${formatNumber(globalDATA.cases)}</span><br>Cases</div>
              <canvas id="myChart1"></canvas>
            </div>
          </div>
          <div class="col span-1-of-2 chart">
            <div class="chart_title">Daily New Deaths in Morocco</div>
            <div class="chart_container">
            
              <canvas id="myChart"></canvas>
            </div>
          </div>
        </div>
        <div class="barChart">
        <div class="row">
          <div class="col span-2-of-2 line" >
          <div class="chart_title"id="bartitle">Daily New Cases in Morocco</div>
          <div class="chart_container lineContainer">
            <canvas id="lineChart"></canvas>
          </div>
        </div>
        </div>
        </div>
        <div class="row total_mo">
          <div class="col span-1-of-2 chart">
            <div class="chart_title">Total Cases in Morocco</div>
            <div class="chart_container">
          
              <canvas id="lineChart1"></canvas>
            </div>
          </div>
          <div class="col span-1-of-2 chart">
            <div class="chart_title">Total Deaths in Morocco</div>
            <div class="chart_container">
              <canvas id="lineChart2"></canvas>
            </div>
          </div>
        </div>`;
  document.querySelector('.aboutWorld').insertAdjacentHTML('beforeend', html);
  doughuntChart(globalDATA);
  barChart(dailyDATA);
  barChart1(dailyDATA);
  lineChart1(dailyDATA);
  lineChart2(dailyDATA);


}
export const doughuntChart = (Data) => {
  let myChart = document.getElementById('myChart1').getContext('2d');

  // Global Options
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = '#777';
  //type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  let data = {
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
      hoverBorderColor: '#777'
    }]
  }
  let options = {
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

    
  };
  let massPopChart = new Chart(myChart, {
    type: 'doughnut',
    options: options,
    data: data
  });
}
export const barChart = (Data) => {
  let myChart = document.getElementById('lineChart').getContext('2d');
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = '#777';

  let data = {
    labels: objTotab(Data, 'key'),
    datasets: [

      {

        backgroundColor: "#F39C12",
        borderColor: "#F39C12",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(0,99,132,0.4)",
        hoverBorderColor: "#F9BF3B",
        fill: false,
        label: 'Daily New Cases',
        data: objTotab(Data, 'value', 'new_daily_cases'),

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
          
          callback: function(label, index, labels) {
              /*return label/1000+'k';*/
              return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              
          }
      }
      }],
      
      
    }


  };
  let massPopChart = new Chart(myChart, {
    type: 'line',
    options: options,
    data: data
  });

};
export const barChart1 = (Data) => {
  let myChart = document.getElementById('myChart').getContext('2d');
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = '#777';

  let data = {
    labels: objTotab(Data, 'key'),
    datasets: [

      {

        backgroundColor: "#FF0000",
        borderColor: "#FF0000",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(0,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        fill: false,
        label: 'Daily New Deaths',
        //data: objTotab(Data, 'value', 'new_daily_deaths'),
        data: objTotab(Data, 'value','new_daily_deaths')

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
          callback: function(label, index, labels) {
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
export const lineChart1 = (Data) => {
  let myChart = document.getElementById('lineChart1').getContext('2d');
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = '#777';

  let data = {
    labels: objTotab(Data, 'key'),
    datasets: [

      {

        backgroundColor: "#33CCFF",
        borderColor: "#33CCFF",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(0,99,132,0.4)",
        hoverBorderColor: "#F9BF3B",
        fill: false,
        label: 'Total Cases',
        data: objTotab(Data, 'value', 'total_cases'),

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
          callback: function(label, index, labels) {
              /*return label/1000+'k';*/
              return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              
          }
      }
      }]
      
    }


  };
  let massPopChart = new Chart(myChart, {
    type: 'line',
    options: options,
    data: data
  });

};
export const lineChart2 = (Data) => {
  let myChart = document.getElementById('lineChart2').getContext('2d');
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = '#777';

  let data = {
    labels: objTotab(Data, 'key'),
    datasets: [

      {

        backgroundColor: "#FF0000",
        borderColor: "#FF0000",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(0,99,132,0.4)",
        hoverBorderColor: "#F9BF3B",
        fill: false,
        label: 'Total Deaths',
        data: objTotab(Data, 'value', 'total_deaths'),

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
          callback: function(label, index, labels) {
              /*return label/1000+'k';*/
              return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              
          }
      }
      }]
      
    }


  };
  let massPopChart = new Chart(myChart, {
    type: 'line',
    options: options,
    data: data
  });

};

const objTotab = (data, type,ty) => {
  let k, x, i;
  x = [];
  if (type == 'key') {
    k = Object.keys(data);
  } else {
    k = tabTotab(Object.values(data), ty);
    
  }
  i = 1;

  while (i < k.length) {
    x.push(k[i]);
    i = i + 1;
  }
  return x;
};
const tabTotab = (data, ty) => {
  return data.map(function (current) {
    return current[ty]
  });

}