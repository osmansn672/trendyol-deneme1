import React from "react";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="navbar">
      <span>Trendyol</span>
      <SearchBar />
      <UserMenu />
    </div>
  );
};

export default Navbar;
