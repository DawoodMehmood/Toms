import React from "react";
import ProductForm from "../components/productForm";
import CategoryForm from "../components/categoryForm";
import SubcategoryForm from "../components/subcategoryForm";

const AdminHome = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <ProductForm />
      <CategoryForm />
      <SubcategoryForm />
    </div>
  );
};

export default AdminHome;
