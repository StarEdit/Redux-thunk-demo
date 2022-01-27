import React from "react";
import { Route, Routes } from "react-router-dom";
import BankPage from "../pages/bank";
import HomePage from "../pages/home";
import PostPage from "../pages/post";

const RouterConfig = () => {
  return (
    <Routes>
      {/* List all public routes here */}
      <Route path="/" element={<HomePage />} />
      <Route path="/bank" element={<BankPage />} />
      <Route path="/post" element={<PostPage />} />
      {/* List all private/auth routes here */}
      {/* List a generic 404-Not Found route here */}
      <Route path="*">for not found</Route>
    </Routes>
  );
};

export default RouterConfig;
