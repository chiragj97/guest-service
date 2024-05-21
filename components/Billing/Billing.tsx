import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableFooter,
} from "@mui/material";
import BillingDetails from "../BillingDetails/BillingDetails";
import PeopleCounter from "../PeopleCounter/PeopleCounter";

function Billing() {
  const cartItems = [
    {
      date: "01st Jan, 2024",
      description: "Amex",
      quantity: "001",
      amount: "99,999",
    },
    {
      date: "01st Jan, 2024",
      description: "Amex",
      quantity: "001",
      amount: "99,999",
    },
    {
      date: "01st Jan, 2024",
      description: "Amex",
      quantity: "001",
      amount: "99,999",
    },
  ];
  return (
    <div className="d-flex">
      <div className="col-7 p-2">
        <BillingDetails cartItems={cartItems} />
      </div>
      <div>Guest Details</div>
    </div>
  );
}

export default Billing;
