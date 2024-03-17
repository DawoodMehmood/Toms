import React, { useState, useEffect } from "react";
import CustomAccordion from "../components/customAccordion";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Linkify from "react-linkify";

const FAQS = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Fetch FAQ data from your API
    fetch("http://localhost:5000/api/faqs")
      .then((response) => response.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.error("Error fetching faqs:", error));
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
