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
      <div className="grid sm:grid-cols-3 gap-6 w-full max-w-4xl mx-auto mb-10">
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <p className="text-lg font-medium text-gray-600">Worldwide Cases</p>
          <p className="text-2xl font-bold text-blue-500">{cases} total</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <p className="text-lg font-medium text-gray-600">
            Worldwide Recovery
          </p>
          <p className="text-2xl font-bold text-green-500">{recovered} total</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <p className="text-lg font-medium text-gray-600">Worldwide Deaths</p>
          <p className="text-2xl font-bold text-red-500">{deaths} total</p>
        </div>
      </div>
    </>
  );
};

export default Data;
