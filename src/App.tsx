import { Routes, Route } from "react-router-dom";
import Charts from "./pages/Charts";

function App() {
  return (
    <>
      {/* implementing react-router to navigate between different routs */}

      <Routes>
        <Route path="/" element={<Charts />} />
      </Routes>
    </>
  );
}

export default App;
