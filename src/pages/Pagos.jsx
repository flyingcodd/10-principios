import React from "react";

//import Card from '@mui/material/Card';

//import CardContent from '@mui/material/CardContent';

//import Typography from '@mui/material/Typography';
//import SignalWifi2BarIcon from '@mui/icons-material/SignalWifi2Bar';

//import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { m } from 'framer-motion';

import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography } from '@mui/material';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';

/*Avance*/

const CARDS = [
  {
      icon: <BrowseGalleryIcon sx={{ fontSize: 90, mb: 0, pb: 0 }} color="primary" />,
      title: 'Rapido1',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
  `,
  },
  {
      icon: <SignLanguageIcon sx={{ fontSize: 90, mb: 0, pb: 0 }} color="primary" />,
      title: 'Rapido2',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
  `,
  },
  {
      icon: <BrowseGalleryIcon sx={{ fontSize: 90, mb: 0, pb: 0 }} color="primary" />,
      title: 'Rapido3',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
  `,
  },
];

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

const StyledRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  padding: theme.spacing(7,1),
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

function Pagos(){

  const content = (
    <StyledRoot>
        <Container>
            <Box
                gap={{ xs: 3, lg: 10 }}
                display="grid"
                alignItems="center"
                gridTemplateColumns={{
                    xs: 'repeat(1, 1fr)',
                    md: 'repeat(1, 1fr)',
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
    </StyledRoot>
  );

  return (
    <Grid container>
      <Grid item xs >
        {content}
        
      </Grid>
      <Divider orientation="vertical" flexItem>VERTICAL</Divider>
      <Grid item xs>
        {content}
      </Grid>
  </Grid>
  ); 
} 
export default Pagos;

/* Falta */
/*function Pagos() {
  const content = (
    <StyledRoot>
      <StyledCard>
        <Card sx={{ maxWidth: 345 }}>
          <SignalWifi2BarIcon sx={{ fontSize: 90, mb: 0, pb: 0 }} color="primary" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
        </Card>
      </StyledCard>
      <StyledCard>
        <Card sx={{ maxWidth: 345 }}>
          <SignalWifi2BarIcon sx={{ fontSize: 90, mb: 0, pb: 0 }} color="primary" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
        </Card>
      </StyledCard>
    </StyledRoot>
  );
  return (

  <Grid container>
    <Grid item xs>
      {content}
    </Grid>
    <Divider orientation="vertical" flexItem>
      VERTICAL
    </Divider>
    <Grid item xs>
      {content}
    </Grid>
  </Grid>

    /*<StyledRoot>
      <StyledCard>
        <Card sx={{ maxWidth: 345 }}>
          <SignalWifi2BarIcon sx={{ fontSize: 90, mb: 0, pb: 0 }} color="primary" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
        </Card>
      </StyledCard>
      <StyledCard>
        <Card sx={{ maxWidth: 345 }}>
          <SignalWifi2BarIcon sx={{ fontSize: 90, mb: 0, pb: 0 }} color="primary" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
        </Card>
      </StyledCard>
    </StyledRoot>
---------------------
  );
}*/

//export default Pagos;


/* Tabla */
/*
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(tramite, fecha, estado, detalle) {
  return { tramite, fecha, estado, detalle };
}

const rows = [
  createData('Historial', 10-11-2022, 'proceso', 'Ver detalle'),
  createData('Notas', 11-11-2022,  'proceso', 'Ver detalle'),
  createData('Matricula', 13-11-2022,  'proceso', 'Ver detalle'),
  createData('Estudios', 14-11-2022, 'proceso', 'Ver detalle'),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Tramite</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Estado</TableCell>
            <TableCell align="right">Detalle</TableCell>
            <TableCell 
            Actions= {[
              {
                icon: 'delete',
                tooltip: 'Eliminar',
                onclick: (event, rowData)=>window.confirm('Has precionado eliminar'+rowData.tramite)
              }
            ]}
            >Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.tramite}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.tramite}
              </TableCell>
              <TableCell align="right">{row.fecha}</TableCell>
              <TableCell align="right">{row.estado}</TableCell>
              <TableCell align="right">{row.detalle}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
*/

