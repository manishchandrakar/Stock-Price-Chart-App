import React, { useRef, useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';

import { Line } from 'react-chartjs-2'; 
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import { CategoryScale, Chart } from "chart.js";


const StockChart = ({ stockData }) => {
  const chartRef = useRef(null);
  ChartJS.register(LineElement, PointElement, LinearScale, Title);

 

      // console.log(stockData,'chart')
  // useEffect(() => {
  //   // Check for loading or empty data conditions here
  //   if (!stockData) {
  //     return;
  //   }

  //   if (!Array.isArray(stockData) || stockData.length === 0) {
  //     return;
  //   }

  //   const createChart = () => {
  //     if (chartRef.current && Array.isArray(stockData)) {
  //       const ctx = chartRef.current.chartInstance;
  //       console.log(stockData,'charts');
  //       const labels = stockData.map((stock) => stock.symbol);
  //       const prices = stockData.map((stock) => stock.price);
  //         // console.log(labels,prices,'charts');
  //         // const labels = [];
  //         // const prices = [];
  //       const newChartData = {
  //         labels: labels,
  //         datasets: [
  //           {
  //             label: 'Stock Prices',
  //             data: prices,
  //             borderColor: 'rgba(75, 192, 192, 1)',
  //             backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //             fill: true,
  //           },
  //         ],
  //       };
  //       ctx.data = newChartData;
  //       ctx.update();
  //     }
  //   };

  //   // Create the chart when stockData changes
  //   createChart();
  // }, [stockData]);

  const [data,setData]=useState(null);
  const [options,setOptions] = useState(null);


  useEffect(() =>{

    const label = stockData.map((stock) => stock.symbol);
    const price = stockData.map((stock) => stock.price);

    Chart.register(CategoryScale);
     
        
     let  dat = {
        // labels: ['January', 'February', 'March', 'April', 'May'],
        labels : label,
        datasets: [
          {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            // data: [65, 59, 80, 81, 56]
            data : price
          }
        ]
      };

   let  option = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          }
        }
      }

      setData(dat);
      setOptions(option)
  },[])

  return (
    <div className="chart-container">
      { data && options && <Line ref={chartRef} data={data} options={options} />}
    </div>
  );
};

export default StockChart;
