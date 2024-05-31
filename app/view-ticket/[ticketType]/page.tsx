import AddItem from "@/components/AddItem/AddItem";
import Billing from "@/components/Billing/Billing";
import Booking from "@/components/Booking/Booking";
import Cart from "@/components/Cart/Cart";
import Checklist from "@/components/Checklist/Checklist";
import Guest from "@/components/Guest/Guest";
import Layout from "@/components/Layout/Layout";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

export default function ViewTicket({
  params,
}: {
  params: { ticketType: string };
}) {
  const renderContent = () => {
    switch (params.ticketType) {
      case "guest":
        return <Guest />;
      case "booking":
        return <Booking />;
      case "cart":
        return <Cart />;
      case "billing":
        return <Billing />;
      case "inventory":
        return <AddItem />;
      case "checklist":
        return <Checklist />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Navbar />
      {renderContent()}
    </Layout>
  );
}
