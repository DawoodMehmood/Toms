import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default UserLayout;
