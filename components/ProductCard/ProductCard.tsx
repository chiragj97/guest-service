"use client"

import React, { useState } from 'react';
import { Box, Button, Typography, Avatar, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

interface ProductCardProps {
  imageUrl: string;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Box
      sx={{
        border: '2px solid #ccc',
        borderRadius: 4,
        padding: 2,
        textAlign: 'center',
        maxWidth: 200,
        mx: 'auto',
      }}
    >
      <Avatar
        src={imageUrl}
        alt={title}
        sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
      />
      <Typography variant="body2" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{title}</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center', 
          justifyContent: 'center',
          mt: 2,
        }}
      >
        <IconButton onClick={handleDecrement}>
          <Remove />
        </IconButton>
        <Typography
          variant="body1"
          sx={{
            mx: 2,
            minWidth: 30,
            textAlign: 'center',
            border: '1px solid #ccc',
            borderRadius: 1,
            padding: '0 8px',
          }}
        >
          {String(quantity).padStart(2, '0')}
        </Typography>
        <IconButton onClick={handleIncrement}>
          <Add />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductCard;
