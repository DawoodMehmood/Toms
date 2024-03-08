import TermsAndConditions from "./pages/terms";
import { Routes, Route, Navigate } from "react-router-dom";
import FAQS from "./pages/faqs";
import Home from "./pages/home";
import Careers from "./pages/careers";
import "./components/components.css";
import ProductDetails from "./pages/productDetails";
import ScrollToTopButton from "./components/scrollToTopButton";
import AdminHome from "./admin/pages/home";
import UserLayout from "./layouts/userLayout";
import AdminLayout from "./layouts/adminLayout";
import Category from "./pages/category";

function App() {
  return (
    <div className="App max-w-[1440px] mx-auto">
      <Routes>
        <Route element={<UserLayout />}>
          <Route
            path="/product-details/:id"
            element={<ProductDetails />}
          ></Route>
          <Route
            path="/pages/terms-and-conditions"
            element={<TermsAndConditions />}
          ></Route>

          <Route path="/pages/faqs" element={<FAQS />}></Route>
          <Route path="/category/:text" element={<Category />}></Route>
          <Route path="/pages/careers" element={<Careers />}></Route>
          <Route
            path="/product-details/:id"
            element={<ProductDetails />}
          ></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Navigate to="/home" />}></Route>
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminHome />}></Route>
        </Route>
      </Routes>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
