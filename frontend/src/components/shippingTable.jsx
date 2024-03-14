import React from "react";

function ShippingTable({ selectedCountry }) {
  // Define shipping data for different countries
  const shippingData = {
    UAE: [
      { service: "Standard Shipping", deliveryTime: "3-5 days", cost: "Free" },
      { service: "Express Shipping", deliveryTime: "1-2 days", cost: "$10" },
    ],
    USA: [
      { service: "Standard Shipping", deliveryTime: "5-7 days", cost: "$5" },
      { service: "Express Shipping", deliveryTime: "2-3 days", cost: "$15" },
    ],
    Australia: [
      { service: "Standard Shipping", deliveryTime: "7-10 days", cost: "$8" },
      { service: "Express Shipping", deliveryTime: "3-5 days", cost: "$20" },
    ],
    // Add more countries and shipping data as needed
  };

  // Get shipping data for the selected country
  const countryShippingData = shippingData[selectedCountry];

  return (
    <div className="small-size">
      <p className=" serif mb-4">SHIPPING & DELIVERY TO {selectedCountry}</p>
      <table className="w-full border-collapse border border-gray-200">
        <thead className="text-left">
          <tr>
            <th className="border border-gray-200 px-4 py-3">Service</th>
            <th className="border border-gray-200 px-4 py-3">Delivery Time</th>
            <th className="border border-gray-200 px-4 py-3">Cost</th>
          </tr>
        </thead>
        <tbody>
          {countryShippingData.map((shippingInfo, index) => (
            <tr key={index} className="text-gray-600">
              <td className="border border-gray-200 px-4 py-3">
                {shippingInfo.service}
              </td>
              <td className="border border-gray-200 px-4 py-3">
                {shippingInfo.deliveryTime}
              </td>
              <td className="border border-gray-200 px-4 py-3">
                {shippingInfo.cost}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShippingTable;
