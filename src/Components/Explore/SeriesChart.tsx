import { useState } from "react";
import Chart from 'react-apexcharts'

const chartData = [{
  index : 0,
  name: 'v3',
  data: [54.23, 9.10, 10.15, 91.44, 37.67, 37.41, 60.29, 93.66, 26.38, 88.10, 46.40, 99.77, 2.53, 71.01, 67.68, 10.35, 48.80, 94.81, 38.73, 25.48, 63.40, 39.63, 83.06, 27.12, 28.60, 72.90, 46.39, 44.45, 70.19, 49.51, 2.08, 29.66, 82.53, 65.42, 64.61, 69.40, 1.38, 64.94, 39.41, 79.35, 23.44, 5.76, 42.04, 0.74, 12.32, 60.59, 43.80, 42.07, 53.40, 8.39, 93.35, 26.86, 85.38, 98.02, 94.86, 97.31, 35.19, 32.28, 78.70, 82.98, 31.44, 8.62, 4.05, 58.95, 37.83, 92.04, 11.39, 68.82, 35.76, 46.43, 67.28, 47.07, 62.27, 20.83, 87.69, 34.40, 87.15, 71.73, 96.71, 61.80, 77.38, 51.99, 56.03, 24.34, 31.76, 7.15, 16.61, 89.00, 80.73, 0.32, 51.75, 95.20, 85.82, 1.16, 59.17, 28.38, 3.92, 83.79, 37.69, 3.81]
}, {
  index : 1,
  name: 'v2',
  data: [7.79, 5.88, 34.72, 5.87, 18.16, 13.80, 52.86, 43.78, 12.28, 38.90, 44.17, 35.16, 31.96, 55.53, 46.50, 58.96, 18.82, 60.79, 46.02, 23.30, 15.67, 43.44, 8.68, 68.34, 38.70, 38.82, 10.18, 61.94, 54.83, 41.34, 18.10, 62.19, 21.10, 18.63, 26.87, 22.76, 16.44, 28.74, 6.36, 7.68, 32.56, 51.22, 57.46, 29.47, 40.81, 42.55, 66.76, 59.33, 24.40, 28.68, 64.66, 39.33, 69.69, 60.51, 63.22, 14.27, 15.21, 34.87, 26.86, 43.04, 9.95, 60.57, 24.54, 3.66, 32.01, 68.56, 63.77, 47.39, 1.95, 11.02, 41.97, 26.11, 5.77, 18.52, 36.04, 59.97, 25.11, 56.06, 0.60, 29.17, 4.84, 36.29, 60.00, 68.20, 9.97, 39.76, 13.92, 69.60, 37.33, 47.21, 6.57, 52.64, 48.91, 40.67, 18.12, 48.18, 47.63, 15.73, 5.40, 31.53]
}]
const timeLine = [
  "2018-09-01T09:00:00.000Z",
  "2018-09-02T09:00:00.000Z",
  "2018-09-03T09:00:00.000Z",
  "2018-09-04T09:00:00.000Z",
  "2018-09-05T09:00:00.000Z",
  "2018-09-06T09:00:00.000Z",
  "2018-09-07T09:00:00.000Z",
  "2018-09-08T09:00:00.000Z",
  "2018-09-09T09:00:00.000Z",
  "2018-09-10T09:00:00.000Z",
  "2018-09-11T09:00:00.000Z",
  "2018-09-12T09:00:00.000Z",
  "2018-09-13T09:00:00.000Z",
  "2018-09-14T09:00:00.000Z",
  "2018-09-15T09:00:00.000Z",
  "2018-09-16T09:00:00.000Z",
  "2018-09-17T09:00:00.000Z",
  "2018-09-18T09:00:00.000Z",
  "2018-09-19T09:00:00.000Z",
  "2018-09-20T09:00:00.000Z",
  "2018-09-21T09:00:00.000Z",
  "2018-09-22T09:00:00.000Z",
  "2018-09-23T09:00:00.000Z",
  "2018-09-24T09:00:00.000Z",
  "2018-09-25T09:00:00.000Z",
  "2018-09-26T09:00:00.000Z",
  "2018-09-27T09:00:00.000Z",
  "2018-09-28T09:00:00.000Z",
  "2018-09-29T09:00:00.000Z",
  "2018-09-30T09:00:00.000Z",
  "2018-10-01T09:00:00.000Z",
  "2018-10-02T09:00:00.000Z",
  "2018-10-03T09:00:00.000Z",
  "2018-10-04T09:00:00.000Z",
  "2018-10-05T09:00:00.000Z",
  "2018-10-06T09:00:00.000Z",
  "2018-10-07T09:00:00.000Z",
  "2018-10-08T09:00:00.000Z",
  "2018-10-09T09:00:00.000Z",
  "2018-10-10T09:00:00.000Z",
  "2018-10-11T09:00:00.000Z",
  "2018-10-12T09:00:00.000Z",
  "2018-10-13T09:00:00.000Z",
  "2018-10-14T09:00:00.000Z",
  "2018-10-15T09:00:00.000Z",
  "2018-10-16T09:00:00.000Z",
  "2018-10-17T09:00:00.000Z",
  "2018-10-18T09:00:00.000Z",
  "2018-10-19T09:00:00.000Z",
  "2018-10-20T09:00:00.000Z",
  "2018-10-21T09:00:00.000Z",
  "2018-10-22T09:00:00.000Z",
  "2018-10-23T09:00:00.000Z",
  "2018-10-24T09:00:00.000Z",
  "2018-10-25T09:00:00.000Z",
  "2018-10-26T09:00:00.000Z",
  "2018-10-27T09:00:00.000Z",
  "2018-10-28T09:00:00.000Z",
  "2018-10-29T09:00:00.000Z",
  "2018-10-30T09:00:00.000Z",
  "2018-10-31T09:00:00.000Z",
  "2018-11-01T09:00:00.000Z",
  "2018-11-02T09:00:00.000Z",
  "2018-11-03T09:00:00.000Z",
  "2018-11-04T09:00:00.000Z",
  "2018-11-05T09:00:00.000Z",
  "2018-11-06T09:00:00.000Z",
  "2018-11-07T09:00:00.000Z",
  "2018-11-08T09:00:00.000Z",
  "2018-11-09T09:00:00.000Z",
  "2018-11-10T09:00:00.000Z",
  "2018-11-11T09:00:00.000Z",
  "2018-11-12T09:00:00.000Z",
  "2018-11-13T09:00:00.000Z",
  "2018-11-14T09:00:00.000Z",
  "2018-11-15T09:00:00.000Z",
  "2018-11-16T09:00:00.000Z",
  "2018-11-17T09:00:00.000Z",
  "2018-11-18T09:00:00.000Z",
  "2018-11-19T09:00:00.000Z",
  "2018-11-20T09:00:00.000Z",
  "2018-11-21T09:00:00.000Z",
  "2018-11-22T09:00:00.000Z",
  "2018-11-23T09:00:00.000Z",
  "2018-11-24T09:00:00.000Z",
  "2018-11-25T09:00:00.000Z",
  "2018-11-26T09:00:00.000Z",
  "2018-11-27T09:00:00.000Z",
  "2018-11-28T09:00:00.000Z",
  "2018-11-29T09:00:00.000Z",
  "2018-11-30T09:00:00.000Z",
  "2018-12-01T09:00:00.000Z",
  "2018-12-02T09:00:00.000Z",
  "2018-12-03T09:00:00.000Z",
  "2018-12-04T09:00:00.000Z",
  "2018-12-05T09:00:00.000Z",
  "2018-12-06T09:00:00.000Z",
  "2018-12-07T09:00:00.000Z",
  "2018-12-08T09:00:00.000Z",
  "2018-12-09T09:00:00.000Z",
  
]
const SeriesChart = () => {
  console.log('2234')
  const [seriesValue, SetSeriesValue] = useState({volume : chartData[0].data[chartData[0].data.length-1] + chartData[1].data[chartData[1].data.length-1], _time : timeLine[timeLine.length]})
  const [state, setState] = useState(
    {
      options: {
        chart: {
          height: 350,
          type: 'area',
          toolbar : {
            show : false,
          },
          zoom : {
            enabled : false
          },
          events: {
            mouseMove: function(event, chartContext, config) {
              const date = new Date(timeLine[config.dataPointIndex]);
              const formattedDate = date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });

              console.log(formattedDate);

              SetSeriesValue({...seriesValue, 
                volume :chartData[0].data[config.dataPointIndex] + chartData[1].data[config.dataPointIndex],
                _time : formattedDate})
            },
            mouseLeave: function(event, chartContext, config) {
              SetSeriesValue({...seriesValue, 
                volume :chartData[0].data[chartData[0].data.length - 1] + chartData[1].data[chartData[1].data.length -1],
                _time : "0"});
            },
          },
        },

        // markers: {
        //   discrete: [{
        //     seriesIndex: 0,
        //     dataPointIndex: 7,
        //     fillColor: '#e3e3e3',
        //     strokeColor: '#fff',
        //     size: 8,
        //     shape: "circle"
        //   }, {
        //     seriesIndex: 1,
        //     dataPointIndex: 11,
        //     fillColor: '#f7f4f3',
        //     strokeColor: '#eee',
        //     size: 4,
        //     shape: "circle"
        //   }]
        // },

        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight',
          width: 2,
        },
        xaxis: {
          type: 'datetime',
          categories: timeLine,
          show: false
        },
        yaxis : {
          show : false,
        },
        tooltip: {
          style : {
            fontSize: '12px',
          },
          x: {
            show :false
          },
          theme : "dark",
          followCursor: true

        },

        grid : {
          show : false
        },

        colors: ['#FC72FF', '#4C82FB'],

        selection: 'one_year',

        legend : {
          show : false
        },
      },
      
      series: chartData,

  
      
    })

    return (
        <>
          <div className="h-[100px]">
            <p className="text-[#969696] text-[18px]">Uniswap TVL</p>
            <p className="text-[#ffffff] text-[40px]">${seriesValue.volume.toFixed(2)}B</p>
            <p className={`text-[#969696] text-[18px] ${seriesValue._time === '0' ? "visibility : hidden" : "" }`}>{seriesValue._time}</p>
          </div>
          <Chart options={state.options} series={state.series} type="area" height={350} />
        </>
    );
}

export default SeriesChart