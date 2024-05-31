// components/ThreeWayToggle.tsx
import React from "react";
import { Box, Switch } from "@mui/material";
import { styled } from '@mui/system';

interface ThreeWayToggleProps {
  value: "off" | "neutral" | "on";
  onChange: (newValue: "off" | "neutral" | "on") => void;
}

const ThreeWayToggle: React.FC<ThreeWayToggleProps> = ({ value, onChange }) => {
  const handleToggle = () => {
    switch (value) {
      case "off":
        onChange("neutral");
        break;
      case "neutral":
        onChange("on");
        break;
      case "on":
        onChange("off");
        break;
    }
  };

  const getBackgroundColor = () => {
    switch (value) {
      case "off":
        return "grey";
      case "neutral":
        return "purple";
      case "on":
        return "green";
      default:
        return "grey";
    }
  };

  const StyledSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: getBackgroundColor(),
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: getBackgroundColor(),
    },
  }));

  return (
    <StyledSwitch
      checked={value !== "off"}
      onChange={handleToggle}
      inputProps={{ 'aria-label': 'three-way-toggle' }}
    />
  );
};

export default ThreeWayToggle;
