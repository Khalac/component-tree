import Carousel from "../../ui/Carousel";

const ShopeeMall = () => {
  return (
    <div>
      <div style={{ display: "flex", gap: "100px" }}>
        <div>Shopee Mall</div>
        <div>Button See all</div>
      </div>
      <div style={{ display: "flex", gap: "100px" }}>
        <div>Shoppee mall image</div>
        <Carousel str="Shoppee Mall" />
      </div>
    </div>
  );
};

export default ShopeeMall;
