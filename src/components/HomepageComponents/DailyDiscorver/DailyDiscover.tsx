import React from "react";
import DailyDiscoverItem from "../DailyDiscoverItem/DailyDiscoverItem";

const DailyDiscover = () => {
  return (
    <div>
      Daily Discover
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: "10px",
        }}
      >
        {Array(20)
          .fill(0)
          .map(() => {
            return (
              <div>
                <DailyDiscoverItem />
              </div>
            );
          })}
      </div>
      <div>Button See More</div>
    </div>
  );
};

export default DailyDiscover;
