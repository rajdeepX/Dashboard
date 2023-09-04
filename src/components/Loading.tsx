const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="text-center bg-[#aaa]  text-2xl w-[300px] mx-auto my-6 px-[50px] py-5 rounded-[10px]">
        <h2 className="loading-head">Loading...</h2>
        <p className="loading-info">Please wait while your data is retrived</p>
      </div>
    </div>
  );
};

export default Loading;
