import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import "./PlacementTracker.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PlacementTracker = () => {
  const data = {
    labels: ["Applied", "Interviewed", "Offers"],
    datasets: [
      {
        label: "Placements",
        data: [10, 5, 2],
        backgroundColor: ["#4caf50", "#ff9800", "#f44336"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="placement-tracker">
      <h1>Placement Tracker</h1>
      <div className="stats">
        <div className="card">
          <h2>10</h2>
          <p>Applications</p>
        </div>
        <div className="card">
          <h2>5</h2>
          <p>Interviews</p>
        </div>
        <div className="card">
          <h2>2</h2>
          <p>Offers</p>
        </div>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PlacementTracker;
