import React from "react";
import CategoriesItem from "../CategoriesItem/CategoriesItem";

const Categories = () => {
  return (
    <div>
      Categories
      <div style={{ display: "flex", gap: "10px" }}>
        {Array(6)
          .fill(0)
          .map(() => {
            return (
              <div>
                <CategoriesItem />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Categories;
