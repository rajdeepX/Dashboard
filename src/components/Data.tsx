import { useQuery } from "react-query";
import Loading from "./Loading";
import { fetchData } from "./api";
import numeral from "numeral";

const Data = () => {
  // Fetch COVID-19 case data using the useQuery hook
  const { data, isLoading, isError } = useQuery("data", fetchData);

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

  const cases = formatNumber(data.cases);
  const recovered = formatNumber(data.recovered);
  const deaths = formatNumber(data.deaths);

  return (
    <>
      <div className="flex flex-col gap-4 w-full mb-[50px] sm:w-3/5 sm:mx-auto sm:my-[30px] lg:w-[30%]">
        <div className="w-full text-center bg-[gray] text-white p-3 rounded-[5px]">
          <p className="data-head">Worldwide Cases</p>
          <p className="data-info">{cases} total</p>
        </div>
        <div className="w-full text-center bg-[gray] text-white p-3 rounded-[5px]">
          <p className="data-head">Worldwide Recovery</p>
          <p className="data-info">{recovered} total</p>
        </div>
        <div className="w-full text-center bg-[gray] text-white p-3 rounded-[5px]">
          <p className="data-head">Worldwide Deaths</p>
          <p className="data-info">{deaths} total</p>
        </div>
      </div>
    </>
  );
};

export default Data;
