import React, { useEffect, useState } from "react";
import image1 from "./../assets/img/pro-1.jpg";
import image2 from "./../assets/img/pro-2.jpg";
import image3 from "./../assets/img/pro-3.jpg";
import image4 from "./../assets/img/pro-4.jpg";
import image5 from "./../assets/img/pro-5.jpg";
import image6 from "./../assets/img/pro-6.jpg";
import StarRating from "../components/starRating";
import AfterpayLogo from "../components/afterPayLogo";
import CustomAccordion from "../components/customAccordion";
import Slider from "../components/imageSlider";

const ProductDetails = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const div1 = document.querySelector(".div1");
    const div2 = document.querySelector(".div2");

    const setEqualHeight = () => {
      const height1 = div1.offsetHeight;
      const height2 = div2.offsetHeight;

      if (height1 < height2) {
        div2.style.height = height1 + "px";
      } else {
        div1.style.height = height2 + "px";
      }
      console.log(height1);
      console.log(height2);
    };

    setEqualHeight();
    window.addEventListener("resize", setEqualHeight);

    return () => {
      window.removeEventListener("resize", setEqualHeight);
    };
  }, []);

  const ratings = [4, 5, 3, 4, 5];
  if (!ratings || !Array.isArray(ratings) || ratings.length === 0) {
    return null; // Return null if ratings array is undefined, not an array, or empty
  }

  // Calculate average rating
  const totalRatings = ratings.length;
  const averageRating = ratings.reduce((a, b) => a + b, 0) / totalRatings;
  console.log(averageRating);

  return (
    <section className="py-5">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-12">
        <div className="div1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:col-span-6 md:col-span-7 ">
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

        <div className="div2 sm:col-span-6 md:col-span-5 my-4 mx-3 ">
          <div className="flex items-center ">
            <h4>FRANCA KNIT CARDIGAN PINK</h4>
            <i
              className={`fa fa-heart mx-3${
                isFavorite ? " text-red-500" : " text-gray-500"
              } `}
              onClick={toggleFavorite}
              style={{ fontSize: "1.2rem" }}
            />
          </div>

          <div className="flex justify-start items-center">
            <StarRating averageRating={averageRating} />
            <span className="ml-2 text-gray-600">{totalRatings} reviews</span>
          </div>

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
            Earn <strong>119</strong> Club Monterosso Points.{"  "}
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
          <br />
          <div>
            <h6>COLOUR</h6>

            <div className="flex flex-row gap-2 small-size py-2">
              <a href="" className="color-select">
                <img
                  loading="lazy"
                  src="//www.vrggrl.com/cdn/shop/files/Screenshot_2023-09-25_at_4.31.41_pm.png?v=1920025388866777920"
                  alt="colour-swatch-image"
                ></img>
              </a>
              <a href="" className="color-select">
                <img
                  loading="lazy"
                  src="//www.vrggrl.com/cdn/shop/files/Screen_Shot_2023-09-27_at_11.28.07_am.png?v=10396904634024241149"
                  alt="colour-swatch-image"
                ></img>
              </a>
            </div>
          </div>

          <div className="my-1">
            <h6>SIZE</h6>
            <div className="flex justify-between items-center my-2">
              <div className="flex flex-row gap-2 small-size">
                <div className="px-2 py-1 bg-gray-200 rounded">
                  <a href="#" className="text-decoration-none text-dark">
                    XS
                  </a>
                </div>
                <div className="px-3 py-1 bg-gray-200 rounded">
                  <a href="#" className="text-decoration-none text-dark">
                    S
                  </a>
                </div>
                <div className="px-3 py-1 bg-gray-200 rounded">
                  <a href="#" className="text-decoration-none text-dark">
                    M
                  </a>
                </div>
                <div className="px-3 py-1 bg-gray-200 rounded">
                  <a href="#" className="text-decoration-none text-dark">
                    L
                  </a>
                </div>
                <div className="px-2 py-1 bg-gray-200 rounded">
                  <a href="#" className="text-decoration-none text-dark">
                    XL
                  </a>
                </div>
              </div>
              <div>
                <p>
                  <a href="#" className="text-dark small-size underline">
                    VIEW SIZE GUIDE
                  </a>
                </p>
              </div>
            </div>
          </div>
          <button className="w-full bg-gray-200 py-2 my-2">ADD TO CART</button>
          <div className="grid grid-cols-2 gap-3 small-size my-2">
            <div className="grid grid-rows-2">
              <div className="flex items-center justify-center">
                <img
                  src="https://cdn.shopify.com/s/files/1/2682/6366/files/REFUNDID.png?v=1696809916"
                  width="50px"
                />
              </div>
              <p className="text-center">INSTANT RETURNS WITH REFUNDID</p>
            </div>
            <div className="grid grid-rows-2">
              <div className="flex items-center justify-center">
                <svg
                  className="icon icon-accordion color-foreground-text"
                  aria-hidden="true"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 3.75156C0 3.47454 0.224196 3.24997 0.500755 3.24997H10.647C10.9235 3.24997 11.1477 3.47454 11.1477 3.75156V5.07505V5.63362V6.10938V13.6616C10.9427 14.0067 10.8813 14.1101 10.5516 14.6648L7.22339 14.6646V13.6614H10.1462V4.25316H1.00151V13.6614H2.6842V14.6646H0.500755C0.224196 14.6646 0 14.44 0 14.163V3.75156Z"></path>
                  <path d="M18.9985 8.08376L11.1477 6.10938V5.07505L19.6212 7.20603C19.8439 7.26203 20 7.46255 20 7.69253V14.1631C20 14.4401 19.7758 14.6647 19.4992 14.6647H17.3071V13.6615H18.9985V8.08376ZM11.1477 13.6616L13.3442 13.6615L13.3443 14.6647L10.5516 14.6648L11.1477 13.6616Z"></path>
                  <path d="M7.71269 14.1854C7.71269 15.6018 6.56643 16.75 5.15245 16.75C3.73847 16.75 2.59221 15.6018 2.59221 14.1854C2.59221 12.7691 3.73847 11.6209 5.15245 11.6209C6.56643 11.6209 7.71269 12.7691 7.71269 14.1854ZM5.15245 15.7468C6.01331 15.7468 6.71118 15.0478 6.71118 14.1854C6.71118 13.3231 6.01331 12.6241 5.15245 12.6241C4.29159 12.6241 3.59372 13.3231 3.59372 14.1854C3.59372 15.0478 4.29159 15.7468 5.15245 15.7468Z"></path>
                  <path d="M17.5196 14.1854C17.5196 15.6018 16.3733 16.75 14.9593 16.75C13.5454 16.75 12.3991 15.6018 12.3991 14.1854C12.3991 12.7691 13.5454 11.6209 14.9593 11.6209C16.3733 11.6209 17.5196 12.7691 17.5196 14.1854ZM14.9593 15.7468C15.8202 15.7468 16.5181 15.0478 16.5181 14.1854C16.5181 13.3231 15.8202 12.6241 14.9593 12.6241C14.0985 12.6241 13.4006 13.3231 13.4006 14.1854C13.4006 15.0478 14.0985 15.7468 14.9593 15.7468Z"></path>
                </svg>
              </div>

              <p className="text-center">
                FREE STANDARD SHIPPING OVER 130 AUD (AU ONLY)
              </p>
            </div>
          </div>
          <CustomAccordion
            heading={<p>PRODUCT DETAILS</p>}
            content={
              <ul className="mx-4">
                <li>Cut out detail</li>
                <li>Side zip opening</li>
                <li>Cut on the bias</li>
                <li>
                  As this is a lightcoloured fabric we recommend wearing this
                  with nude undergarments
                </li>
                <li>55% Viscose / 45% Rayon</li>
                <li>Cold Hand Wash / Cool Iron</li>
              </ul>
            }
          />
          <CustomAccordion
            heading={<p>SIZE & FIT</p>}
            content={
              <ul className="mx-4">
                <li>
                  Length 145cm / 57in (taken from a size AU 8 shoulder to hem)
                </li>
                <li>
                  Length may differ depending on your shape as this dress is
                  bias cut
                </li>
                <li>Runs true to size </li>
                <li>Model wears size AU 8</li>
                <li>Model height 165cm / 5ft 4in</li>
              </ul>
            }
          />
          <CustomAccordion
            heading={<p>SHIPPING & RETURNS</p>}
            content={
              <p>
                To see delivery options for your location,{" "}
                <a className="underline" href="#">
                  click here.
                </a>
                <br /> Full priced items are eligible for returns within 30
                days. For more information, please visit our{" "}
                <a className="underline" href="#">
                  returns policy here.
                </a>
              </p>
            }
          />
          <CustomAccordion
            heading={<p>CUSTOMER CARE</p>}
            content={
              <p>
                Have a question? Get in touch with our team via{" "}
                <a className="underline" href="#">
                  our contact form here.
                </a>
                <br />
                <br />
                E:{" "}
                <a className="underline" href="mailt0:info@vrggrl.com">
                  info@vrggrl.com
                </a>
                <br /> PH:{" "}
                <a className="underline" href="3">
                  +61 7 3063 4242
                </a>{" "}
                <br />
                9am-4pm AEST Mon-Fri
              </p>
            }
          />
        </div>
      </div>
      <Slider title={"YOU MAY ALSO LIKE"} />

      <section>
        <div className="flex flex-col justify-center items-center">
          <p className="number-heading">{averageRating}</p>
          <StarRating averageRating={averageRating} />
          <p>BASED ON {totalRatings} REVIEWS</p>
        </div>
        <div className="border-t border-gray-200 mt-3 py-5 mx-16">
          <div className="flex justify-between">
            <div className="flex justify-start gap-4">
              <p className="font-semibold">EMMA C.</p>
              <p className="text-gray-400">VERIFIED BUYER</p>
            </div>
            <div>
              <p>2 WEEKS AGO</p>
            </div>
          </div>
          <div className="flex flex-row gap-3 my-4">
            <div>
              <img className="w-14 h-16" src={image1} alt="" />
            </div>
            <div className="flex flex-col">
              <div>
                <p>
                  <strong>REVIEWING</strong>
                </p>
              </div>
              <div>
                <p>AFTERSUN MINI DRESS TROPICANA</p>
              </div>
            </div>
          </div>
          <StarRating averageRating={averageRating} />
          <div className="my-2">
            <h4>VERY HAPPY</h4>
          </div>
          <div>
            <p className="text-gray-600">Great Price, Great Quality.</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductDetails;
