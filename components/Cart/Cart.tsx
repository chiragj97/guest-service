"use client";

import { Autocomplete, TextField } from "@mui/material";
import { SearchIcon } from "../icons/icons";
import Image from "next/image";
import CustomTab from "@/components/CustomTab/CustomTab";
import CartDetails from "../CartDetails/CartDetails";

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

  return (
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
        <div className="col-md-4 mt-2">
          <TextField
            fullWidth
            type="text"
            placeholder="Search"
            className="px-3 py-2"
          />
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
            <CustomTab />
          </div>
        </div>
        <div className="col-md-4 px-2 mt-3">
          <CartDetails cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
