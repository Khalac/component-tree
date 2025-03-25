import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Banner from "./components/HomepageComponents/Banner/Banner";
import Categories from "./components/HomepageComponents/Categories/Categories";
import VoucherBanner from "./components/HomepageComponents/VoucherBanner/VoucherBanner";
import ShopeeMall from "./components/HomepageComponents/ShoppeeMall/ShopeeMall";
import TopProduct from "./components/HomepageComponents/TopProduct/TopProduct";
import DailyDiscover from "./components/HomepageComponents/DailyDiscorver/DailyDiscover";
import Footer from "./components/ui/Footer/Footer";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Homepage />
      <br />
      <Banner />
      <br />
      <Categories />
      <br />
      <VoucherBanner />
      <br />
      <ShopeeMall />
      <br />
      <TopProduct />
      <br />
      <DailyDiscover />
      <br />
      <Footer />
    </div>
  );
}

export default App;
