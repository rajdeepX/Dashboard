import Data from "../components/Data";
import Map from "../components/Map";
import Loading from "../components/Loading";
import { fetchChartData } from "../components/api";
import { useQuery } from "react-query";
import numeral from "numeral";
import Graph from "../components/Graph";

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
  const caseData = Object.keys(cases).map(date => ({
    date,
    cases: cases[date],
  }));
  const deathData = Object.keys(deaths).map(date => ({
    date,
    deaths: deaths[date],
  }));
  const recoveredData = Object.keys(recovered).map(date => ({
    date,
    recovered: recovered[date],
  }));

  return (
    <main className="w-full px-5 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
        Covid19 Dashboard
      </h1>

      {Object.keys(cases).length > 0 && (
        <>
          <Data />

          <h2 className="text-center text-2xl font-semibold text-gray-700 mb-8 mt-10">
            Worldwide COVID-19 Trends
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-10">
            <Graph
              data={caseData}
              color="#6366f1"
              formatNumber={formatNumber}
              type="cases"
            />
            <Graph
              data={deathData}
              type="deaths"
              color="#ef4444"
              formatNumber={formatNumber}
            />
            <Graph
              data={recoveredData}
              type="recovered"
              color="#22c55e"
              formatNumber={formatNumber}
            />
          </div>

          <div className="bg-white shadow rounded-xl p-5 mt-10">
            <h2 className="text-center text-2xl font-semibold text-gray-700 mb-5">
              Country-wise COVID-19 Data
            </h2>
            <Map />
          </div>
        </>
      )}
    </main>
  );
};

export default Charts;
