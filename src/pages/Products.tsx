

import { useEffect, useState } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/products';

const Products = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch products');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  // Add product to cart (uses _id from backend as id)
  const handleAddToCart = (product: any) => {
    dispatch(addToCart({ ...product, id: product._id || product.id, quantity: 1 }));
  };

  // Render product grid, loading/error states, and add-to-cart buttons
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
          px: isMobile ? 2 : 0,
        }}
      >
        {loading ? (
          <Typography variant="body1" sx={{ mt: 4 }}>Loading products...</Typography>
        ) : error ? (
          <Typography color="error" sx={{ mt: 4 }}>{error}</Typography>
        ) : (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
              gap: isMobile ? 2 : 3,
              width: '100%',
              maxWidth: 1200,
            }}
          >
            {products.map(product => (
              <Card key={product._id || product.id} sx={{ maxWidth: 345, mx: 'auto', mb: isMobile ? 2 : 0 }}>
                <CardMedia
                  component="img"
                  height={isMobile ? '100' : '140'}
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant={isMobile ? 'body1' : 'h6'} component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size={isMobile ? 'small' : 'medium'}
                    variant="contained"
                    color="primary"
                    sx={{ width: '100%', letterSpacing: 1, fontWeight: 600 }}
                    onClick={() => handleAddToCart(product)}
                  >
                    ADD TO CART
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Products;
// REMOVE EVERYTHING BELOW THIS LINE (if any)
