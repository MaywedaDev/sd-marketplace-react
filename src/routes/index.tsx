import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "@/pages/auth/signin";
import SignUp from "@/pages/auth/signup";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/about" element={<div>About</div>} />
      <Route path="/contact" element={<div>Contact</div>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<Signin />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}
