import React, { useRef, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, PointElement, LinearScale, Title } from 'chart.js';
import { CategoryScale, Chart } from 'chart.js';

const StockChart = ({ stockData }) => {
  const chartRef = useRef(null);
  ChartJS.register(BarElement, PointElement, LinearScale, Title);

  const [data, setData] = useState(null);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    const labels = stockData.map((stock) => stock.symbol);
    const prices = stockData.map((stock) => stock.price);

    Chart.register(CategoryScale);

    let dat = {
      labels: labels,
      datasets: [
        {
          label: 'Stock Prices',
          backgroundColor: 'rgba(75,192,192,0.5)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          data: prices,
        },
      ],
    };

    let option = {
      responsive: true,
      maintainAspectRatio: false, // Set to false to adjust the chart size based on container size
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart',
        },
      },
    };

    setData(dat);
    setOptions(option);
  }, []);

  return (
    <div className="chart-container" style={{ width: '100%', height: '70vh' }}>
      {data && options && <Bar ref={chartRef} data={data} options={options} />}
    </div>
  );
};

export default StockChart;
