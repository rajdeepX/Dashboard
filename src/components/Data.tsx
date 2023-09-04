import { useState, useEffect } from "react";
import Loading from "./Loading";

const Data = () => {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/all", {
      method: "GET",
    });

    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) {
    return <Loading />;
  }

  console.log(data);

  return (
    <>
      <div className="data-container">
        <div className="case-data">
          <p className="data-head">Worldwide Cases</p>
          <p className="data-info">{data.cases} total</p>
        </div>
        <div className="case-data">
          <p className="data-head">Worldwide Recovery</p>
          <p className="data-info">{data.recovered} total</p>
        </div>
        <div className="case-data">
          <p className="data-head">Worldwide Deaths</p>
          <p className="data-info">{data.deaths} total</p>
        </div>
      </div>
    </>
  );
};

export default Data;
