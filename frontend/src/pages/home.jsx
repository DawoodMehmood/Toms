import React, { useState, useEffect } from "react";
import Video from "../components/videoJumbotron";
import CanvasImage from "../components/canvasImage";
import CanvasImageWithText from "../components/canvasImageWithText";
import canvasImage1 from "../assets/img/canvasImage.jpg";
import canvasImage2 from "../assets/img/canvasImage2.jpg";
import Gallery from "../components/gallery";
import Slider from "../components/imageSlider";
import ShapeCarousel from "../components/shapeCarousel";
import { publicAPI } from "../utils/apiCalling";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await publicAPI.get("/products");
      const activeProducts = response.data.filter(
        (product) => product.is_active
      );
      setProducts(activeProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await publicAPI.get("/categories/home");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div>
      <Video />
      <Slider title={"NEW IN"} productsData={products} />
      <CanvasImageWithText
        imageUrl={canvasImage1}
        path={"/mez"}
        title={"JANUARY 24 STOCKS"}
        description={"CULT FAVOURITES ARE BACK"}
      />
      <Slider title={"MEZ"} productsData={products} />

      <section className="my-5">
        <div className="bg-banner flex items-center justify-center h-[60px] tracking-wider font-bold">
          <p>INSPIRING CREATIVITY & CONFIDENCE THROUGH STYLE</p>
        </div>
      </section>
      <CanvasImage imageUrl={canvasImage2} path={"/shop"} />
      <Gallery items={categories} />
      <ShapeCarousel />
    </div>
  );
};

export default Home;
