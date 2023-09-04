import { useState, useEffect } from "react";

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
    return <h1 style={{ marginLeft: "200px" }}>Loading...</h1>;
  }

  console.log(data);

  return (
    <>
      <div className="data-container p-12 flex flex-col items-center gap-[1rem] min-w-[50%]">
        <div className="cases p-5 rounded-md bg-indigo-500 text-white w-[200px]">
          <p className="mb-[5px]">Worldwide Cases</p>
          <p>{data.cases} total</p>
        </div>
        <div className="cases p-5 rounded-md  bg-indigo-500 text-white w-[200px]">
          <p className="mb-[5px]">Worldwide Recovery</p>
          <p>{data.recovered} total</p>
        </div>
        <div className="cases p-5 rounded-md bg-indigo-500 text-white w-[200px]">
          <p className="mb-[5px]">Worldwide Deaths</p>
          <p>{data.deaths} total</p>
        </div>
      </div>
    </>
  );
};

export default Data;
