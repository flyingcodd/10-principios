import React from "react";
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import {m} from 'framer-motion';

import {alpha, styled} from '@mui/material/styles';
import {Box, Card, Container, Typography} from '@mui/material';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';

import HomeCarousel from "../components/HomeCarousel";

const CARDS01 = [
    {
        icon: <BrowseGalleryIcon sx={{fontSize: 90, mb: 0, pb: 0}} color="primary"/>,
        title: 'Rapido1',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
  `,
    },
    {
        icon: <SignLanguageIcon sx={{fontSize: 90, mb: 0, pb: 0}} color="primary"/>,
        title: 'Rapido2',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
  `,
    },
    {
        icon: <BrowseGalleryIcon sx={{fontSize: 90, mb: 0, pb: 0}} color="primary"/>,
        title: 'Rapido3',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
  `,
    },
];
const CARDS02 = [
    {
        icon: <BrowseGalleryIcon sx={{fontSize: 90, mb: 0, pb: 0}} color="primary"/>,
        title: 'Rapido1',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
  `,
    },
    {
        icon: <SignLanguageIcon sx={{fontSize: 90, mb: 0, pb: 0}} color="primary"/>,
        title: 'Rapido2',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
  `,
    },
    {
        icon: <BrowseGalleryIcon sx={{fontSize: 90, mb: 0, pb: 0}} color="primary"/>,
        title: 'Rapido3',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
  `,
    },
];

const Grid = styled(MuiGrid)(({theme}) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
        margin: theme.spacing(0, 2),
    },
}));

const StyledRoot = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.neutral,
    padding: theme.spacing(7, 1),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(5, 0),
    },
}));

const StyledCard = styled(Card)(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
    padding: theme.spacing(2, 4),
    [theme.breakpoints.up('md')]: {
        boxShadow: 'none',
    },
}));

function Pagos() {
    return (
        <StyledRoot>
            <HomeCarousel/>
            <Container>
                <Box
                    gap={{xs: 3, lg: 10}}
                    display="grid"
                    alignItems="center"
                    gridTemplateColumns={{
                        xs: 'repeat(1, 1fr)',
                        md: 'repeat(1, 1fr)',
                    }}
                >
                    <Grid container>
                        <Grid item xs>
                            {CARDS01.map((card, index) => (
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
                                            color="primary" variant="h5" sx={{mt: 2, mb: 2}}>
                                            {card.title}
                                        </Typography>


                                        <Typography sx={{color: 'text.secondary'}}>{card.description}</Typography>

                                    </StyledCard>


                                </m.div>
                            ))}

                        </Grid>
                        <Divider orientation="vertical" flexItem>VERTICAL</Divider>
                        <Grid item xs>
                            {CARDS02.map((card, index) => (
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
                                            color="primary" variant="h5" sx={{mt: 2, mb: 2}}>
                                            {card.title}
                                        </Typography>


                                        <Typography sx={{color: 'text.secondary'}}>{card.description}</Typography>

                                    </StyledCard>


                                </m.div>
                            ))}
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </StyledRoot>
    );
}

export default Pagos;
