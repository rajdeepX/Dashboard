import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import Data from "../components/Data";
import Map from "../components/Map";
import Loading from "../components/Loading";
import { fetchChartData } from "../components/api";
import { useQuery } from "react-query";
import numeral from "numeral";

const Charts = () => {
  // Fetch COVID-19 chart data using the useQuery hook
  const {
    data: covidData,
    isLoading,
    isError,
  } = useQuery("covidData", fetchChartData);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  // formatting larger numbers using numeral.js
  const formatNumber = (value: any) => {
    return numeral(value).format("0.0a");
  };

  // Extract cases, deaths, and recovered data
  const cases = covidData.cases;
  const deaths = covidData.deaths;
  const recovered = covidData.recovered;

  // Prepare data for charts
  const caseData = Object.keys(cases).map((date) => ({
    date,
    cases: cases[date],
  }));
  const deathData = Object.keys(deaths).map((date) => ({
    date,
    deaths: deaths[date],
  }));
  const recoveredData = Object.keys(recovered).map((date) => ({
    date,
    recovered: recovered[date],
  }));

  return (
    <main className="w-full px-5 py-[30px] sm:pl-[150px]">
      <h1 className="text-center text-2xl mb-5">Charts and Maps</h1>
      {Object.keys(cases).length > 0 && (
        <>
          <Data />
          <h2 className="text-center text-xl mb-[30px]">
            Worldwide cases of Covid19
          </h2>
          <div className="flex flex-col gap-6 justify-center items-center mb-[50px]">
            <div className="line-chart">
              <LineChart
                width={300}
                height={200}
                data={caseData}
                margin={{ left: 20 }}
                className="chart"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis tickFormatter={formatNumber} />
                <Tooltip formatter={(value) => formatNumber(value)} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="cases"
                  stroke="#8884d8"
                  style={{ strokeWidth: 2 }}
                />
              </LineChart>
            </div>
            <div className="line-chart">
              <LineChart
                width={300}
                height={200}
                data={deathData}
                margin={{ left: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis tickFormatter={formatNumber} />
                <Tooltip formatter={(value) => formatNumber(value)} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="deaths"
                  stroke="red"
                  style={{ strokeWidth: 2 }}
                />
              </LineChart>
            </div>

            <div className="line-chart">
              <LineChart
                width={300}
                height={200}
                data={recoveredData}
                margin={{ left: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis tickFormatter={formatNumber} />
                <Tooltip formatter={(value) => formatNumber(value)} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="recovered"
                  stroke=" #5ac457"
                  style={{ strokeWidth: 2 }}
                />
              </LineChart>
            </div>
          </div>
          <div className="map-container">
            <h1 className="text-center text-xl mb-[30px]">
              Countrywise covid data
            </h1>
            <Map />
          </div>
        </>
      )}
    </main>
  );
};

export default Charts;
