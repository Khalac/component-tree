import Banner from "./_components/Banner/Banner";
import Categories from "./_components/Categories/Categories";
import VoucherBanner from "./_components/VoucherBanner/VoucherBanner";
import ShopeeMall from "./_components/ShoppeeMall/ShopeeMall";
import TopProduct from "./_components/TopProduct/TopProduct";
import DailyDiscover from "./_components/DailyDiscorver/DailyDiscover";

export const HomepageComponents = () => {
  return (
    <div>
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
    </div>
  );
};
