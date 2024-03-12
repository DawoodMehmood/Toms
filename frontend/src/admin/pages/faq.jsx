import axios from "axios";
import React, { useState } from "react";

const AdminFaqs = () => {
  const [formData, setFormData] = useState({
    faq_name: "",
    faq_description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/faqs",
        formData
      );
      console.log("Faq added successfully:", response.data);
      setFormData({
        faq_name: "",
        faq_description: "",
      });
      // After successful submission
      // Reset form or show success message
    } catch (error) {
      console.error("Error adding faq:", error.response.data);
      // Handle submission error
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="space-y-5 my-10">
        <h1 className="font-semibold text-xl flex items-center justify-center">
          Add New Faq
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-5 w-[40vw] md:w-[50vw] lg:w-[60vw]"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Faq Name:
            </label>
            <input
              type="text"
              name="faq_name"
              value={formData.faq_name}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full rounded border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Faq Description:
            </label>
            <textarea
             
              name="faq_description"
              value={formData.faq_description}
              onChange={handleChange}
              onInput={(e) => {
                e.target.style.height = "auto"; // Reset height so it can shrink if text is removed
                e.target.style.height = e.target.scrollHeight + "px"; // Set the height to fit content
              }}
              required
              className="mt-1 p-2 block w-full rounded border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Faq
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminFaqs;
