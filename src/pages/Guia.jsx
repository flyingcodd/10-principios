import React from "react";
import {Box, Container, Typography} from "@mui/material";
//import {styled} from '@mui/material/styles';
import HomeCarousel from "../components/HomeCarousel";


// @mui
import { alpha, styled } from '@mui/material/styles';
//import { Box, Card, Container, Typography, Stack } from '@mui/material';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';

// ----------------------------------------------------------------------
import { useTheme } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
//import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import Divider from "@mui/material/Divider";
import DevicesIcon from '@mui/icons-material/Devices';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
//-------------------------------------------------------------------------

const CARDS = [
    {
        icon: <DevicesIcon sx={{ fontSize: 90, mb: 0, pb: 0 }} color="primary" />,
        title: '1',
        description: `Ingresa tu usuario y contraseña. Si aún no tienes cuenta regístrate aquí.
    `,
    },
    {
        icon: <AddShoppingCartIcon sx={{ fontSize: 90, mb: 0, pb: 0 }} color="primary" />,
        title: '2',
        description: `Busca y selecciona el trámite que deseas pagar y agrégalo al carrito de compras.
    `,
    },
    {
        icon: <LocalAtmIcon sx={{ fontSize: 90, mb: 0, pb: 0 }} color="primary" />,
        title: '3',
        description: `Paga al instante con cualquier tarjeta Visa, Mastercard o American Express.
    `,
    },
    {
        icon: <AttachEmailIcon sx={{ fontSize: 90, mb: 0, pb: 0 }} color="primary" />,
        title: '4',
        description: `Recibirás en tu correo la constancia de pago, la cual debes presentar a la entidad seleccionada.
    `,
    },
];

const StyledRoot = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.neutral,
    padding: theme.spacing(7, 0),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(5, 0),
    },
}));

const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
    padding: theme.spacing(2, 4),
    [theme.breakpoints.up('md')]: {
        boxShadow: 'none',
    },
}));

//-----------------------------------------------------------------------


// ----------------------------------------------------------------------

function Home() {
  const theme = useTheme();
    return (
      <StyledRoot>
        <HomeCarousel/>
      <Container>
          <Box
              gap={{ xs: 3, lg: 10 }}
              display="grid"
              alignItems="center"
              gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
                  md: 'repeat(4, 1fr)',
              }}
          >
              {CARDS.map((card, index) => (
                  <div key={card.title}>
                      <StyledCard
                          sx={{
                              ...(index === 1 && {
                                  boxShadow: (theme) => ({
                                      md: `-40px 40px 80px ${alpha(theme.palette.grey[500], 0.16)}`,
                                  }),
                              }),
                          }}
                      >
                          {card.icon}
                          <Typography
                              color="primary" variant="h5" sx={{ mt: 2, mb: 2 }}>
                              {card.title}
                          </Typography>

                          <Typography sx={{ color: 'text.secondary' }}>{card.description}</Typography>
                      </StyledCard>
                  </div>
              ))}
          </Box>
      
      
      

      
      
    </Container>

  </StyledRoot>
  
    );
}

export default Home;