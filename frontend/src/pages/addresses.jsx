import React, { useState } from "react";
import { Link } from "react-router-dom";

const Addresses = () => {
  // State to manage form visibility and address list
  const [showForm, setShowForm] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      firstName: "Muhammad",
      lastName: "Abdullah Khan Abbasi",
      company: "ABC Company",
      address1: "123 Street",
      address2: "Apt 101",
      city: "Sydney",
      country: "Australia",
      province: "NSW",
      postalCode: "2000",
      phoneNumber: "123456789",
      isDefault: true,
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      company: "XYZ Corporation",
      address1: "456 Avenue",
      address2: "",
      city: "Melbourne",
      country: "Australia",
      province: "VIC",
      postalCode: "3000",
      phoneNumber: "987654321",
      isDefault: false,
    },
  ]);

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    country: "",
    province: "",
    postalCode: "",
    phoneNumber: "",
    isDefault: false,
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAddress = { ...formData, id: addresses.length + 1 };
    setAddresses([...addresses, newAddress]);
    setShowForm(false);
  };

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Function to delete an address
  const handleDelete = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  return (
    <div className="md:mx-44 my-20 text-center">
      <div className=" mb-3">
        <h1 className="bigText">ADDRESSES</h1>
      </div>
      <div className="mb-3">
        <Link to="/my-account" className="text-pantone hover:underline">
          Return to Account Details
        </Link>
      </div>
      <div className=" mb-3">
        <button
          onClick={toggleForm}
          className=" px-4 py-3 bg-pantone text-white  hover:bg-darkPantone mr-3"
        >
          {showForm ? "Cancel" : "Add New Address"}
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="form-input w-1/2 small-size py-3 border-b border-black focus:outline-none"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="form-input w-1/2 small-size py-3 border-b border-black focus:outline-none"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="form-input w-1/2 small-size py-3 border-b border-black focus:outline-none"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="address1"
              value={formData.address1}
              onChange={handleChange}
              placeholder="Address 1"
              className="form-input w-1/2 small-size py-3 border-b border-black focus:outline-none"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
              placeholder="Address 2"
              className="form-input w-1/2 small-size py-3 border-b border-black focus:outline-none"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="form-input w-1/2 small-size py-3 border-b border-black focus:outline-none"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="form-input w-1/2 small-size py-3 border-b border-black focus:outline-none"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="province"
              value={formData.province}
              onChange={handleChange}
              placeholder="Province"
              className="form-input w-1/2 small-size py-3 border-b border-black focus:outline-none"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              className="form-input w-1/2 small-size py-3 border-b border-black focus:outline-none"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="form-input w-1/2 small-size py-3 border-b border-black focus:outline-none"
            />
          </div>
          <div className="mb-3">
            <input
              type="checkbox"
              name="isDefault"
              checked={formData.isDefault}
              onChange={handleChange}
              className="form-checkbox"
            />
            <label htmlFor="isDefault" className="ml-2">
              Set as default address
            </label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-3 bg-pantone text-white hover:bg-darkPantone"
            >
              Add Address
            </button>
          </div>
        </form>
      )}
      <div className="mt-6">
        {addresses.map((address) => (
          <div key={address.id} className="p-5 mb-4">
            {address.isDefault && <p className="serif">Default</p>}
            <p>
              {address.firstName} {address.lastName}
            </p>
            <p>{address.country}</p>
            <div className="mt-2">
              <button className="btn-primary px-5 py-2 border-pantone border border-2 text-pantone hover:border-darkPantone mr-3">
                Edit
              </button>
              <button
                onClick={() => handleDelete(address.id)}
                className="btn-primary px-5 py-2 text-pantone border-pantone border border-2  hover:border-darkPantone"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addresses;
