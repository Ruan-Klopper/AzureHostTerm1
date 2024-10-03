import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart,
  RadarController,
  LineElement,
  PointElement,
} from "chart.js/auto";

Chart.register(RadarController, LineElement, PointElement);

const RadarChart = () => {
  const radarData = {
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
        borderColor: "#FBD038",
        backgroundColor: "rgba(251, 208, 56, 0.5)",
      },
    ],
  };

  return (
    <div className="chart-container">
      <Radar data={radarData} />
    </div>
  );
};

export default RadarChart;