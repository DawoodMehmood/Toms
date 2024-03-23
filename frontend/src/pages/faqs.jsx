import React, { useState, useEffect } from "react";
import CustomAccordion from "../components/customAccordion";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Linkify from "react-linkify";
import { publicAPI } from "../utils/apiCalling";

const FAQS = () => {
  const [faqs, setFaqs] = useState([]);

  const fetchFaqs = async () => {
    try {
      const response = await publicAPI.get("/faqs");
      setFaqs(response.data);
    } catch (error) {
      console.error("Error fetching faqs:", error);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  return (
    <>
      <div className="flex flex-col mx-20 my-10">
        <h1 className="bigText">FAQS</h1>
        <section>
          {faqs.map((faq) => (
            <CustomAccordion
              key={faq.faq_id}
              heading={<p>{faq.faq_name}</p>}
              content={faq.faq_description}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default FAQS;
