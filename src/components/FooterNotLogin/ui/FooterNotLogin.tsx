import About from "./_components/About/About";
import TopBrands from "./_components/TopBrands/TopBrands";
import TrendingPage from "./_components/TrendingPage/TrendingPage";
import Categories from "./_components/Categories/Categories";
import FooterInformation from "./_components/FooterInformation/FooterInformation";
import FooterNavigation from "./_components/FooterNavigation/FooterNavigation";
import Certificate from "./_components/Certificate/Certificate";
import Address from "./_components/Address/Address";

const FooterNotLogin = () => {
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
export default FooterNotLogin;
