import React, { useEffect, useState } from "react";
import Chart from "../components/Chart";

const Data = () => {
  const [covidData, setCovidData] = useState<Record<string, number> | null>(
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
    console.log(data.cases);

    setCovidData(data);
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  if (!covidData) {
    return <div>Loading...</div>;
  }

  const dates = Object.keys(covidData.cases);
  const data = Object.values(covidData.cases);

  return (
    <main className="@apply ml-48">
      <h1>Charts and Maps</h1>
      {covidData && <Chart dates={dates} data={data} />}
    </main>
  );
};

export default Data;
