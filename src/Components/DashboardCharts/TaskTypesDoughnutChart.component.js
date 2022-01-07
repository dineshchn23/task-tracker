import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ["Open", "In Progress", "Done", "On Hold"];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Statuswise tasks count",
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(0, 63, 92, 0.5)",
        "rgba(69, 59, 140, 0.5)",
        "rgba(201, 41, 136, 0.5)",
        "rgba(255, 99, 97, 0.5)",
      ],
      borderColor: [
        "rgba(0, 63, 92, 1)",
        "rgba(69, 59, 140, 1)",
        "rgba(201, 41, 136, 1)",
        "rgba(255, 99, 97, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const TaskTypesDoughnutChart = () => {
  return <Doughnut data={data} options={options} />;
};
export default TaskTypesDoughnutChart;
