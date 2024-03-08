import React, { useState, useEffect } from "react";
import axios from "axios";

function SubcategoryForm() {
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    subcategory_name: "",
    category_id: "",
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

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
        "http://localhost:5000/api/subcategories",
        formData
      );
      console.log("Subategory added successfully:", response.data);
      setFormData({
        subcategory_name: "",
        category_id: "",
      });
      // After successful submission
      // Reset form or show success message
    } catch (error) {
      console.error("Error adding subcategory:", error.response.data);
      // Handle submission error
    }
  };

  return (
    <div className="space-y-5 my-10">
      <h1 className="font-semibold text-xl flex items-center justify-center">
        Add New Subcategory
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-5 w-[40vw] md:w-[50vw] lg:w-[60vw]"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Subategory Name:
          </label>
          <input
            type="text"
            name="subcategory_name"
            value={formData.subcategory_name}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full rounded border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="category_id"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            className="mt-1 p-2 block w-full rounded border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.category_id} value={category.category_id}>
                {category.category_name}
              </option>
            ))}
          </select>
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

export default SubcategoryForm;
