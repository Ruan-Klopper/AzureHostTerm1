import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, PieController, ArcElement } from "chart.js/auto";

Chart.register(PieController, ArcElement);

const PieChart = ({ data }) => {
  const pieData = {
    labels: [
      "Football",
      "Horse Racing",
      "Tennis",
      "Basketball",
      "Cricket",
      "Golf",
    ],
    datasets: [
      {
        label: "Total Bets",
        data: [2500, 1800, 1200, 900, 800, 600],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  return (
    <div className="chart-container">
      <Pie data={pieData} />
    </div>
  );
};

export default PieChart;
