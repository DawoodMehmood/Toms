import React from "react";
import CustomAccordion from "../components/customAccordion";

const FAQS = () => {
  return (
    <>
      <div className="flex flex-col mx-20">
        <h1 className="">FAQS</h1>
        <section>
          <CustomAccordion
            isOpen={true}
            heading={<p>HOW DO I TRACK MY ORDER?</p>}
            content={
              <p>
                Please allow 24-48 business hours after you place your order for
                it to be dispatched. Your tracking number will be emailed to you
                when your order is dispatched. Please then allow the shipping
                company 24 hours to update the tracking on their end. Please
                note, we do not operate on weekends, so if you've ordered late
                on Friday or over the weekend, your order will not be dispatched
                until Monday. Click HERE for Seko Tracking. Click HERE for Aus
                Post Tracking.
              </p>
            }
          />
          <CustomAccordion
            heading={
              <p>I’M WONDERING IF AN OUT OF STOCK ITEM WILL BE RESTOCKED?</p>
            }
            content={
              <p>
                If an item is out of stock please contact us{" "}
                <a href="/contact" className="links">
                  via our contact form
                </a>{" "}
                and we will endeavour to reply to you as soon as possible to let
                you know if and when an item will be restocked. If you would
                like to be notified when an item is restocked, select the
                product and size you want and click on "Notify Me" to enter your
                email. <br></br>Make sure to check our{" "}
                <a href="/coming-soon" className="links">
                  Coming Soon
                </a>{" "}
                page for any items we'll be restocking.
              </p>
            }
          />
          <CustomAccordion
            heading={<p>I’M AFTER SOME INFORMATION ON SIZING?</p>}
            content={
              <p>
                We have a link to our size guide on every product page right
                next to the size selector. Just click ‘view size guide’. There,
                you can switch between centimeters and inches to check the
                conversion. We also give a description of fit within the product
                page, so have a look to see if an item runs big or small, or has
                any adjustable features.
              </p>
            }
          />
          <CustomAccordion
            heading={<p>HOW DO I RETURN AN ITEM?</p>}
            content={
              <p>
                If it doesn’t work out we gladly accept returns for unworn items
                in original condition with the tags still attached (excluding
                SALE ITEMS, ACCESSORIES AND INTIMATES). We offer simple returns
                for all orders. For further information, please visit our{" "}
                <a href="/returns" className="links">
                  RETURNS PAGE
                </a>
                . Additionally, please allow up to 4 weeks for returns to reach
                us from the US.
              </p>
            }
          />
          <CustomAccordion
            heading={<p>HOW MUCH IS SHIPPING AND HOW LONG WILL IT TAKE?</p>}
            content={
              <p>
                Shipping costs and timeframes vary from country to country. We
                recommend visiting our{" "}
                <a href="/shipping&delivery" className="links">
                  SHIPPING & DELIVERY
                </a>{" "}
                page for a detailed outline of international shipping cost and
                timeframes. In Australia we offer free standard shipping for
                orders over $130 AUD and in the US we offer free standard
                shipping for orders over $200 AUD.
              </p>
            }
          />
          <CustomAccordion
            heading={<p>HOW LONG WILL IT TAKE TO PACK AND SEND MY ORDER?</p>}
            content={
              <p>
                We aim to dispatch all orders within 24-48 business hours from
                when the order is placed. Once dispatched, you will receive a
                shipping confirmation email with your tracking link. During busy
                times such as holidays and sales, please allow up to 72 hours
                for your item to be shipped. Please note, we do not operate on
                weekends, so if you’ve ordered late on Friday or over the
                weekend, your order will not be dispatched until Monday.
              </p>
            }
          />
          <CustomAccordion
            heading={<p>I DID NOT RECEIVE A CONFIRMATION EMAIL.</p>}
            content={
              <p>
                You should receive your confirmation email after you have placed
                your order. Depending on your settings and host, your mail may
                have been directed to your junk/spam or 'Promotions' folder. If
                it is, add VRG GRL to your safe sender list so your confirmation
                arrives in your main inbox for next time. We also recommend
                checking that the correct email address has been entered at
                checkout. If your email address is incorrect, be sure to update
                it in your VRG GRL account for next time. If you still cannot
                locate your confirmation email, get in touch with us via our{" "}
                <a href="/contact" className="links">
                  contact form
                </a>
                .
              </p>
            }
          />
          <CustomAccordion
            heading={<p>HAS MY RETURN BEEN PROCESSED?</p>}
            content={
              <p>
                We will let you know via email once we have received and
                processed your return. If you have noted your return tracking
                number you will be able to track when your parcel reaches our
                Distribution Centre. Please note we usually allow around 5-10
                business days for processing once it has been received by our
                returns team. Please note returns from the US can take up to 4
                weeks to reach us in Australia.
              </p>
            }
          />
          <CustomAccordion
            heading={
              <p>HOW LONG AFTER I RECEIVE MY ORDER, CAN I MAKE A RETURN?</p>
            }
            content={
              <p>
                We accept returns within 30 days from the order date. To be
                eligible for a Refundid return, you must process your return
                within 14 days. For international customers, we ask that you
                post your return within 7 days of processing it online. You can
                view more information on our{" "}
                <a href="/returns" className="links">
                  RETURNS PAGE
                </a>
                .
              </p>
            }
          />
          <CustomAccordion
            heading={<p>CAN I MAKE CHANGES TO THE PRODUCTS IN MY ORDER?</p>}
            content={
              <p>
                Once your order has been placed, we cannot make any changes to
                your order. Once you have received your order, you're welcome to
                make a return with us, as long as your return meets our
                criteria.
              </p>
            }
          />
          <CustomAccordion
            heading={<p>CAN I UPDATE MY ADDRESS?</p>}
            content={
              <p>
                Please email us as soon as possible after placing your order if
                you need to update your address. We cannot guarantee we’ll be
                able to change this before your order is dispatched, however our
                team will try their best to accommodate this.
              </p>
            }
          />
          <CustomAccordion
            heading={<p>MY ORDER HASN'T ARRIVED YET.</p>}
            content={
              <p>
                If your order hasn’t arrived yet and it has passed the expected
                delivery timeframe, please check your tracking link to see if
                there are any updates there. If not, please reach out to us via
                our contact form so we can assist.
              </p>
            }
          />
          <CustomAccordion
            heading={<p>I CAN'T FIND MY GIFT CARD.</p>}
            content={
              <p>
                Your Gift Card is issued via email. Sometimes emails containing
                Gift Cards go through to junk/spam or 'Promotions' folders so we
                recommend checking there. If you can’t find it, please reach out
                via our contact form and our team can resend this to your inbox.
              </p>
            }
          />
        </section>
      </div>
    </>
  );
};

export default FAQS;
