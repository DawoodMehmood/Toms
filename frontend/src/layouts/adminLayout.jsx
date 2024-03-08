import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../admin/components/navbar";

const AdminLayout = () => (
  <>
    {/* Admin specific header or sidebar can go here */}
    <AdminNavbar />
    <Outlet />
    {/* Maybe an admin footer if needed */}
  </>
);

export default AdminLayout;
