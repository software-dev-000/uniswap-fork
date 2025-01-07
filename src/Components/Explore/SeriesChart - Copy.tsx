import { useState } from "react";
import Chart from 'react-apexcharts'

const chartData = [{
  index : 0,
  name: 'v3',
  data: [50,6,28,11,45,23,42,94,100, 23]
  // data: [50,6,28,11,45,23,42,94,100,73,63,35,38,96,33,100,24,53,47,74,45,48,80,15,77,87,86,99,78,71,28,23,95,79,27,93,81,66,56,65,97,11,100,96,38,70,89,29,100,55,89,86,25,56,37,96,93,9,53,77,44,99,62,19,52,1,83,51,76,53,95,93,23,39,75,65,16,51,48,50,63,86,24,8,100,79,29,22,99,97,8,5,99,87,56,99,8,42,35,34]
}, {
  index : 1,
  name: 'v2',
  data: [85 ,17 ,78 ,65 ,45 ,95 ,98 ,81 ,4 ,74 ,52 ]
  // data: [85 ,17 ,78 ,65 ,45 ,95 ,98 ,81 ,4 ,74 ,52 ,6 ,61 ,10 ,20 ,85 ,100 ,20 ,46 ,97 ,34 ,98 ,83 ,28 ,51 ,86 ,72 ,45 ,83 ,27 ,19 ,26 ,73 ,4 ,96 ,39 ,89 ,21 ,27 ,63 ,45 ,64 ,98 ,74 ,85 ,21 ,97 ,5 ,56 ,9 ,33 ,49 ,70 ,7 ,20 ,27 ,96 ,48 ,5 ,89 ,96 ,45 ,69 ,53 ,33 ,74 ,7 ,84 ,22 ,54 ,87 ,5 ,47 ,11 ,67 ,61 ,34 ,36 ,22 ,53 ,43 ,36 ,44 ,52 ,17 ,45 ,54 ,76 ,15 ,92 ,78 ,39 ,74 ,78 ,45 ,91 ,65 ,50 ,45 ,74]
}]
const timeData = [
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
  const [seriesValue, SetSeriesValue] = useState(chartData[0].data[chartData[0].data.length-1] + chartData[1].data[chartData[1].data.length-1])
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
              SetSeriesValue(chartData[0].data[config.dataPointIndex] + chartData[1].data[config.dataPointIndex])
            },
            mouseLeave: function(event, chartContext, config) {
              SetSeriesValue(chartData[0].data[chartData[0].data.length-1] + chartData[1].data[chartData[1].data.length-1]);
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
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: timeData,
          show: false
        },
        yaxis : {
          show : false,
        },
        tooltip: {
          style : {
            backgroundColor : "#131313",
            fontSize: '12px',
          },
          x: {
            show :false
          },
          theme : "dark",

          // inspect : true,
          // shared : false

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
      
      series: ["2018-09-01T09:00:00.000Z",
  "2018-09-02T09:00:00.000Z",
  "2018-09-03T09:00:00.000Z",
  "2018-09-04T09:00:00.000Z",
  "2018-09-05T09:00:00.000Z",
  "2018-09-06T09:00:00.000Z",
  "2018-09-07T09:00:00.000Z",
  "2018-09-08T09:00:00.000Z",
  "2018-09-09T09:00:00.000Z",
  "2018-09-10T09:00:00.000Z",],
      
    })

    return (
        <>
          <p className="text-[#969696] text-[18px]">Uniswap TVL</p>
          <p className="text-[#ffffff] text-[40px]">${seriesValue}B</p>
          <Chart options={state.options} series={state.series} type="area" height={350} />
        </>
    );
}

export default SeriesChart