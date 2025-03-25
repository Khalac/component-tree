import React from "react";
import HeaderNavigation from "../../HeaderComponents/HeaderNavigation/HeaderNavigation";
import SearchInput from "../../HeaderComponents/SearchInput/SearchInput";
import ShoppingCart from "../../HeaderComponents/ShoppingCart/ShoppingCart";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HeaderNavigation />
      <div style={{ display: "flex", gap: "30px" }}>
        <div>image logo</div>
        <SearchInput />
        <ShoppingCart />
      </div>
    </div>
  );
};

export default Header;
