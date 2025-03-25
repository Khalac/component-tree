import React from "react";
import Carousel from "../../ui/Carousel";
import Features from "../Features/Features";

const Banner = () => {
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
      <div style={{ display: "flex", gap: "30px" }}>
        {" "}
        <Carousel str="banner" />
        <div>
          <div>Banner</div>
          <div>Banner</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        {Array(6)
          .fill(0)
          .map(() => {
            return (
              <div>
                <Features />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Banner;
