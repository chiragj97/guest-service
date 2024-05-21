"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";

interface FormData {
  room: string;
  salutation: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
}

const Guest: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    room: "",
    salutation: "Mr.",
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
      salutation: "Mr.",
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
    });
  };

  return (
    <form
      className="px-5 py-2 m-2"
      style={{ width: "35%" }}
      onSubmit={handleSubmit}
    >
      <FormControl fullWidth component="fieldset">
        <RadioGroup
          row
          aria-label="salutation"
          name="salutation"
          value={formData.salutation}
          onChange={handleChange}
        >
          <FormControlLabel value="Mr." control={<Radio />} label="Mr." />
          <FormControlLabel value="Ms." control={<Radio />} label="Ms." />
          <FormControlLabel value="Mx." control={<Radio />} label="Mx." />
        </RadioGroup>
        <TextField
          required
          id="room"
          label="Room"
          name="room"
          value={formData.room}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          required
          id="firstName"
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          required
          id="lastName"
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          required
          id="mobile"
          label="Mobile Number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          required
          id="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
        />
        <div className="px-2">
          <div className="d-flex justify-content-between align-items-center">
            <div className="">No Post</div>
            <div className="">
              <Switch checked />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="">VIP</div>
            <div className="">
              <Switch checked />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="">Single Lady</div>
            <div className="">
              <Switch checked />
            </div>
          </div>
        </div>
      </FormControl>
    </form>
  );
};

export default Guest;
