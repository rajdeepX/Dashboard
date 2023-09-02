import React from "react";
import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale, //x-axis
  PointElement, //y-axis
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

interface LineGraphProps {
  options: ChartOptions<"line">;
  data: ChartData<"line">;
}

const formatDates = (dates: string[]): string[] => {
  return dates.map((date) => {
    const [month, day, year] = date.split("/");
    return `20${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  });
};

const Chart: React.FC<LineGraphProps> = ({ dates, data }) => {
  const formattedDates = formatDates(dates);
  const chartData = {
    labels: formattedDates,
    datasets: [
      {
        label: "sales",
        data: data,
        backgroundColor: "aqua",
        borderColor: "black",
        pointBorderColor: "aqua",
      },
    ],
  };

  const options: ChartOptions = {
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Cases",
        },
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options}></Line>
    </div>
  );
};

export default Chart;
