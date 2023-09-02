import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import Data from "./pages/Data";
import CreateContact from "./pages/CreateContact";
import EditContact from "./pages/EditContact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/data" element={<Data />} />
        <Route path="/create-contact" element={<CreateContact />} />
        <Route path="/edit-contact/:id" element={<EditContact />} />
      </Routes>
    </>
  );
}

export default App;
