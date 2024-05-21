// components/DiscountForm.tsx

import React, { useState, ChangeEvent } from 'react';
import {
    Box,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    TextField,
    Button,
    Typography
} from '@mui/material';

const DiscountForm: React.FC = () => {
    const [transactionType, setTransactionType] = useState<string>('bill');
    const [discountValue, setDiscountValue] = useState<string>('');
    const [reason, setReason] = useState<string>('');

    const handleTransactionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTransactionType(event.target.value);
    };

    const handleDiscountValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDiscountValue(event.target.value);
    };

    const handleReasonChange = (event: ChangeEvent<HTMLInputElement>) => {
        setReason(event.target.value);
    };

    const handleSubmit = () => {
        // Handle form submission logic
        console.log('Transaction Type:', transactionType);
        console.log('Discount Value:', discountValue);
        console.log('Reason:', reason);
    };

    return (
        <Box
            sx={{
                maxWidth: 300,
                p: 2,
                border: '1px solid #ccc',
                borderRadius: 4,
            }}
        >
            <Typography variant="h6" gutterBottom>
                Add Discount
            </Typography>
            <FormControl component="fieldset">
                <RadioGroup
                    name="transactionType"
                    value={transactionType}
                    onChange={handleTransactionChange}
                >
                    <FormControlLabel
                        value="transaction"
                        control={<Radio />}
                        label="Select Transaction"
                    />
                    <FormControlLabel value="bill" control={<Radio />} label="Select Bill" />
                </RadioGroup>
            </FormControl>
            <Box mt={2}>
                <TextField
                    placeholder='Enter Value'
                    label="Discount In"
                    variant="outlined"
                    fullWidth
                    value={discountValue}
                    onChange={handleDiscountValueChange}
                    InputProps={{
                        startAdornment: (
                            <RadioGroup row aria-label="discount" name="discount" defaultValue="%">
                                <FormControlLabel value="%" control={<Radio />} label="%" />
                                <FormControlLabel value="₹" control={<Radio />} label="₹" />
                            </RadioGroup>
                        ),
                    }}
                />
            </Box>
            <Box mt={2}>
                <TextField
                    label="Enter Reason"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    value={reason}
                    onChange={handleReasonChange}
                />
            </Box>
            <Box mt={2} textAlign="center">
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Apply
                </Button>
            </Box>
        </Box>
    );
};

export default DiscountForm;
