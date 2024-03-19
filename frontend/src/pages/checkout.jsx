import React, { useState } from "react";
import logo from "./../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Payment from "./../components/payment"; // Import the Payment component

function Checkout() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("ship");
  const [pickupLocation, setPickupLocation] = useState("");
  const [shippingDetails, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    company: "",
    mobileNumber: "",
    country: "",
    city: "",
  });
  const [items, setItems] = useState([
    { name: "MINI SKIRT", price: 150, quantity: 3 },
  ]);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDeliveryMethodChange = (e) => {
    setDeliveryMethod(e.target.value);
    // Reset pickup location when changing delivery method
    setPickupLocation("");
  };

  const handlePickupLocationChange = (location) => {
    setPickupLocation(location);
  };

  const handleShippingDetailsChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (
      (deliveryMethod === "ship" &&
        Object.values(shippingDetails).every((val) => val !== "")) ||
      (deliveryMethod === "pickup" && pickupLocation !== "")
    ) {
      // Proceed to the payment step
      navigate("/checkout/payment");
    } else {
      // Show an error message indicating that required fields are missing
      console.log("Please fill in all required fields");
    }
  };

  return (
    <section className="flex ">
      <div className="w-7/12 px-32 py-12">
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
              <Link to={"/pages/cart"} className="hover:underline">
                Cart
              </Link>
            </li>
            <li className="mx-2">{">"}</li>
            <li>
              <Link to={"pages/checkout"} className="hover:underline">
                Information
              </Link>
            </li>
            <li className="mx-2">{">"}</li>
            <li>
              <span className="text-gray-500">Payment</span>
            </li>
          </ol>
        </nav>
        <div className="mt-8">
          <div className="mb-4 ">
            <label htmlFor="email" className="">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="border border-gray-400 focus:outline-black focus:border-banner rounded px-3 py-2 w-full"
            />
            <p className="text-sm mt-1">
              <Link to={"/login"} className="text-black underline">
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

          {deliveryMethod === "pickup" && (
            <div>
              <h2 className="font-medium text-lg mb-4">Pickup Locations</h2>
              <div
                className="mb-4 border rounded p-4 cursor-pointer"
                onClick={() => handlePickupLocationChange("location1")}
                style={{
                  outline:
                    pickupLocation === "location1" ? "2px solid blue" : "none",
                }}
              >
                <p>123 Street, City, Country</p>
              </div>
              <div
                className="mb-4 border rounded p-4 cursor-pointer"
                onClick={() => handlePickupLocationChange("location2")}
                style={{
                  outline:
                    pickupLocation === "location2" ? "2px solid blue" : "none",
                }}
              >
                <p>456 Street, City, Country</p>
              </div>
            </div>
          )}

          {deliveryMethod === "ship" && (
            <div className="mb-4">
              <h2 className="font-medium text-lg mb-4">Shipping Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="firstName" className="block">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={shippingDetails.firstName}
                    onChange={handleShippingDetailsChange}
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="lastName" className="block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={shippingDetails.lastName}
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
                  <label htmlFor="apartment" className="block">
                    Apartment (optional)
                  </label>
                  <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    value={shippingDetails.apartment}
                    onChange={handleShippingDetailsChange}
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="company" className="block">
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={shippingDetails.company}
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
                  <select
                    id="country"
                    name="country"
                    value={shippingDetails.country}
                    onChange={handleShippingDetailsChange}
                    className="border border-gray-400 rounded px-3 py-2 w-full"
                  >
                    <option value="">Select a country</option>
                    <option value="USA">United States</option>
                    <option value="UK">United Kingdom</option>
                    {/* Add more countries as needed */}
                  </select>
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
      <div className="w-6/12 bg-banner px-12 py-12">
        <div className="">
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-9 small-size mb-4">
              <div className="col-span-1 px-1">
                <div className="h-[60px] w-[60px] px-2 border border-black bg-banner rounded-md flex items-center justify-center">
                  {" "}
                  {/* Adjust height and width as needed */}
                  <img
                    src="https://www.vrggrl.com/cdn/shop/files/IMG_9934.jpg?v=1709180411&width=493"
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="col-span-5 flex flex-col gap-2 px-4">
                <p className="serif">{item.name}</p>
                <p className="text-gray-600">SIZE: 12</p>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <p>${item.price * item.quantity}</p>
                  <p>${(item.price * item.quantity * 30) / 100}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-between serif py-2">
            <p>SUBTOTAL:</p>
            <p>${subtotal}</p>
          </div>
          <div className="flex justify-between serif py-2">
            <p>PICKUP:</p>
            <p>Free</p>
          </div>
          <div className="font-semibold text-2xl flex justify-between serif ">
            <p>TOTAL</p>
            <p>${subtotal}</p>
          </div>
          <p>including $23.2 Taxes</p>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
