import React, { useState } from "react";

const Returns = () => {
  const [selectedCountry, setSelectedCountry] = useState("uae");
  return (
    <div className=" mx-36 my-12">
      <div className="flex justify-center">
        <div className="w-full lg:w-3/4">
          <div className="text-center mb-3">
            <h1 className="bigText">Returns</h1>
            <div className="flex flex-col small-size gap-4 my-5 text-gray-700">
              <p>
                Need to return an order? Select your location to find out how to
                return your item.
              </p>
              <p>Note: Items marked as Final Sale cannot be returned.</p>
              <p>
                <strong>
                  {" "}
                  Due to a high volume of orders during the peak period, please
                  allow additional time for your return to process.
                </strong>
              </p>
            </div>
            <div className="flex justify-center items-center my-3">
              <div className="w-1/2 flex justify-end">
                <label htmlFor="countrySelect">RETURN FROM:</label>
              </div>
              <div className="w-1/2">
                <select
                  className="form-select w-full"
                  id="countrySelect"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="uae">UAE</option>
                  <option value="usa">USA</option>
                  <option value="international">International</option>
                </select>
              </div>
            </div>

            <div
              className={selectedCountry === "uae" ? "" : "hidden"}
              id="uaeSection"
            >
              <h2>UAE Section</h2>
              {/* Content for UAE section */}
              {/* Use Tailwind CSS for card layout */}
            </div>

            <div
              className={selectedCountry === "usa" ? "" : "hidden"}
              id="usaSection"
            >
              <h2>USA Section</h2>
              {/* Content for USA section */}
              {/* Use Tailwind CSS for card layout */}
            </div>

            <div
              className={selectedCountry === "international" ? "" : "hidden"}
              id="internationalSection"
            >
              <h2>International Section</h2>
              {/* Content for International section */}
              {/* Use Tailwind CSS for card layout */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;
