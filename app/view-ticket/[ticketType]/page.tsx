import Billing from "@/components/Billing/Billing";
import Booking from "@/components/Booking/Booking";
import Cart from "@/components/Cart/Cart";
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
