import React from "react";
import { Line } from "react-chartjs-2";
import {
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Chart,
} from "chart.js";
import weightData from "../../services/weightData";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

function WeightProgressChart() {
  const chartData = {
    labels: weightData.map((entry) => entry.date),
    datasets: [
      {
        label: "Peso (kg)",
        data: weightData.map((entry) => entry.weight),
        fill: false,
        borderColor: "#CBFF45",
        tension: 0.1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: "#EFEEEE",
        },
        grid: {
          color: "#585858",
        },
      },
      y: {
        ticks: {
          color: "#EFEEEE",
        },
        grid: {
          color: "#585858",
        },
      },
    },
  };

  return <Line data={chartData} options={options}/>;
}

export default WeightProgressChart;
