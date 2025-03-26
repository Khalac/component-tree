import React, { ReactNode } from "react";
import HeaderIsLogin from "../../HeaderIsLogin/ui/HeaderIsLogin";
import FooterIsLogin from "../../FooterIsLogin/ui/FooterIsLogin";

const IsLoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <HeaderIsLogin />
      {children}
      <FooterIsLogin />
    </div>
  );
};

export default IsLoginLayout;
