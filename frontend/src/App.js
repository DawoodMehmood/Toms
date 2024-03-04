import TermsAndConditions from "./pages/terms";
import { Routes, Route, Navigate } from "react-router-dom";
import FAQS from "./pages/faqs";
import Home from "./pages/home";
import Careers from "./pages/careers";
import "./components/components.css";
import ProductDetails from "./pages/productDetails";
import Navbar from "./components/navbar";
import ScrollToTopButton from "./components/scrollToTopButton";

function App() {
  return (
    <div className="App max-w-[1440px] mx-auto">
      <Navbar />
      <Routes>
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        ></Route>

        <Route path="/faqs" element={<FAQS />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/product-details" element={<ProductDetails />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Navigate to="/home" />}></Route>
      </Routes>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
