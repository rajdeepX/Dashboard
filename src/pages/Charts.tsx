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
          <h2 className="text-center text-xl mb-[100px] mt-[50px]">
            Worldwide cases of Covid19
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-[50px]">
            <Graph
              data={caseData}
              color={"#8884d8"}
              formatNumber={formatNumber}
              type={"cases"}
            />
            <Graph
              data={deathData}
              type={"deaths"}
              color={"red"}
              formatNumber={formatNumber}
            />
            <Graph
              data={recoveredData}
              type={"recovered"}
              color={"#5ac457"}
              formatNumber={formatNumber}
            />
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
