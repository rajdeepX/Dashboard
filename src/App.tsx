import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import Data from "./components/Data";
import CreateContact from "./pages/CreateContact";
import EditContact from "./pages/EditContact";
import Charts from "./pages/Charts";
import Map from "./components/Map";

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
