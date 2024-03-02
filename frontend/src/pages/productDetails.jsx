import React from "react";
import image1 from "./../img/pro-1.jpg";
import image2 from "./../img/pro-2.jpg";
import image3 from "./../img/pro-3.jpg";
import image4 from "./../img/pro-4.jpg";
import image5 from "./../img/pro-5.jpg";
import image6 from "./../img/pro-6.jpg";
import StarRating from "../components/starRating";
import AfterpayLogo from "../components/afterPayLogo";

const ProductDetails = () => {
  return (
    <section className="py-5">
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:col-span-6 md:col-span-7">
          <div>
            <img className="w-full" src={image1} alt="Image 1" />
          </div>
          <div>
            <img className="w-full" src={image2} alt="Image 2" />
          </div>
          <div>
            <img className="w-full" src={image3} alt="Image 3" />
          </div>
          <div>
            <img className="w-full" src={image4} alt="Image 4" />
          </div>
          <div>
            <img className="w-full" src={image5} alt="Image 5" />
          </div>
          <div>
            <img className="w-full" src={image6} alt="Image 6" />
          </div>
        </div>

        <div className="sm:col-span-6 md:col-span-5 my-4 mx-3">
          <h4>FRANCA KNIT CARDIGAN PINK</h4>

          <StarRating ratings={[4, 5, 3, 4, 5]} />

          <p className="small-size my-2">
            <strong>$50.5 UAD</strong>
          </p>
          <br />
          <p className="afterpay-paragraph ">
            <span className="afterpay-main-text">
              or 4 interest-free payments of <strong>$29.75</strong> with
              <AfterpayLogo />
            </span>
          </p>
          <br />
          <p>
            Earn <strong>119</strong> Club Monterosso Points.{" "}
            <a>
              <strong>JOIN NOW</strong>
            </a>
          </p>
          <br />
          <p>
            Embrace the chill and cosy up in the Franca Cardigan. With its
            beautiful pink hues, oversized fit, and puffy sleeves, it's the
            perfect layering piece to pair with your favourite slip dress as the
            weather cools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
