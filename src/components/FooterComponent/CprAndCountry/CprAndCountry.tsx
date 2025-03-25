import React from "react";

const CprAndCountry = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>© 2025 Shopee. All Rights Reserved .</div>
      <div style={{ display: "flex", gap: "10px" }}>
        Country & Region:{" "}
        {Array(6)
          .fill(0)
          .map(() => {
            return <div>Country</div>;
          })}
      </div>
    </div>
  );
};

export default CprAndCountry;
