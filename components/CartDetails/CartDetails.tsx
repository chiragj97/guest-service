import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircleOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const CartDetails: React.FC<{ cartItems: Product[] }> = ({ cartItems }) => {
  return (
    <Grid container className="shadow-sm rounded pb-2">
      <Grid item xs={12} md={12} className="p-0 m-0">
        <div className="d-flex p-3 rounded-top bg-brand justify-content-between align-items-center">
          <span>2 Items Selected</span>
          <span>Cart</span>
          <span>$20509</span>
        </div>
        <div
          style={{ overflowY: "auto", height: window.innerHeight - 240 }}
        >
          {cartItems.map((item: Product) => (
            <CardContent className="mt-1 py-1" key={item.id}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex gap-2 align-items-center">
                      <Image
                        className="rounded-circle"
                        src={item.image}
                        alt={item.name}
                        width={35}
                        height={35}
                      />
                      <label>{item.name}</label>
                    </div>
                    <div className="d-flex align-items-center">
                      {item.price}
                      <IconButton>
                        <RemoveCircleIcon />
                      </IconButton>
                      {item.quantity}
                      <IconButton>
                        <AddCircleIcon />
                      </IconButton>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          ))}
        </div>
      </Grid>
      <div className="w-100 px-2">
        <Button
          variant="contained"
          fullWidth
          style={{ background: "rgba(28, 24, 91, 0.75)" }}
        >
          Order
        </Button>
      </div>
    </Grid>
  );
};

export default CartDetails;
