"use client";

import React, { useState } from "react";
import {
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import BillingDetails from "../BillingDetails/BillingDetails";
import BottomSection from "../BottomSection/BottomSection";
import FilterListIcon from '@mui/icons-material/FilterList';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandableTooltip from '../ExpandableTooltip/ExpandableTooltip';
import EditIcon from '@mui/icons-material/Edit';
import DynamicTab from "../DynamicTab/DynamicTab";

function Billing() {
  const cartItems1 = [
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
    {
      date: "01st Jan, 2024",
      description: "Amex",
      quantity: "001",
      amount: "99,999",
    },
  ];

  const cartItems2 = [
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

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const tabs = [
    {
      label: "1",
      content: (
        <Box sx={{ display: 'flex' }}>
          <BillingDetails cartItems={cartItems1} />
        </Box>
      ),
    },
    {
      label: "2",
      content: (
        <Box sx={{ display: 'flex' }}>
          <BillingDetails cartItems={cartItems2} />
        </Box>
      ),
    },
    {
      label: "3",
      content: <Typography>3</Typography>,
    },
  ];


  return (
    <div className="d-flex">
      <div className="col-7">
        <DynamicTab tabs={tabs} />
      </div>
      <div>Guest Details</div>
      <BottomSection>
        <div className="d-flex">
          <IconButton sx={{ px: '20px' }} aria-label="filter" onClick={handleClick}>
            <FilterListIcon />
          </IconButton>
          <IconButton sx={{ px: '20px' }} aria-label="filter">
            <EditIcon />
          </IconButton>
          <IconButton sx={{ px: '20px' }} aria-label="filter">
            <ShoppingCartIcon />
          </IconButton>
        </div>
      </BottomSection>
      <ExpandableTooltip
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

export default Billing;
