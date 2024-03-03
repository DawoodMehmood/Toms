import TermsAndConditions from "./pages/terms";
import { Routes, Route } from "react-router-dom";
import FAQS from "./pages/faqs";
import Home from "./pages/home";
import Careers from "./pages/careers";
import "./components/components.css";
import ProductDetails from "./pages/productDetails";

function App() {
  return (
    <div className="App max-w-[1440px]">
      <Routes>
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditions />}
        ></Route>

        <Route path="/faqs" element={<FAQS />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/product-details" element={<ProductDetails />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
