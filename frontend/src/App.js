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
import AdminFaqs from "./admin/pages/faq";
import Contact from "./pages/contact";
import SizeChart from "./pages/sizes";
import Login from "./pages/login";
import Register from "./pages/register";
import Returns from "./pages/returns";
import ShippingAndDelivery from "./pages/shipping&delivery";
import Checkout from "./pages/checkout";
import CommonGrid from "./pages/commonGrid";
import Payment from "./components/payment";
import ProtectedRoute from "./components/protectedRoute";
import ResetPassword from "./pages/resetPassword";
import ForgetPassword from "./pages/forgetPassword";
import MyAccount from "./pages/myAccount";
import Addresses from "./pages/addresses";

function App() {
  return (
    <div className="App max-w-[1440px] mx-auto">
      <Routes>
        <Route element={<UserLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/register" element={<Register />} />
          </Route>

          <Route
            path="/product-details/:id"
            element={<ProductDetails />}
          ></Route>
          <Route
            path="/pages/terms-and-conditions"
            element={<TermsAndConditions />}
          ></Route>

          <Route path="/pages/faqs" element={<FAQS />}></Route>
          <Route
            path="/grid/:type/:name/:id
          "
            element={<CommonGrid />}
          ></Route>
          <Route path="/pages/careers" element={<Careers />}></Route>
          <Route path="/pages/contact" element={<Contact />}></Route>
          <Route path="/pages/size-chart" element={<SizeChart />}></Route>
          <Route path="/pages/returns" element={<Returns />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/addresses" element={<Addresses />}></Route>
          <Route path="/my-account" element={<MyAccount />}></Route>
          <Route path="/reset-password" element={<ResetPassword />}></Route>
          <Route path="/forget-password" element={<ForgetPassword />}></Route>
          <Route path="pages/checkout" element={<Checkout />}></Route>
          <Route path="checkout/payment" element={<Payment />}></Route>
          <Route
            path="/pages/shipping-delivery"
            element={<ShippingAndDelivery />}
          ></Route>
          <Route
            path="/product-details/:name/:id"
            element={<ProductDetails />}
          ></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Navigate to="/home" />}></Route>
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminHome />}></Route>
          <Route path="/admin/faqs" element={<AdminFaqs />}></Route>
        </Route>
      </Routes>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
