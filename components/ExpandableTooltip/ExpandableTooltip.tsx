import React, { useState } from 'react';
import {
  Popover,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DiscountForm from '../DiscountForm/DiscountForm';
import AddTip from '../AddTip/AddTip';
import AddServiceCharge from '../Popups/AddServiceCharge';
import MembershipForm from '../Popups/MembershipForm';
import SplitTransaction from '../Popups/SplitTransaction';
import AlertBox from '../Popups/AlertBox';

const options = {
  Membership: ['Add Membership', 'Remove Membership'],
  Coupon: ['Add Coupon', 'Remove Coupon'],
  Tip: ['Add Tip', 'Remove Tip'],
  'Service Charge': ['Add Service Charge', 'Remove Service Charge'],
  Discount: ['Add Discount', 'Remove Discount'],
  Transaction: ['Add Transaction', 'Void Transaction', 'Combine Transaction', 'Split Transaction', 'Move Transaction'],
  Payment: ['Add Payment', 'Void Payment', 'Refund/Paid Out'],
  Bill: ['Split Bill', 'Combine Bill'],
  GSTIN: ['Add GSTIN', 'Remove GSTIN'],
  Settle: ['ToRoom', 'ToCityLedger', 'ToAgent', 'ToDept', 'ToComplimentary'],
};

const componentMap: { [key: string]: React.FC } = {
  'Add Discount': DiscountForm,
  'Add Tip': AddTip,
  'Add Service Charge': AddServiceCharge,
  'Add Membership': MembershipForm,
  'Split Transaction': SplitTransaction,
  'Remove Coupon': () => <AlertBox message="remove the Coupon" />,
  'Remove Tip': () => <AlertBox message="remove the Tip" />,
  'Remove Service Charge': () => <AlertBox message="remove the Service Charge" />,
  'Remove Discount': () => <AlertBox message="remove the Discount" />,
  'Void Transaction': () => <AlertBox message="void the transaction" />,
  'Remove Membership': () => <AlertBox message="remove the Membership" />
};

interface ExpandableTooltipProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  open: boolean;
}

const ExpandableTooltip: React.FC<ExpandableTooltipProps> = ({ anchorEl, onClose, open }) => {
  const [nestedAnchorEl, setNestedAnchorEl] = useState<HTMLElement | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState('');
  const [nestedOptions, setNestedOptions] = useState<string[]>([]);

  const handleToggleNested = (event: React.MouseEvent<HTMLElement>, option: string) => {
    setNestedAnchorEl(event.currentTarget);
    setNestedOptions(options[option]);
  };

  const handleCloseNested = () => {
    setNestedAnchorEl(null);
    setNestedOptions([]);
  };

  const openNested = Boolean(nestedAnchorEl);

  const handleOptionClick = (content: string) => {
    setDialogContent(content);
    setDialogOpen(true);
    handleCloseNested();
    onClose();
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const DialogContentComponent = componentMap[dialogContent] || (() => <div>Component not found</div>);

  return (
    <>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <List component="nav">
          {Object.keys(options).map((option) => (
            <ListItem button key={option} onClick={(event) => handleToggleNested(event, option)}>
              <ListItemText primary={option} />
              <ArrowRightIcon />
            </ListItem>
          ))}
        </List>
      </Popover>
      <Popover
        open={openNested}
        anchorEl={nestedAnchorEl}
        onClose={handleCloseNested}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Paper elevation={3}>
          <List component="div">
            {nestedOptions.map((subOption) => (
              <ListItem button key={subOption} onClick={() => handleOptionClick(subOption)}>
                <ListItemIcon>
                  <AddCircleIcon />
                </ListItemIcon>
                <ListItemText primary={subOption} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Popover>
      <Dialog open={dialogOpen} onClose={handleDialogClose} maxWidth="xs">
        <DialogTitle>{dialogContent}</DialogTitle>
        <DialogContent>
          <DialogContentComponent />
        </DialogContent>
        {/* <Button onClick={handleDialogClose} color="primary">
          Close
        </Button> */}
      </Dialog>
    </>
  );
};

export default ExpandableTooltip;
