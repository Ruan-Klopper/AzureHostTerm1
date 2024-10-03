import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Total Winnings",
        data: [6500, 5900, 8000, 8100, 5600, 5500, 4000],
        backgroundColor: ["#FBD038", "#B9E425", "grey"],
        borderRadius: 4,
        barPercentage: 0.9,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          stepSize: 1000,
        },
      },
    },
  };

  return (
    <div className="chart-container" style={{ height: "500px" }}>
      <Bar data={barData} options={options} />
    </div>
  );
};

export default BarChart;
