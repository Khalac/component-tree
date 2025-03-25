import React from "react";
import About from "../../FooterComponent/About/About";
import TopBrands from "../../FooterComponent/TopBrands/TopBrands";
import TrendingPage from "../../FooterComponent/TrendingPage/TrendingPage";
import Categories from "../../FooterComponent/Categories/Categories";
import FooterInformation from "../../FooterComponent/FooterInformation/FooterInformation";
import FooterNavigation from "../../FooterComponent/FooterNavigation/FooterNavigation";
import Certificate from "../../FooterComponent/Certificate/Certificate";
import Address from "../../FooterComponent/Address/Address";

const Footer = () => {
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
      <About />
      <TopBrands />
      <TrendingPage />
      <Categories />
      <FooterInformation />
      <FooterNavigation />
      <Certificate />
      <Address />
    </div>
  );
};

export default Footer;
