import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "@/pages/auth/signin";
import SignUp from "@/pages/auth/signup";
import GetStarted from "@/pages/get-started";
import Home from "@/pages";
import AppLayout from "@/components/Layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/" element={<AppLayout />}>
        {/* Nested routes can be added here */}
        <Route index element={<Home />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/get-started" element={<GetStarted />} />
      </Route>

      {/* Add more routes as needed */}
    </Routes>
  );
}
