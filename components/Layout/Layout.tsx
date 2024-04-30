import React, { ReactNode } from "react";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div style={{ width: "-webkit-fill-available" }}>{children}</div>
    </div>
  );
};

export default Layout;
