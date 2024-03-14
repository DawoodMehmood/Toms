import React, { useState } from "react";
import ShippingTable from "./../components/shippingTable";
import CustomAccordion from "../components/customAccordion";

function ShippingAndDelivery() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("UAE");

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (country) => {
    setSelectedCountry(country);
    setMenuOpen(false);
  };

  return (
    <div className="my-12 mx-40">
      <h1 className="bigText text-center">SHIPPING & DELIVERY</h1>
      <br />
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-24  bg-banner px-3 py-2 text-sm serif text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded={menuOpen}
                aria-haspopup="true"
                onClick={handleMenuToggle}
              >
                {selectedCountry}
                <svg
                  className={`-mr-1 h-5 w-5 text-gray-400 transform transition-transform ${
                    menuOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {menuOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                  <a
                    href="#"
                    className={`${
                      selectedCountry === "USA"
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700"
                    } block px-4 py-2 text-sm`}
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                    onClick={() => handleMenuItemClick("USA")}
                  >
                    USA
                  </a>
                  <a
                    href="#"
                    className={`${
                      selectedCountry === "UAE"
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700"
                    } block px-4 py-2 text-sm`}
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                    onClick={() => handleMenuItemClick("UAE")}
                  >
                    UAE
                  </a>
                  <a
                    href="#"
                    className={`${
                      selectedCountry === "Australia"
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700"
                    } block px-4 py-2 text-sm`}
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                    onClick={() => handleMenuItemClick("Australia")}
                  >
                    Australia
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-3">
          <ShippingTable selectedCountry={selectedCountry} />
        </div>
      </div>

      <hr class="border-t-4 border-banner my-12" />
      
      <CustomAccordion
          heading={<p>DISPATCH</p>}
          content={
            <ul className="mx-4 small-size">
              <li>All stocked items will be dispatched within 24-48 hours from the time & date your order was placed. </li>
              <li>Please note that all orders will be dispatched during our operating times of Monday - Friday 8:00am-5:00pm Australian Eastern Standard Time.</li>
              <li>Please note there may be a dispatch delay of up to 2 days during our peak sales periods.</li>
              <li>Dispatch does not occur during QLD public holidays as our Distribution Centre is closed.</li>
              
            </ul>
          }
        />
    </div>
  );
}

export default ShippingAndDelivery;
