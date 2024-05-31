"use client";

import React, { useState, MouseEvent } from "react";
import {
  Autocomplete,
  IconButton,
  TextField,
  Popover,
  Typography,
  Box,
} from "@mui/material";
import { SearchIcon } from "../icons/icons";
import Image from "next/image";
import DynamicTab from "@/components/DynamicTab/DynamicTab";
import CartDetails from "../CartDetails/CartDetails";
import BottomSection from "../BottomSection/BottomSection";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ProductCard from "../ProductCard/ProductCard";
import SearchBar from "../SearchBar/SearchBar";
import ChangeList from "../ChangeList/ChangeList";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  const cartItems: Product[] = [
    {
      id: 1,
      name: "Essenza Di Ville",
      image: "/assets/module.jpg",
      price: 999.99,
      quantity: 2,
    },
    {
      id: 2,
      name: "Essenza Di Ville",
      image: "/assets/module.jpg",
      price: 999.99,
      quantity: 1,
    },
    {
      id: 3,
      name: "Essenza Di Ville",
      image: "/assets/module.jpg",
      price: 999.99,
      quantity: 2,
    },
  ];

  const [cartAnchorEl, setCartAnchorEl] = useState<HTMLElement | null>(null);
  const [watchLaterAnchorEl, setWatchLaterAnchorEl] = useState<HTMLElement | null>(null);

  const handleCartIconClick = (event: MouseEvent<HTMLElement>) => {
    setCartAnchorEl(event.currentTarget);
  };

  const handleWatchLaterIconClick = (event: MouseEvent<HTMLElement>) => {
    setWatchLaterAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setCartAnchorEl(null);
    setWatchLaterAnchorEl(null);
  };

  const cartOpen = Boolean(cartAnchorEl);
  const watchLaterOpen = Boolean(watchLaterAnchorEl);

  const cartPopoverId = cartOpen ? 'cart-popover' : undefined;
  const watchLaterPopoverId = watchLaterOpen ? 'watch-later-popover' : undefined;

  const tabs = [
    {
      label: "High Foam",
      content: (
        <Box sx={{ display: 'flex' }}>
          <ProductCard imageUrl="/assets/module.jpg" title="Essenza De Ville" />
          <ProductCard imageUrl="/assets/module.jpg" title="Essenza De Ville" />
          <ProductCard imageUrl="/assets/module.jpg" title="Essenza De Ville" />
        </Box>
      ),
    },
    {
      label: "Low Foam",
      content: <Typography>Low Foam</Typography>,
    },
    {
      label: "Aromatic",
      content: <Typography>Aromatic</Typography>,
    },
  ];

  return (
    <div>
      <div className="px-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="col-md-4">
            <Autocomplete
              defaultValue={{ label: "Madras Cafe", id: 1 }}
              options={[{ label: "Madras Cafe", id: 1 }]}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => <TextField {...params} margin="normal" />}
            />
          </div>
          <div className="col-md-4 mt-2 px-3">
            <SearchBar useFilterAndSorting={true} />
          </div>
          <div className="col-md-4 pe-4 d-flex justify-content-end align-items-center gap-2">
            <SearchIcon />
            <h5 className="m-0">Mr. Anirudh Jonnalagadda</h5>
          </div>
        </div>
        <div className="d-flex">
          <div className="col-md-8">
            <div className="d-flex gap-2 py-2">
              <button
                className="col-md-2 btn btn-primary rounded-pill px-2 py-1"
                style={{ background: "#1C185B" }}
              >
                Toiletries
              </button>
              <button className="col-md-2 btn btn-light rounded-pill px-2 py-1">
                Chilled Water
              </button>
              <button className="col-md-2 btn btn-light rounded-pill px-2 py-1">
                Accessories
              </button>
            </div>

            <div className="py-2 d-flex gap-2">
              <SearchIcon />
              <div>Available from 6AM - 9PM</div>
            </div>

            <div className="d-flex gap-3 py-2">
              <div className="p-1 d-flex gap-4 border rounded w-25 bg bg:hover bg-lightblue">
                <Image
                  className="rounded"
                  src="/assets/module.jpg"
                  width={70}
                  height={70}
                  alt="Clock"
                />
                <div className="d-flex justify-content-center align-items-center">
                  <div className="">
                    <h6 className="m-0">Soap</h6>
                    <label className="text-muted">25 Items</label>
                  </div>
                </div>
              </div>
              <div className="p-1 d-flex gap-4 border rounded w-25 bg bg:hover bg-lightblue">
                <Image
                  className="rounded"
                  src="/assets/module.jpg"
                  width={70}
                  height={70}
                  alt="Clock"
                />
                <div className="d-flex justify-content-center align-items-center">
                  <div className="">
                    <h6 className="m-0">Shampoo</h6>
                    <label className="text-muted">25 Items</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-75">
              <DynamicTab tabs={tabs} />
            </div>
          </div>
        </div>
      </div>
      <BottomSection>
        <div className="d-flex">
          <IconButton sx={{ px: '20px' }} aria-label="cart" onClick={handleCartIconClick}>
            <ShoppingCartIcon />
          </IconButton>
          <IconButton sx={{ px: '20px' }} aria-label="watch-later" onClick={handleWatchLaterIconClick}>
            <WatchLaterIcon />
          </IconButton>
        </div>
      </BottomSection>
      <Popover
        id={cartPopoverId}
        open={cartOpen}
        anchorEl={cartAnchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <CartDetails cartItems={cartItems} />
      </Popover>
      <Popover
        id={watchLaterPopoverId}
        open={watchLaterOpen}
        anchorEl={watchLaterAnchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <ChangeList />
      </Popover>
    </div>
  );
};

export default Cart;
