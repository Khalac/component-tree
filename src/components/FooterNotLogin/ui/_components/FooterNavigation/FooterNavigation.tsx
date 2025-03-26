const FooterNavigation = () => {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      {Array(4)
        .fill(0)
        .map(() => {
          return <div>link</div>;
        })}
    </div>
  );
};

export default FooterNavigation;
