// Checkout.js
import React, { useState } from "react";
import logo from "./../assets/img/logo.png";
import { Link } from "react-router-dom";

function Checkout() {
  const [email, setEmail] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("ship");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    mobileNumber: "",
    country: "",
    city: "",
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDeliveryMethodChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handleShippingDetailsChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    if (!email) {
      setIsEmailFocused(false);
    }
  };

  const handleNext = () => {
    // Perform validation and proceed to next step
    console.log("Next button clicked");
  };

  return (
    <section className="flex px-24">
      <div className="w-7/12 px-12 py-12">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-[120px] h-auto inline-block"
          />
        </Link>
        <nav className="mt-8" aria-label="Breadcrumb">
          <ol className="flex">
            <li>
              <Link to={"pages/cart"} className="hover:underline">
                Cart
              </Link>
            </li>
            <li className="mx-2">{">"}</li>
            <li className="text-gray-500">Information</li>
          </ol>
        </nav>
        <div className="mt-8">
          <div className="mb-4 relative">
            <label
              htmlFor="email"
              className={`absolute ${
                isEmailFocused || email
                  ? "-top-3 text-sm text-gray-500"
                  : "top-1 px-3"
              } transition-all duration-100`}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              className="border border-gray-400 focus:outline-none focus:border-banner rounded px-3 py-2 w-full"
            />
            <p className="text-sm mt-1">
              <Link to={"/login"} className="text-blue-600">
                Login
              </Link>{" "}
              if account exists.
            </p>
          </div>

          <div className="mb-4">
            <span className="block font-medium">Delivery Method</span>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="ship"
                  checked={deliveryMethod === "ship"}
                  onChange={handleDeliveryMethodChange}
                  className="form-radio h-5 w-5 text-gray-600"
                />
                <span className="ml-2">Ship</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="pickup"
                  checked={deliveryMethod === "pickup"}
                  onChange={handleDeliveryMethodChange}
                  className="form-radio h-5 w-5 text-gray-600"
                />
                <span className="ml-2">Pick Up</span>
              </label>
            </div>
          </div>
          {deliveryMethod === "ship" && (
            <div>
              <h2 className="font-medium text-lg mb-4">Shipping Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="name" className="block">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={shippingDetails.name}
                    onChange={handleShippingDetailsChange}
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={shippingDetails.address}
                    onChange={handleShippingDetailsChange}
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="mobileNumber" className="block">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={shippingDetails.mobileNumber}
                    onChange={handleShippingDetailsChange}
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="country" className="block">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={shippingDetails.country}
                    onChange={handleShippingDetailsChange}
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  />
                </div>
                <div className="mb-4 col-span-2">
                  <label htmlFor="city" className="block">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={shippingDetails.city}
                    onChange={handleShippingDetailsChange}
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  />
                </div>
              </div>
            </div>
          )}
          <button
            onClick={handleNext}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
          >
            Next
          </button>
        </div>
      </div>
      <div className="w-6/12 bg-banner">2</div>
    </section>
  );
}

export default Checkout;
