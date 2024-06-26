import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";

interface CartItem {
  date: string;
  description: string;
  quantity: string;
  amount: string;
}

interface Props {
  cartItems: CartItem[];
}

const BillingDetails: React.FC<Props> = ({ cartItems }) => {
  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + parseFloat(item.amount.replace(/,/g, "")),
    0
  );

  // Calculate CGST and SGST
  const cgst = subtotal * 0.09;
  const sgst = subtotal * 0.09;

  // Calculate service charge
  const serviceCharge = 10; // Assuming a fixed service charge

  // Calculate CGST and SGST on service charge
  const cgstOnServiceCharge = serviceCharge * 0.09;
  const sgstOnServiceCharge = serviceCharge * 0.09;

  // Calculate total
  const total =
    subtotal +
    cgst +
    sgst +
    serviceCharge +
    cgstOnServiceCharge +
    sgstOnServiceCharge;

  return (
    <Box>
      <div className="row">
        <div className="col p-1" style={{overflow: 'auto', height: '72vh'}}>
          <Paper elevation={2} style={{ padding: "1px" }}>
            <Grid container spacing={2}>
              {/* Full-width table section */}
              <Grid item xs={12}>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow hover>
                        <TableCell style={{ fontWeight: "600" }}>Date</TableCell>
                        <TableCell style={{ fontWeight: "600" }}>
                          Description
                        </TableCell>
                        <TableCell style={{ fontWeight: "600" }} align="right">
                          Quantity
                        </TableCell>
                        <TableCell style={{ fontWeight: "600" }} align="right">
                          Amount
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cartItems.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.date}</TableCell>
                          <TableCell>{item.description}</TableCell>
                          <TableCell align="right">{item.quantity}</TableCell>
                          <TableCell align="right">{item.amount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>

              <div className="d-flex justify-content-end pe-1">
                <Grid item xs={12} sm={7}>
                  <Grid container spacing={1} style={{ marginTop: "10px" }}>
                    <Grid item xs={6}>
                      <Typography variant="body2">Sub Total:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" align="right">
                        {subtotal.toFixed(2)}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">CGST (9%):</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" align="right">
                        {cgst.toFixed(2)}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">SGST (9%):</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" align="right">
                        {sgst.toFixed(2)}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">Service Charge:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" align="right">
                        {serviceCharge.toFixed(2)}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">
                        CGST (9%) on Service Charge:
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" align="right">
                        {cgstOnServiceCharge.toFixed(2)}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">
                        SGST (9%) on Service Charge:
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" align="right">
                        {sgstOnServiceCharge.toFixed(2)}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2">Tip </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" align="right">
                        1000
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">Balance:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" align="right">
                        {total.toFixed(2)}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Paper>
        </div>
      </div>
    </Box>
  );
};

export default BillingDetails;
