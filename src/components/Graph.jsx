import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Graph = ({ color, type, data, formatNumber }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5">
      <LineChart width={300} height={200} data={data} margin={{ left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis tickFormatter={formatNumber} />
        <Tooltip formatter={value => formatNumber(value)} />
        <Legend />
        <Line type="monotone" dataKey={type} stroke={color} strokeWidth={2} />
      </LineChart>
    </div>
  );
};

export default Graph;
