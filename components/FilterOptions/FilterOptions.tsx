// components/FilterOptions.tsx
import React, { useState } from "react";
import { Box, Drawer, List, ListItem, ListItemText, Tabs, Tab, ToggleButton, ToggleButtonGroup, Button } from "@mui/material";

interface FilterOptionsProps {
    open: boolean;
    onClose: () => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ open, onClose }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedSort, setSelectedSort] = useState('lowToHigh');
    const [selectedPreference, setSelectedPreference] = useState('himalayan');

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    const handleSortChange = (event: React.MouseEvent<HTMLElement>, newSort: string) => {
        if (newSort !== null) {
            setSelectedSort(newSort);
        }
    };

    const handlePreferenceChange = (event: React.MouseEvent<HTMLElement>, newPreference: string) => {
        if (newPreference !== null) {
            setSelectedPreference(newPreference);
        }
    };

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box sx={{ width: 600 }}>
                <Box sx={{ display: 'flex', borderBottom: 1, borderColor: 'divider', height: '100%' }}>
                    <List sx={{ width: '30%', backgroundColor: '#f5f5f5', borderRight: 1, borderColor: 'divider' }}>
                        <ListItem button selected={selectedTab === 0} onClick={() => setSelectedTab(0)}>
                            <ListItemText primary="Preference" />
                        </ListItem>
                        <ListItem button selected={selectedTab === 1} onClick={() => setSelectedTab(1)}>
                            <ListItemText primary="Sort By" />
                        </ListItem>
                    </List>
                    <Box sx={{ width: '70%', padding: 2 }}>
                        {selectedTab === 0 && (
                            <Box>
                                <ToggleButtonGroup
                                    value={selectedPreference}
                                    exclusive
                                    onChange={handlePreferenceChange}
                                    aria-label="preference"
                                >
                                    <ToggleButton value="himalayan">Himalayan</ToggleButton>
                                    <ToggleButton value="river">River</ToggleButton>
                                    <ToggleButton value="black">Black</ToggleButton>
                                    <ToggleButton value="highAlakaline">High Alakaline</ToggleButton>
                                </ToggleButtonGroup>
                            </Box>
                        )}
                        {selectedTab === 1 && (
                            <Box>
                                <ToggleButtonGroup
                                    value={selectedSort}
                                    exclusive
                                    onChange={handleSortChange}
                                    aria-label="sort by"
                                >
                                    <ToggleButton value="lowToHigh">Price - Low To High</ToggleButton>
                                    <ToggleButton value="highToLow">Price - High To Low</ToggleButton>
                                </ToggleButtonGroup>
                            </Box>
                        )}
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 3 }}>
                    <Button onClick={onClose}>Close</Button>
                    <Button variant="contained" color="primary">Apply</Button>
                </Box>
            </Box>
        </Drawer>
    );
};

export default FilterOptions;
