import React, { useEffect, useState } from "react";
import axios from "axios";
import SliderCard from "../components/sliderCard";
import { useParams } from "react-router-dom";

function CommonGrid() {
  const { type, name, id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByType = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/${type}/products/${id}`
        );
        const activeProducts = response.data.filter(
          (product) => product.is_active
        );
        setProducts(activeProducts);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProductsByType();
  }, [type, id]);

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

export default CommonGrid;
