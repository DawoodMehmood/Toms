import React, { useState } from "react";
import logo from "./../assets/img/logo.png";
import { Link } from "react-router-dom";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
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
              <Link to={"/"} className="hover:underline">
                Cart
              </Link>
            </li>
            <li className="mx-2">{">"}</li>
            <li>
              <Link to={"/pages/checkout"} className="hover:underline">
                Information
              </Link>
            </li>
            <li className="mx-2">{">"}</li>
            <li className="text-gray-500">Payment</li>
          </ol>
        </nav>
        <div className="mt-8">
          <h2 className="font-medium text-lg mb-4">Payment Method</h2>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="credit_card"
                checked={paymentMethod === "credit_card"}
                onChange={handlePaymentMethodChange}
                className="form-radio h-5 w-5 text-gray-600"
              />
              <span className="ml-2">Credit Card</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={handlePaymentMethodChange}
                className="form-radio h-5 w-5 text-gray-600"
              />
              <span className="ml-2">PayPal</span>
            </label>
          </div>

          {paymentMethod === "credit_card" && (
            <div>
              <h2 className="font-medium text-lg mb-4">Credit Card Details</h2>
              {/* Credit card form fields */}
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className="border border-gray-400 rounded px-3 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="cardName" className="block">
                  Name on Card
                </label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  className="border border-gray-400 rounded px-3 py-2 w-full"
                />
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label htmlFor="expiryDate" className="block">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="securityCode" className="block">
                    Security Code
                  </label>
                  <input
                    type="text"
                    id="securityCode"
                    name="securityCode"
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  />
                </div>
              </div>
              {/* Billing address form fields */}
              <h2 className="font-medium text-lg mb-4">Billing Address</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="company" className="block">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="address" className="block">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="apartment" className="block">
                    Apartment (Optional)
                  </label>
                  <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="postalCode" className="block">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  />
                </div>
              </div>
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={() => console.log("Payment processed")}
              >
                Pay Now
              </button>
            </div>
          )}

          {paymentMethod === "paypal" && (
            <div>
              {/* Redirect button to PayPal portal */}
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={() =>
                  (window.location.href = "https://www.paypal.com")
                }
              >
                Proceed to PayPal
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="w-6/12 bg-banner">2</div>
    </section>
  );
}

export default Payment;
