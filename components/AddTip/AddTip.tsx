import { Box, Button, TextField } from "@mui/material"

const AddTip = () => {
    return (
        <Box>
            <TextField label="Amount" placeholder="Amount" />
            <Box mt={2} textAlign="center">
                <Button variant="contained" color="primary" onClick={() => {}}>
                    Apply
                </Button>
            </Box>
        </Box>
    )
}

export default AddTip