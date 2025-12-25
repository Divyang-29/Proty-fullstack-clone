import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./Pages/Home/Home.jsx";
import Listing from "./Pages/Listing/Listing.jsx";
import Blog from "./Pages/Blog/Blog.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Navbar from "./Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/pages" element={""} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
