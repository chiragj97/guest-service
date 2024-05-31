// components/ChangeList.tsx

import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, Divider, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

interface Change {
  type: string;
  editor: string;
  from?: string;
  to?: string;
  date: string;
  time: string;
}

const changes: Change[] = [
  {
    type: 'Mobile Number added',
    editor: 'Anirudh',
    from: '098008754900',
    to: '+234803835960',
    date: '6th March, 2023',
    time: 'Just Now',
  },
  {
    type: 'Images Added',
    editor: 'Anirudh',
    date: '6th March, 2023',
    time: 'Just Now',
  },
  // Add more changes as needed
];

const ChangeList: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '90vh', width: '60vh' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2, borderBottom: '1px solid #ddd' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Changes
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>
      <List sx={{ flexGrow: 1 }}>
        {changes.map((change, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="body1">{change.type}</Typography>}
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="textPrimary">
                      Edited by: {change.editor}
                    </Typography>
                    {change.from && (
                      <>
                        <br />
                        <Typography component="span" variant="body2">
                          From: {change.from}
                        </Typography>
                      </>
                    )}
                    {change.to && (
                      <>
                        <br />
                        <Typography component="span" variant="body2">
                          To: {change.to}
                        </Typography>
                      </>
                    )}
                  </>
                }
              />
              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="body2">{change.date}</Typography>
                <Typography variant="body2">{change.time}</Typography>
              </Box>
            </ListItem>
            {index < changes.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default ChangeList;
