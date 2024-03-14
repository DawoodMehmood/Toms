import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomAccordion from "../components/customAccordion";

const Returns = () => {
  const [selectedCountry, setSelectedCountry] = useState("uae");
  return (
    <div className=" mx-36 my-12">
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
        <div className="flex justify-center gap-4 items-center my-12">
          <div className="flex justify-end">
            <label htmlFor="countrySelect">RETURN FROM:&nbsp;</label>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 flex items-center bg-banner border px-3">
              <span id="selectedCountry">{selectedCountry.toUpperCase()}</span>
              <svg
                className="fill-current h-4 w-4 absolute right-3 -translate-y-0.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 11.707a1 1 0 011.414 0L10 13.414l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <select
              className="absolute inset-0 opacity-0 cursor-pointer"
              id="countrySelect"
              onChange={(e) => setSelectedCountry(e.target.value)}
              value={selectedCountry}
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
          {/* Content for UAE section */}
          {/* Use Tailwind CSS for card layout */}
          <div className="flex flex-row gap-4">
            <div className="w-1/3">
              <div className="card bg-banner  p-4">
                <div className="card-body">
                  <h5 className="card-title serif font-semibold">Title</h5>
                  <p className="card-text small-size my-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit Aut,
                    repellat.
                  </p>
                  <button className="bg-pantone hover:bg-darkPantone px-3 py-2">
                    <Link
                      href="#"
                      className="btn-primary text-decoration-none text-white"
                    >
                      Start Your Return
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="card bg-banner  p-4">
                <div className="card-body">
                  <h5 className="card-title serif font-semibold">Title</h5>
                  <p className="card-text small-size my-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit Aut,
                    repellat.
                  </p>
                  <button className="bg-pantone hover:bg-darkPantone px-3 py-2">
                    <Link
                      href="#"
                      className="btn-primary text-decoration-none text-white"
                    >
                      Start Your Return
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
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
      <div className="my-12">
        <CustomAccordion
          heading={<p>TERMS AND CONDITIONS</p>}
          content={
            <ul className="mx-4 small-size">
              <li>
                We gladly accept returns that are requested within 30 days of
                the order date using our returns portal and 14 days if using
                Refundid{" "}
              </li>
              <li>
                We've partnered with Refundid so you can get your refund back
                instantly, before you've even sent back your order.
              </li>
              <li>
                If Refundid is chosen, you will be refunded back to your
                nominated bank account. If a standard refund is chosen, you will
                be refunded via the method of payment used only. If you use a
                gift certificate to partially pay for your order, the refund
                will firstly go back onto the gift certificate and any remaining
                balance will be returned to your alternative payment method.{" "}
              </li>
              <li>
                VRG GRL is not responsible for any monetary reversal from
                Refundid if the customer has not provided the tracking number or
                followed all steps set out by Refundid.
              </li>
              <li>
                Australian Returns: Our returns portal generates Aus Post
                standard shipping labels so please allow 5-10 working days for
                your return to be received back to us. Alternatively you can
                drop off your return for Free at our Brisbane Distribution
                Centre by selecting 'drop off' as your return option.
              </li>
              <li>
                USA + International Returns: Please allow 4+ weeks for your
                returned item to be delivered to our Brisbane Distribution
                Centre.
              </li>
              <li>
                Once we receive your return, please allow 5-10 business days for
                your return to be processed. We will email you and let you know
                that your return has been processed.
              </li>
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Returns;
