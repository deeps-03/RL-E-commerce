import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';


import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const cartCount = useSelector((state: RootState) => state.cart.items.length);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <AppBar position="static">
      <Toolbar sx={{ flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center' }}>
        <Typography variant="h6" sx={{ flexGrow: 1, mb: isMobile ? 1 : 0 }}>
          <Button color="inherit" component={Link} to="/" sx={{ fontSize: isMobile ? '1rem' : '1.1rem' }}>Home</Button>
          <Button color="inherit" component={Link} to="/products" sx={{ fontSize: isMobile ? '1rem' : '1.1rem' }}>Products</Button>
        </Typography>
        <IconButton color="inherit" component={Link} to="/cart" sx={{ alignSelf: isMobile ? 'flex-end' : 'center' }}>
          <Badge badgeContent={cartCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
