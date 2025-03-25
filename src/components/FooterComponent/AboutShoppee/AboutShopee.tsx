const AboutShopee = () => {
  return (
    <div>
      {" "}
      <div>
        About shopee:
        {Array(6)
          .fill(0)
          .map(() => {
            return <div>About item</div>;
          })}
      </div>
    </div>
  );
};

export default AboutShopee;
