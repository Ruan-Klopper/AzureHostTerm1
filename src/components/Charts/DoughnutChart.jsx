import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  const doughnutData = {
    labels: ["Win", "Loss"],
    datasets: [
      {
        label: "Betting Outcome",
        data: [70, 30],
        backgroundColor: ["#B9E425", "grey"],
      },
    ],
  };

  return (
    <div
      className="chart-container"
      style={{ width: "102px", height: "102px", borderRadius: "50%" }}
    >
      <Doughnut data={doughnutData} />
    </div>
  );
};

export default DoughnutChart;
