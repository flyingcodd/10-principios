import React from "react";
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import {m} from 'framer-motion';

import {alpha, styled} from '@mui/material/styles';
import {Box, Card, Container, Typography} from '@mui/material';


import HomeCarousel from "../components/HomeCarousel";


import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';


const CARDS01 = [
    {
        icon: <AutoStoriesIcon sx={{fontSize: 90, mb: 0, pb: 0}} color="primary"/>,
        title: 'Contancia de Matrícula',
        description: `Paga para tu constancia de matrícula. 
  `,
    },
    {
        icon: <LayersRoundedIcon sx={{fontSize: 90, mb: 0, pb: 0}} color="primary"/>,
        title: 'Constancia de Egresado',
        description: `Paga para tu constancia de egresado.
  `,
    },
    {
        icon: <DescriptionRoundedIcon sx={{fontSize: 90, mb: 0, pb: 0}} color="primary"/>,
        title: 'Constancia Historial Académico de Notas',
        description: `Paga para tu constancia de historial academico de notas.
  `,
    },
];
const CARDS02 = [
    {
        icon: <FileCopyRoundedIcon sx={{fontSize: 90, mb: 0, pb: 0}} color="primary"/>,
        title: 'Constancia de Estudios',
        description: `Paga para tu constancia de estudios.
  `,
    },
    {
        icon: <ImportantDevicesIcon sx={{fontSize: 90, mb: 0, pb: 0}} color="primary"/>,
        title: 'Constancia de Notas',
        description: `Paga para tu constancia de notas.
  `,
    },
    {
        icon: <MenuBookRoundedIcon sx={{fontSize: 90, mb: 0, pb: 0}} color="primary"/>,
        title: 'Reinicio de Estudios',
        description: `Paga para tu reinicio de estudio.
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
            <Typography variant="h4" color="primary" styled="center" sx={{mt: 2, mb: 2}}>
              Pagos de tramites mas solicitados
            </Typography>
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
                        <Divider orientation="vertical" flexItem>//</Divider>
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
