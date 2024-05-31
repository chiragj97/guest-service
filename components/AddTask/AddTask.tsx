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

interface FormData {
  room: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
}

const AddTask: React.FC = () => {
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
    <div
      className="form-container py-3 row m-0"
      style={{ height: "90vh", overflowY: "auto" }}
    >
      <form
        className="px-5"
        onSubmit={handleSubmit}
      >
        <FormControl fullWidth component="fieldset">
          <div className="px-1">
            <div className="d-flex justify-content-between align-items-center">
              <div className="">Internal</div>
              <div className="">
                <Switch checked />
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="">Public Area</div>
              <div className="">
                <Switch checked />
              </div>
            </div>
          </div>
          <Autocomplete
            defaultValue={{ label: "Walk-In", id: 1 }}
            options={[
              { label: "Walk-In", id: 1 },
              { label: "Abc", id: 2 },
            ]}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Source"
                variant="outlined"
                margin="normal"
              />
            )}
          />
          <Autocomplete
            defaultValue={{ label: "101", id: 1 }}
            options={[
              { label: "101", id: 1 },
              { label: "102", id: 2 },
            ]}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Room"
                variant="outlined"
                margin="normal"
              />
            )}
          />
          <Autocomplete
            defaultValue={{ label: "Lobby - Gents Washroom", id: 1 }}
            options={[
              { label: "Lobby - Gents Washroom", id: 1 },
              { label: "Ladis Washroom", id: 2 },
            ]}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Location"
                variant="outlined"
                margin="normal"
              />
            )}
          />
          <Autocomplete
            defaultValue={{ label: "WC flush not working", id: 1 }}
            options={[{ label: "WC flush not working", id: 1 }]}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Service"
                variant="outlined"
                margin="normal"
              />
            )}
          />
          <Autocomplete
            defaultValue={{ label: "Anirudh Jonnalagadda", id: 1 }}
            options={[{ label: "Anirudh Jonnalagadda", id: 1 }]}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Agent"
                variant="outlined"
                margin="normal"
              />
            )}
          />
          <TextField
            multiline
            rows={4}
            variant="outlined"
            placeholder="Other instructions"
            fullWidth
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
        </FormControl>
      </form>
    </div>
  );
};

export default AddTask;
