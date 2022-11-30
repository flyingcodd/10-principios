import React from "react";
import {Box, Container, Typography} from "@mui/material";
import {styled} from '@mui/material/styles';
import HomeCarousel from "../components/HomeCarousel";

const StyledRoot = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.neutral,
    padding: theme.spacing(7, 0),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(5, 0),
    },
}));

import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Stack } from '@mui/material';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';

// ----------------------------------------------------------------------
import { useTheme } from '@mui/material/styles';
//import Box from '@mui/material/Box';
//import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
//import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


//-------------------------------------------------------------------------

const CARDS = [
    {
        icon: <BrowseGalleryIcon sx={{ fontSize: 90, mb: 0, pb: 0 }} color="primary" />,
        title: 'Rapido',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
    `,
    },
    {
        icon: <SignLanguageIcon sx={{ fontSize: 90, mb: 0, pb: 0 }} color="primary" />,
        title: 'Rapido',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
    `,
    },
    {
        icon: <BrowseGalleryIcon sx={{ fontSize: 90, mb: 0, pb: 0 }} color="primary" />,
        title: 'Rapido',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
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
      <Container>
          <Box
              gap={{ xs: 3, lg: 10 }}
              display="grid"
              alignItems="center"
              gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
                  md: 'repeat(3, 1fr)',
              }}
          >
              {CARDS.map((card, index) => (
                  <m.div key={card.title}>
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
                  </m.div>
              ))}
          </Box>
      </Container>
    

      <Card sx={{ display: 'flex' }} id="bm" >
      <Container>
      <Box sx={{ display: 'flex-direction', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h7">
            Visa
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Pago con tarjeta
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="D:\Universidad\22-2\IHC\10-principios\banking_card_cash_credit_finance_money_payment_icon_123228.png"
        alt="Live from space album cover"
      />
      </Container>

      <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h7">
            Pago efectivo
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Pago con tarjeta
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
      </Container>
      <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h7">
            Pago ventanilla
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Pago con tarjeta
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image=""
        alt="Live from space album cover"
      />
      </Container>
    </Card>

  </StyledRoot>
  
    );
}

export default Home;