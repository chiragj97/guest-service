import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

interface PeopleCounterProps {
  count: number;
}

const PeopleCounter: React.FC<PeopleCounterProps> = ({ count }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 2,
        position: 'absolute',
        top: 56,
        left: 65,
      }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            border: '1px solid #ccc',
            borderRadius: '50px',
            padding: '4px 8px',
            backgroundColor: '#fff',
          }}
        >
          <Avatar sx={{ width: 24, height: 24 }}>0{index + 1}</Avatar>
          <Typography>0{index + 1}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default PeopleCounter;
