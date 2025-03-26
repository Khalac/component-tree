import React, { ReactNode } from "react";

import HeaderNotLogin from "../../HeaderNotLogin/ui/HeaderNotLogin";
import FooterNotLogin from "../../FooterNotLogin/ui/FooterNotLogin";

const NotLoginLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <HeaderNotLogin />
      {children}
      <FooterNotLogin />
    </div>
  );
};

export default NotLoginLayout;
