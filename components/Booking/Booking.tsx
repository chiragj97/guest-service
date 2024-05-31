"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Autocomplete from "@mui/material/Autocomplete";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import { TextareaAutosize } from "@mui/material";
import ImageGrid from "../ImageGrid/ImageGrid";
import AddTask from "../AddTask/AddTask";

interface FormData {
  room: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
}

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    room: "",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      room: "",
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
    });
  };

  return (
    <div className="form-container py-3 row m-0">
      <div className="col-md-4">
        <AddTask />
      </div>
      <div className="col-md-8">
        <ImageGrid />
      </div>
    </div>
  );
};

export default Booking;
