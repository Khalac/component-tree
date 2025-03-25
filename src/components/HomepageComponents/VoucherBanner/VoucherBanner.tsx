const VoucherBanner = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {Array(3)
        .fill(0)
        .map(() => {
          return <div>Voucher Banner</div>;
        })}
    </div>
  );
};

export default VoucherBanner;
