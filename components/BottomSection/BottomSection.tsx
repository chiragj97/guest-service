"use client"

import React, { ReactNode, useState, MouseEvent } from "react";
import { Popover, Typography, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AddTask from "../AddTask/AddTask";

interface BottomSectionProps {
    children?: ReactNode;
}

const BottomSection: React.FC<BottomSectionProps> = ({ children }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="position-absolute bottom-0 border" style={{ width: "-webkit-fill-available", zIndex: 100 }}>
            <div className="d-flex justify-content-between">
                <div className="p-2">
                    <IconButton onClick={handleClick} aria-describedby={id}>
                        <h6 className="m-0 d-inline">Add</h6>
                        <AddIcon style={{ fontSize: '16px' }} />
                    </IconButton>
                </div>
                {children}
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <AddTask />
            </Popover>
        </div>
    );
};

export default BottomSection;
