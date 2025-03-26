import React from "react";

const SocialLink = () => {
  return (
    <div>
      Follow us
      {Array(3)
        .fill(0)
        .map(() => {
          return <div>Social link</div>;
        })}
    </div>
  );
};

export default SocialLink;
