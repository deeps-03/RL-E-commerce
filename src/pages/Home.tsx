import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';



import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
          textAlign: 'center',
          px: isMobile ? 2 : 0,
        }}
      >
        <Typography variant={isMobile ? 'h4' : 'h3'} gutterBottom>
          Welcome to RL E-commerce!
        </Typography>
        <Typography variant={isMobile ? 'body1' : 'h6'} gutterBottom>
          Shop the best products at unbeatable prices.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/products"
          sx={{
            fontSize: isMobile ? '1rem' : '1.1rem',
            py: isMobile ? 1 : 1.5,
            px: isMobile ? 2 : 4,
            mt: 2,
            width: isMobile ? '100%' : 'auto',
            maxWidth: 300,
            boxShadow: 3,
            borderRadius: 2,
            letterSpacing: 2,
          }}
        >
          VIEW PRODUCTS
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
