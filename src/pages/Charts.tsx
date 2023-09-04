import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import "./Data.css";
import { Link } from "react-router-dom";
import Data from "../components/Data";
import Map from "../components/Map";
// import Chart from "../components/Chart";

const formatNumber = (value: number) => {
  if (value >= 1e9) {
    return (value / 1e9).toFixed(2) + "B";
  } else if (value >= 1e6) {
    return (value / 1e6).toFixed(2) + "M";
  } else if (value >= 1e3) {
    return (value / 1e3).toFixed(2) + "K";
  } else {
    return value.toString();
  }
};

const Charts = () => {
  const [covidData, setCovidData] = useState<Record<string, number> | any>(
    null
  );

  const fetchChartData = async () => {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);
    setCovidData(data);
  };

  useEffect(() => {
    fetchChartData();
    // console.log(covidData);
  }, []);

  useEffect(() => {
    console.log(covidData);
  }, [covidData]);

  if (!covidData) {
    return <h1 style={{ marginLeft: "200px" }}>Loading...</h1>;
  }

  // console.log(covidData);
  const cases = covidData?.cases;

  console.log(cases);

  const deaths = covidData.deaths;
  const recovered = covidData.recovered;

  // console.log(cases);

  const caseData = Object.keys(cases).map((date) => ({
    date,
    cases: cases[date],
  }));
  // const deathData = Object.keys(deaths).map((date) => ({
  //   date,
  //   deaths: deaths[date],
  // }));
  // const recoveredData = Object.keys(recovered).map((date) => ({
  //   date,
  //   recovered: recovered[date],
  // }));

  // const deathData =

  // console.log(caseData.cases);

  return (
    <main className="ml-10 pt-20 flex flex-col justify-center items-center">
      <h1 className="text-xl font-[500] mb-14 ">Charts and Maps</h1>
      {Object.keys(cases).length > 0 && (
        <>
          <div className=" flex justify-center items-center gap-4">
            <Data />
            <div className="p-10 mb-10 flex flex-col gap-3 justify-center items-center">
              <h2 className="text-[1.2rem] font-[500] mb-[20px]">
                Worldwide cases of Covid19
              </h2>
              <LineChart
                width={400}
                height={250}
                data={caseData}
                margin={{ left: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis tickFormatter={formatNumber} />
                <Tooltip formatter={(value: number) => formatNumber(value)} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="cases"
                  stroke="#8884d8"
                  strokeWidth={3}
                />
              </LineChart>
            </div>
          </div>

          {/* <div className="p-10 mb-10">
            <LineChart
              width={600}
              height={300}
              data={deathData}
              margin={{ left: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis tickFormatter={formatNumber} />
              <Tooltip formatter={(value: number) => formatNumber(value)} />
              <Legend />
              <Line
                type="monotone"
                dataKey="deaths"
                stroke="red"
                strokeWidth={3}
              />
            </LineChart>
          </div>

          <div className="p-10 mb-10">
            <LineChart
              width={600}
              height={300}
              data={recoveredData}
              margin={{ left: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis tickFormatter={formatNumber} />
              <Tooltip formatter={(value: number) => formatNumber(value)} />
              <Legend />
              <Line
                type="monotone"
                dataKey="recovered"
                stroke=" #5ac457"
                strokeWidth={3}
              />
            </LineChart>
          </div> */}

          <Map />
        </>
      )}

      {!covidData && <h1 style={{ marginLeft: "200px" }}>Loading...</h1>}
    </main>
  );
};

export default Charts;
