import React from 'react';
import { Box, Button, Typography, Card, CardMedia, CardContent, Rating } from '@mui/material';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../features/cart/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Card sx={{ display: 'flex', mb: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={item.thumbnail}
        alt={item.title}
      />
      <Box display="flex" flexDirection="column" justifyContent="space-between" p={2} width="100%">
        <CardContent>
          <Typography variant="h6">{item.title}</Typography>
          <Typography variant="body2" color="text.secondary">{item.description}</Typography>
          <Typography variant="subtitle2" color="text.secondary">Brand: {item.brand}</Typography>
          <Typography variant="subtitle2" color="text.secondary">Category: {item.category}</Typography>
          <Rating value={item.rating} readOnly />
        </CardContent>
        
        <Box display="flex" alignItems="center" justifyContent="space-between" px={2} pb={1}>
          <Box display="flex" alignItems="center">
            <Button onClick={() => dispatch(decrementQuantity(item.id))} variant="outlined">-</Button>
            <Typography variant="body1" mx={2}>{item.quantity}</Typography>
            <Button onClick={() => dispatch(incrementQuantity(item.id))} variant="outlined">+</Button>
          </Box>
          <Typography variant="subtitle1">${(item.price * item.quantity).toFixed(2)}</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default CartItem;
