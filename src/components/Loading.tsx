const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center h-[60vh]">
      <div className="text-center bg-white shadow-lg text-gray-700 text-xl px-10 py-6 rounded-xl">
        <h2 className="font-semibold mb-2">Loading...</h2>
        <p>Please wait while we retrieve the latest data.</p>
      </div>
    </div>
  );
};

export default Loading;
