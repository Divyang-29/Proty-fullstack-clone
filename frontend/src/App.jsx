import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./Pages/Home/Home.jsx";
import Listing from "./Listing/Listing.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Navbar from "./Navbar.jsx";
import PropertyDetails from "./Pages/Home/PropertyDetails.jsx";
import Footer from "./Footer.jsx";
import Page from "./Blog/Page.jsx";
import AddProperty from "./AddProperty/AddProperty.jsx";


function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/pages" element={""} />
          <Route path="/blog" element={<Page/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/addProperty" element={<AddProperty/>} />
        </Routes>
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;
