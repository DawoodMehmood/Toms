import React, { useState, useEffect } from "react";
import axios from "axios";

function CategoryForm() {
  const [formData, setFormData] = useState({
    category_name: "",
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
        "http://localhost:5000/api/categories",
        formData
      );
      console.log("Category added successfully:", response.data);
      setFormData({
        category_name: "",
      });
      // After successful submission
      // Reset form or show success message
    } catch (error) {
      console.error("Error adding category:", error.response.data);
      // Handle submission error
    }
  };

  return (
    <div className="space-y-5 my-10">
      <h1 className="font-semibold text-xl flex items-center justify-center">
        Add New Category
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-5 w-[40vw] md:w-[50vw] lg:w-[60vw]"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category Name:
          </label>
          <input
            type="text"
            name="category_name"
            value={formData.category_name}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full rounded border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Category
        </button>
      </form>
    </div>
  );
}

export default CategoryForm;
