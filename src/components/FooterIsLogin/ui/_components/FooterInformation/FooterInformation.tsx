import React from "react";
import CustomerService from "../CustomerService/CustomerService";
import AboutShopee from "../AboutShoppee/AboutShopee";
import Payment from "../Payment/Payment";
import Logistic from "../Logistic/Logistic";
import SocialLink from "../SocialLink/SocialLink";
import ShopeeApp from "../ShopeeApp/ShopeeApp";
import CprAndCountry from "../CprAndCountry/CprAndCountry";

const FooterInformation = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <CustomerService />
        <AboutShopee />
        <div>
          <Payment />
          <Logistic />
        </div>
        <SocialLink />
        <ShopeeApp />
      </div>

      <CprAndCountry />
    </div>
  );
};

export default FooterInformation;
