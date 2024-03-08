import React, { useEffect, useState } from "react";
import axios from "axios";
import SliderCard from "../components/sliderCard";
import { useLocation } from "react-router-dom";

function Subcategory() {
  const location = useLocation();
  const name = location.state?.name;
  const subcategoryId = location.state?.subcategoryId;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsBySubcategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/subcategories/products/${subcategoryId}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProductsBySubcategory();
  }, [subcategoryId]);

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

export default Subcategory;
