import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem, Box } from '@mui/material';

const MembershipForm: React.FC = () => {
    const [membershipType, setMembershipType] = React.useState('');
    const [membershipLevel, setMembershipLevel] = React.useState('');
    const [membershipNumber, setMembershipNumber] = React.useState('');

    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMembershipType(event.target.value);
    };

    const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMembershipLevel(event.target.value);
    };

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMembershipNumber(event.target.value);
    };

    return (
        <Box>
            <TextField
                select
                label="Membership Type"
                value={membershipType}
                onChange={handleTypeChange}
                fullWidth
                margin="normal"
            >
                <MenuItem value="Radisson Rewards">Radisson Rewards</MenuItem>
                <MenuItem value="Hilton Honors">Hilton Honors</MenuItem>
                <MenuItem value="Marriott Bonvoy">Marriott Bonvoy</MenuItem>
            </TextField>
            <TextField
                select
                label="Membership Level"
                value={membershipLevel}
                onChange={handleLevelChange}
                fullWidth
                margin="normal"
            >
                <MenuItem value="VIP Level">VIP Level</MenuItem>
                <MenuItem value="Gold Level">Gold Level</MenuItem>
                <MenuItem value="Platinum Level">Platinum Level</MenuItem>
            </TextField>
            <TextField
                label="Membership Number"
                value={membershipNumber}
                onChange={handleNumberChange}
                fullWidth
                margin="normal"
            />
            <Box mt={2} textAlign="center">
                <Button variant="contained" color="primary" onClick={() => { }}>
                    Apply
                </Button>
            </Box>
        </Box>
    );
};

export default MembershipForm;
