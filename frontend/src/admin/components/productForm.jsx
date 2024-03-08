import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductForm({ initialData }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  const [formData, setFormData] = useState({
    product_name: "",
    description: "",
    price: "",
    subcategory_id: "",
    flag: "",
    is_new_arrival: false,
    is_on_sale: false,
    Is_Active: false,
    discount_price: "",
    image_urls: [],
    is_tailorable: false,
    color_tile_image: "",
    variant_ids: [],
    product_details: "",
    size_and_fit: "",
    fabric: "",
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchSubcategories(selectedCategoryId);
  }, [selectedCategoryId]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchSubcategories = async (categoryId) => {
    if (!categoryId) {
      setSubcategories([]);
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:5000/api/categories/subcategories/${categoryId}`
      );
      setSubcategories(response.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
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

  const handleArrayChange = (e, field, index) => {
    const values = [...formData[field]];
    values[index] = e.target.value;
    setFormData({ ...formData, [field]: values });
  };

  const handleAddToArrayField = (field) => {
    const values = [...formData[field], ""];
    setFormData({ ...formData, [field]: values });
  };

  const handleRemoveFromArrayField = (field, index) => {
    const values = [...formData[field]];
    values.splice(index, 1);
    setFormData({ ...formData, [field]: values });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/products",
        formData
      );
      console.log("Product added successfully:", response.data);
      setFormData({
        product_name: "",
        description: "",
        price: "",
        subcategory_id: "",
        flag: "",
        is_new_arrival: false,
        is_on_sale: false,
        Is_Active: false,
        discount_price: "",
        image_urls: [],
        is_tailorable: false,
        color_tile_image: "",
        variant_ids: [],
        product_details: "",
        size_and_fit: "",
        fabric: "",
      });
      // After successful submission
      // Reset form or show success message
    } catch (error) {
      console.error("Error adding product:", error.response.data);
      // Handle submission error
    }
  };

  return (
    <div className="space-y-5 my-10">
      <h1 className="font-semibold text-xl flex items-center justify-center">
        Add New Product
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-5 w-[40vw] md:w-[50vw] lg:w-[60vw]"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Name:
          </label>
          <input
            type="text"
            name="product_name"
            value={formData.product_name}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full rounded border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tag:
          </label>
          <input
            type="text"
            name="flag"
            value={formData.flag}
            onChange={handleChange}
            placeholder="(Optional - e.g. Sold Out, New Arrival, etc.)"
            className="mt-1 p-2 block w-full rounded border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Fabric:
          </label>
          <input
            type="text"
            name="fabric"
            value={formData.fabric}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full rounded border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Color Tile Image URL:
          </label>
          <input
            type="text"
            name="color_tile_image"
            value={formData.color_tile_image}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full rounded border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            onInput={(e) => {
              e.target.style.height = "auto"; // Reset height so it can shrink if text is removed
              e.target.style.height = e.target.scrollHeight + "px"; // Set the height to fit content
            }}
            className="mt-1 p-2 block w-full rounded border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price:
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min={0}
            required
            className="mt-1 p-2 block w-full rounded border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Discounted Price:
          </label>
          <input
            type="number"
            name="discount_price"
            value={formData.discount_price}
            onChange={handleChange}
            min={0}
            placeholder="(Optional)"
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
            value={selectedCategoryId}
            onChange={(e) => {
              setSelectedCategoryId(e.target.value);
              setFormData({ ...formData, subcategory_id: "" }); // Reset subcategory selection
            }}
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
        {/* Subcategory Dropdown */}
        <div>
          <label
            htmlFor="subcategory_id"
            className="block text-sm font-medium text-gray-700"
          >
            Subcategory
          </label>
          <select
            name="subcategory_id"
            value={formData.subcategory_id}
            onChange={(e) =>
              setFormData({ ...formData, subcategory_id: e.target.value })
            }
            disabled={!selectedCategoryId}
            className="mt-1 p-2 block w-full rounded border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="">Select Subcategory</option>
            {subcategories.map((subcategory) => (
              <option
                key={subcategory.subcategory_id}
                value={subcategory.subcategory_id}
              >
                {subcategory.subcategory_name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center">
          <input
            id="is_new_arrival"
            name="is_new_arrival"
            type="checkbox"
            checked={formData.is_new_arrival}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border border-gray-300 rounded"
          />
          <label
            htmlFor="is_new_arrival"
            className="ml-2 block text-sm text-gray-900"
          >
            Is New Arrival
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="is_on_sale"
            name="is_on_sale"
            type="checkbox"
            checked={formData.is_on_sale}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border border-gray-300 rounded"
          />
          <label
            htmlFor="is_on_sale"
            className="ml-2 block text-sm text-gray-900"
          >
            Is On Sale
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="is_active"
            name="is_active"
            type="checkbox"
            checked={formData.Is_Active}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border border-gray-300 rounded"
          />
          <label
            htmlFor="is_active"
            className="ml-2 block text-sm text-gray-900"
          >
            Is Active
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="is_tailorable"
            name="is_tailorable"
            type="checkbox"
            checked={formData.is_tailorable}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border border-gray-300 rounded"
          />
          <label
            htmlFor="is_tailorable"
            className="ml-2 block text-sm text-gray-900"
          >
            Is Tailorable
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Details:
          </label>
          <textarea
            name="product_details"
            value={formData.product_details}
            onChange={handleChange}
            onInput={(e) => {
              e.target.style.height = "auto"; // Reset height so it can shrink if text is removed
              e.target.style.height = e.target.scrollHeight + "px"; // Set the height to fit content
            }}
            className="mt-1 p-2 block w-full rounded border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Size & Fit:
          </label>
          <textarea
            name="size_and_fit"
            value={formData.size_and_fit}
            onChange={handleChange}
            onInput={(e) => {
              e.target.style.height = "auto"; // Reset height so it can shrink if text is removed
              e.target.style.height = e.target.scrollHeight + "px"; // Set the height to fit content
            }}
            className="mt-1 p-2 block w-full rounded border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        {/* Repeat the structure above for `is_on_sale` and `Is_Active` */}

        {/* For image_urls and variant_ids, you might want to map over the array and provide input for each item */}
        {/* Example for image_urls */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URLs:
          </label>
          {formData.image_urls.map((url, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="text"
                value={url}
                onChange={(e) => handleArrayChange(e, "image_urls", index)}
                className="mt-1 p-2 block w-full rounded border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <button
                type="button"
                onClick={() => handleRemoveFromArrayField("image_urls", index)}
                className="py-1 px-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddToArrayField("image_urls")}
            className="mt-2 py-1 px-2 bg-blue-500 text-white rounded"
          >
            Add Image URL
          </button>
        </div>

        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Product
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
