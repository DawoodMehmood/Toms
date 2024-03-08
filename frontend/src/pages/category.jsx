import React, { useEffect, useState } from "react";
import axios from "axios";
import SliderCard from "../components/sliderCard";
import { useLocation } from "react-router-dom";

function Category() {
  const location = useLocation();
  const name = location.state?.name;
  const categoryId = location.state?.categoryId;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/categories/products/${categoryId}`
        );
        const activeProducts = response.data.filter(
          (product) => product.Is_Active
        );
        setProducts(activeProducts);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProductsByCategory();
  }, [categoryId]);

  return (
    <div className=" m-10 space-y-5">
      <div className="text-left">
        <h1 className="text-xl">{name}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <SliderCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Category;
