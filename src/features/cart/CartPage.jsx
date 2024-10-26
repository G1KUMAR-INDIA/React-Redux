import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import CartItem from '../../components/CartItem';
import Total from '../../components/Total';
import { setCartItems } from './cartSlice';
import data from '../../assets/product.json'; // Importing product data

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const cartData = data.products.map((product) => ({
      ...product,
      quantity: 1, // Initial quantity for each product
    }));
    dispatch(setCartItems(cartData));
  }, [dispatch]);

  return (
    <Box p={3}>
      <Typography variant="h4" mb={2}>
        Shopping Cart
      </Typography>
      <Box>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </Box>
      <Total />
    </Box>
  );
};

export default CartPage;
