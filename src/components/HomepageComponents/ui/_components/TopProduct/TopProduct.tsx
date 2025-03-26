import { Carousel } from "../../../../ui";

const TopProduct = () => {
  return (
    <div>
      <div style={{ display: "flex", gap: "100px" }}>
        <div>Top Product</div>
        <div>Button See all</div>
      </div>
      <div>
        <Carousel str="Top Product" />
      </div>
    </div>
  );
};

export default TopProduct;
