
import React from 'react';
import { Box, Typography, List, ListItem, Avatar, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { removeFromCart, addToCart } from '../features/cart/cartSlice';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Cart = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        bgcolor: 'background.default',
        color: 'text.primary',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: isMobile ? '100%' : 600,
          mx: 'auto',
          px: isMobile ? 1 : 0,
        }}
      >
        <Typography variant={isMobile ? 'h5' : 'h4'} gutterBottom>
          Cart
        </Typography>
        <List>
          {items.length === 0 ? (
            <Typography variant="body1">Your cart is empty.</Typography>
          ) : (
            items.map((item: any) => (
              <ListItem
                key={item.id}
                disableGutters
                sx={{
                  px: isMobile ? 1 : 2,
                  py: isMobile ? 1 : 2,
                  mb: 1,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: isMobile ? 1 : 2,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: isMobile ? 1 : 2, flex: 1, minWidth: 0 }}>
                  <Avatar src={item.image} alt={item.title} sx={{ width: isMobile ? 40 : 56, height: isMobile ? 40 : 56, flexShrink: 0 }} />
                <Box sx={{ minWidth: 0 }}>
                  <Typography noWrap sx={{ fontSize: isMobile ? '1rem' : '1.1rem', fontWeight: 500 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
                    ${item.price} x {item.quantity}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <IconButton size="small" onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}>
                      <AddIcon fontSize="small" />
                    </IconButton>
                    <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                    <IconButton size="small" onClick={() => dispatch(addToCart({ ...item, quantity: -1 }))} disabled={item.quantity <= 1}>
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
                </Box>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => dispatch(removeFromCart(item.id))}
                  sx={{ ml: isMobile ? 1 : 2 }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))
          )}
        </List>
      </Box>
    </Box>
  );
};

export default Cart;
