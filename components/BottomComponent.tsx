import React, { ReactNode } from "react";

interface BottomProps {
  children: ReactNode;
}

const BottomComponent: React.FC<BottomProps> = ({ children }) => {
  return (
    <div className="fixed-bottom" style={{ left: "50px" }}>
      {children}
    </div>
  );
};

export default BottomComponent;
