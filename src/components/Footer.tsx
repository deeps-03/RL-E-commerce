import { Box, Typography } from '@mui/material';


import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      component="footer"
      sx={{
        py: isMobile ? 1 : 2,
        textAlign: 'center',
        bgcolor: 'background.paper',
        mt: 4,
        fontSize: isMobile ? '0.85rem' : '1rem',
      }}
    >
      <Typography variant="body2" color="text.secondary" sx={{ fontSize: isMobile ? '0.85rem' : '1rem' }}>
        © {new Date().getFullYear()} RL E-commerce Project
      </Typography>
    </Box>
  );
};

export default Footer;
