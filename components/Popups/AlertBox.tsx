import { Box, Button, TextField, Typography } from "@mui/material"
import React from "react"

interface AlertBoxProps {
    message: string
}

const AlertBox: React.FC<AlertBoxProps> = ({ message }) => {
    return (
        <Box>
            <Typography variant="body2">Are you sure you want to {message}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }} textAlign="center">
                <Button variant="contained" color="primary" onClick={() => { }}>
                    Yes
                </Button>
                <Button variant="outlined" color="secondary" onClick={() => { }}>
                    No
                </Button>
            </Box>
        </Box>
    )
}

export default AlertBox