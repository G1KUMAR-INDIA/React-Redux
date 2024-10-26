import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const Total = () => {
  const { totalQuantity, totalAmount } = useSelector((state) => state.cart);

  return (
    <Box p={2}>
      <Typography variant="h6">Total Quantity: {totalQuantity}</Typography>
      <Typography variant="h6">Total Amount: ${totalAmount.toFixed(2)}</Typography>
    </Box>
  );
};

export default Total;
