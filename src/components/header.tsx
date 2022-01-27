import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        fontSize: "2rem",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/bank">Bank</Link>
      <Link to="/post">Post</Link>
      <Link to="/signIn">Sign In</Link>
      <Link to="/signOut">Sign Out</Link>
    </div>
  );
};

export default Header;
