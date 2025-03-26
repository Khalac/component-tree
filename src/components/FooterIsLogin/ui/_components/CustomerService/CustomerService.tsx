import React from "react";

const CustomerService = () => {
  return (
    <div>
      Customer Service:
      {Array(6)
        .fill(0)
        .map(() => {
          return <div>Service item</div>;
        })}
    </div>
  );
};

export default CustomerService;
