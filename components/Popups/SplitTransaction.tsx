import React, { useState, ChangeEvent } from 'react';
import {
    Box,
    Radio,
    RadioGroup,
    FormControlLabel,
    TextField,
    Button,
    Typography
} from '@mui/material';

const SplitTransaction: React.FC = () => {
    const [discountValue, setDiscountValue] = useState<string>('');

    const handleDiscountValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDiscountValue(event.target.value);
    };

    const handleSubmit = () => {
        console.log('Discount Value:', discountValue);
    };

    return (
        <Box
            sx={{
                p: 1,
            }}
        >
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
            <Box mt={2} textAlign="center">
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Apply
                </Button>
            </Box>
        </Box>
    );
};

export default SplitTransaction;
