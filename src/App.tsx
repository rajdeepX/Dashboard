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
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<ContactPage />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/data" element={<Data />} />
        <Route path="/maps" element={<Map />} />
        <Route path="/create-contact" element={<CreateContact />} />
        <Route path="/edit-contact/:id" element={<EditContact />} />
      </Routes>
    </>
  );
}

export default App;
