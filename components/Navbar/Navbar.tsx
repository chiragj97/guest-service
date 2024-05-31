"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <nav className="d-flex shadow-sm">
      <div
        className={`col-md-2 border-bottom py-2 text-center bg bg:hover brand-bg ${pathname === "/view-ticket/guest"
            ? "bg-brand text-white rounded-top"
            : ""
          }`}
        onClick={() => handleNavigation("/view-ticket/guest")}
      >
        Guest
      </div>
      <div
        className={`col-md-2 border-bottom py-2 text-center bg bg:hover brand-bg ${pathname === "/view-ticket/booking"
            ? "bg-brand text-white rounded-top"
            : ""
          }`}
        onClick={() => handleNavigation("/view-ticket/booking")}
      >
        Booking
      </div>
      <div
        className={`col-md-2 border-bottom py-2 text-center bg bg:hover brand-bg ${pathname === "/view-ticket/cart"
            ? "bg-brand text-white rounded-top"
            : ""
          }`}
        onClick={() => handleNavigation("/view-ticket/cart")}
      >
        Cart
      </div>
      <div
        className={`col-md-2 border-bottom py-2 text-center bg bg:hover brand-bg ${pathname === "/view-ticket/billing"
            ? "bg-brand text-white rounded-top"
            : ""
          }`}
        onClick={() => handleNavigation("/view-ticket/billing")}
      >
        Billing
      </div>
      <div
        className={`col-md-2 border-bottom py-2 text-center bg bg:hover brand-bg ${pathname === "/view-ticket/inventory"
            ? "bg-brand text-white rounded-top"
            : ""
          }`}
        onClick={() => handleNavigation("/view-ticket/inventory")}
      >
        Inventory
      </div>
      <div
        className={`col-md-2 border-bottom py-2 text-center bg bg:hover brand-bg ${pathname === "/view-ticket/checklist"
            ? "bg-brand text-white rounded-top"
            : ""
          }`}
        onClick={() => handleNavigation("/view-ticket/checklist")}
      >
        Checklist
      </div>
    </nav>
  );
};

export default Navbar;
