import React from "react";
import {Box, Container, Divider, Grid, IconButton, Link, Stack, Typography} from "@mui/material";
import Logo from "./Logo";
import {Link as RouterLink} from 'react-router-dom';
import * as PropTypes from "prop-types";

const LINKS = [
    {
        headline: 'Enlaces de interes',
        children: [
            {name: 'unamba.edu.pe', href: "#"},
            {name: 'minedu.gob.pe', href: "#"},
            {name: 'sunedu.gob.pe', href: "#"},
        ],
    },
    {
        headline: 'Contactenos',
        children: [
            {name: '987654321', href: '#'},
            {name: 'Av. tamburco nª123 Abancay, Apurímac', href: '#'},
        ],
    },
];

function Iconify(props) {
    return null;
}

Iconify.propTypes = {icon: PropTypes.string};

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                position: 'relative',
                bgcolor: 'background.default',
            }}
        >
            <Divider/>
            <Container>
                <Grid
                    container
                    justifyContent={{
                        xs: 'center',
                        md: 'space-between',
                    }}
                    sx={{
                        textAlign: {
                            xs: 'center',
                            md: 'left',
                        },
                    }}
                >
                    <Grid item xs={12} sx={{m: 3}}>
                        <Logo sx={{ color: "primary"}}/>
                    </Grid>

                    <Grid item xs={8} md={3}>
                        <Typography variant="body2" sx={{pr: {md: 5}}}>
                            Es un servicio gratuito bindado por la Universidad Nacional Micaela Bastidas de Apurimac,
                            con el fin de agilizar los procesos de pago.
                        </Typography>

                        <Stack
                            spacing={1}
                            direction="row"
                            justifyContent={{xs: 'center', md: 'flex-start'}}
                            sx={{
                                mt: 5,
                                mb: {xs: 5, md: 0},
                            }}
                        >
                            <IconButton key="Facebook" href="#" target="_blank" rel="noopener">
                                <Iconify icon="eva:facebook-fill"/>
                            </IconButton>
                            <IconButton key="Twitter" href="#" target="_blank" rel="noopener">
                                <Iconify icon="eva:twitter-fill"/>
                            </IconButton>

                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <Stack spacing={5} justifyContent="space-between" direction={{xs: 'column', md: 'row'}}>
                            {LINKS.map((list) => (
                                <Stack key={list.headline} spacing={2} alignItems={{xs: 'center', md: 'flex-start'}}>
                                    <Typography component="div" variant="overline">
                                        {list.headline}
                                    </Typography>

                                    {list.children.map((link) => (
                                        <Link key={link.name} to={link.href} component={RouterLink} color="inherit"
                                              variant="body2">
                                            {link.name}
                                        </Link>
                                    ))}
                                </Stack>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>

                <Typography
                    variant="caption"
                    component="div"
                    sx={{
                        mt: 10,
                        pb: 5,
                        textAlign: {xs: 'center', md: 'left'},
                    }}
                >
                    © 2022. Todos los derechos reservados
                </Typography>
            </Container>
        </Box>
    )
        ;
}

export default Footer;