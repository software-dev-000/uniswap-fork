import { useState } from "react";
import Chart from 'react-apexcharts'

const chartData = [{
  index : 0,
  name: 'v3',
  data: [4.81, 19.36, 14.33, 12.34, 20.58, 28.44, 15.28, 10.98, 23.22, 4.71, 25.58, 20.83, 6.94, 5.68, 14.09, 14.03, 0.92, 22.57, 1.24, 0.15, 10.08, 27.35, 27.75, 24.67, 10.66, 26.69, 2.02, 13.20, 12.89, 19.56]
}, {
  index : 1,
  name: 'v2',
  data: [48.94, 1.92, 6.36, 39.05, 57.67, 39.66, 45.85, 35.18, 41.14, 25.90, 58.29, 51.09, 54.45, 43.71, 0.32, 17.17, 16.21, 56.55, 6.80, 18.51, 15.37, 42.28, 50.11, 50.08, 35.42, 59.40, 56.92, 38.72, 14.34, 44.12]
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
]

const chartType = ["Past month", "Past year", "All time"]

const BarChart = () => {
  console.log('2234')
  const [chartIndex, setChartIndex] = useState(0)
  const [seriesValue, SetSeriesValue] = useState({volume : chartData[0].data[chartData[0].data.length-1] + chartData[1].data[chartData[1].data.length-1], _time : chartType[chartIndex]})
  
  const handleChartIndex = (v: number) => {
    setChartIndex(v)
    SetSeriesValue({...seriesValue, _time : chartType[v]})
  }
  
  const [state, setState] = useState(
    {
      options: {
        chart: {
          height: 350,
          type: 'bar',
          stacked : true,
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
                _time : chartType[chartIndex]});
            },
          },
        },

        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 2,
            borderRadiusApplication: 'around',
            borderRadiusWhenStacked: 'all',
           
          }

        },

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
          shared: true,
          intersect: false,
          followCursor: true,
          style : {
            fontSize: '12px',
          },
          x: {
            show :false
          },
          theme : "dark",

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

      fill: {
        colors: ['#FF0000'], // Specify the color for the area below the line
        type: 'gradient',
        gradient: {
          shadeIntensity: 0,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      },
      
    })

    return (
        <>
          <div className="h-[100px]">
            <div className="flex justify-between">
              <p className="text-[#969696] text-[18px]">Uniswap volume</p>
              <div className="flex gap-2">
                <span onClick={() => handleChartIndex(0)} className={`text-[#969696] font-semibold text-[15px] cursor-pointer w-6 h-6 rounded-[50%] text-center ${chartIndex === 0 ? "bg-[#303030]" : ""}`}>D</span>
                <span onClick={() => handleChartIndex(1)} className={`text-[#969696] font-semibold text-[15px] cursor-pointer w-6 h-6 rounded-[50%] text-center ${chartIndex === 1 ? "bg-[#303030]" : ""}`}>W</span>
                <span onClick={() => handleChartIndex(2)} className={`text-[#969696] font-semibold text-[15px] cursor-pointer w-6 h-6 rounded-[50%] text-center ${chartIndex === 2 ? "bg-[#303030]" : ""}`}>M</span>
              </div>
            </div>
            <p className="text-[#ffffff] text-[40px]">${seriesValue.volume.toFixed(2)}B</p>
            <p className={`text-[#969696] text-[18px] ${seriesValue._time === '0' ? "visibility : hidden" : "" }`}>{seriesValue._time}</p>
          </div>
          <Chart options={state.options} series={state.series} type="bar" height={350} />
        </>
    );
}

export default BarChart