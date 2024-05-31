"use client";

import React, { useState, MouseEvent } from "react";
import {
    Box,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Popover,
    TextField,
    Autocomplete,
    Typography,
} from "@mui/material";
import { Add as AddIcon, Edit as EditIcon } from "@mui/icons-material";

interface Item {
    id: number;
    count: string;
    category: string;
    name: string;
}

const AddItem: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [currentItem, setCurrentItem] = useState<Item | null>(null);

    const [itemCategory, setItemCategory] = useState<string | null>(null);
    const [itemName, setItemName] = useState<string | null>(null);
    const [count, setCount] = useState<string>("");

    const handleAddClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setCurrentItem(null);
        setItemCategory(null);
        setItemName(null);
        setCount("");
    };

    const handleEditClick = (item: Item, event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setCurrentItem(item);
        setItemCategory(item.category);
        setItemName(item.name);
        setCount(item.count);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setCurrentItem(null);
        setItemCategory(null);
        setItemName(null);
        setCount("");
    };

    const handlePost = () => {
        if (currentItem) {
            // Edit item
            setItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === currentItem.id
                        ? { ...item, count, category: itemCategory!, name: itemName! }
                        : item
                )
            );
        } else {
            // Add new item
            const newItem: Item = {
                id: items.length + 1,
                count,
                category: itemCategory!,
                name: itemName!,
            };
            setItems((prevItems) => [...prevItems, newItem]);
        }
        handlePopoverClose();
    };

    const open = Boolean(anchorEl);
    const id = open ? "add-edit-popover" : undefined;

    const categories = [{ label: "Category 1" }, { label: "Category 2" }];
    const itemNames = [{ label: "Item 1" }, { label: "Item 2" }];

    return (
        <Box sx={{ width: 400 }}>
            <List sx={{ p: 3 }}>
                {items.map((item) => (
                    <ListItem key={item.id} secondaryAction={
                        <IconButton edge="end" onClick={(event) => handleEditClick(item, event)}>
                            <EditIcon />
                        </IconButton>
                    }>
                        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                            <Box sx={{ backgroundColor: '#1C185B', color: '#fff', padding: '8px 16px', borderRadius: '4px 0 0 4px', width: '70px', textAlign: 'center' }}>
                                {item.count}
                            </Box>
                            <Box sx={{ backgroundColor: '#D3D3D3', padding: '8px 16px', borderRadius: '0 4px 4px 0', flexGrow: 1 }}>
                                {item.name}
                            </Box>
                        </Box>
                    </ListItem>
                ))}
            </List>
            <Box onClick={handleAddClick} sx={{ display: "flex", justifyContent: "end", alignItems: "center", px: 4 }}>
                <Typography variant="body2">Add Item</Typography>
                <IconButton>
                    <AddIcon />
                </IconButton>
            </Box>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                sx={{ width: 500 }}
            >
                <Box sx={{ p: 2 }}>
                    <Autocomplete
                        options={categories}
                        getOptionLabel={(option) => option.label}
                        value={itemCategory}
                        onChange={(event, newValue) => setItemCategory(newValue?.label || null)}
                        renderInput={(params) => (
                            <TextField {...params} label="Item Category" margin="normal" fullWidth />
                        )}
                    />
                    <Autocomplete
                        options={itemNames}
                        getOptionLabel={(option) => option.label}
                        value={itemName}
                        onChange={(event, newValue) => setItemName(newValue?.label || null)}
                        renderInput={(params) => (
                            <TextField {...params} label="Item" margin="normal" fullWidth />
                        )}
                    />
                    <TextField
                        label="Count"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                        margin="normal"
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handlePost}
                    >
                        {currentItem ? "Edit" : "Post"}
                    </Button>
                </Box>
            </Popover>
        </Box>
    );
};

export default AddItem;
