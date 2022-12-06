import React from "react";
import {Link as RouterLink} from 'react-router-dom';
// @mui
import {AppBar, Autocomplete, Box, Container, InputAdornment, InputBase, Link, Stack, Toolbar, Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Logo from "./Logo";

const Tramites = [
    {label: 'Constancia de nota', year: 1994},
    {label: 'Historial Academico', year: 1972},
    {label: 'Constancia de Estudios', year: 1974},
    {label: 'Constancia de Egresado', year: 2008},
    {label: 'Constancia Historial Académico', year: 1957},
    {label: "Reinicio de Estudios", year: 1993},
    {label: 'Pulp Fiction', year: 1994},
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
];

const navConfig = [
    {
        key: 1,
        title: 'Inicio',
        path: '/#/contactenos',
    },
    {
        key: 2,
        title: 'Pagar',
        path: '/checkout',
    },
    {
        key: 3,
        title: 'Tramites',
        path: '/pagos',
    },
    {
        key: 4,
        title: 'Lista de pagados ',
        path: '/table',
    },
    {
        key: 4,
        title: 'Preguntas frecuentes ',
        path: '/preguntas',
    },
    ,
    {
        key: 6,
        title: '¿Como se usa? ',
        path: '/guia',
    },

];

function Navbar() {
    return (
        <>
            <AppBar>
                <Container>
                    <Toolbar disableGutters>
                        <Logo sx={{color: 'primary.lighter'}}/>
                        <Box sx={{flexGrow: 1}}/>
                        <Autocomplete
                            disablePortal
                            freeSolo
                            id="combo-box-demo"
                            options={Tramites}
                            sx={{width: 300, bgcolor: 'background.paper', borderRadius: '36px', pl: '10px'}}
                            renderInput={(params) => (
                                <div ref={params.InputProps.ref}>
                                    <InputBase
                                        inputProps={params.inputProps}
                                        type="text"
                                        placeholder="Que tramite pagaras?"
                                        sx={{border: 0}}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <SearchIcon/>
                                            </InputAdornment>
                                        }
                                        endAdornment={
                                            <InputAdornment position="start">
                                                /
                                            </InputAdornment>
                                        }
                                    />
                                </div>
                            )}
                        />
                        <Button color="primary" variant="contained" endIcon={<AccountCircleIcon/>} size="large" href="/checkout">
                        Login
                        </Button>
                    </Toolbar>

                </Container>
                <Toolbar disableGutters sx={{bgcolor: "secondary.main"}}>
                    <Container>
                        <Stack component="nav" direction="row" spacing={5} sx={{color: "primary.light", mr: 5}}>
                            {navConfig.map((link) =>
                                <Link key={link.key} underline="none" to={link.path} component={RouterLink}
                                      className="link"
                                      color="secondary.contrastText"><h4>{link.title}</h4></Link>
                            )}
                        </Stack>
                    </Container>
                    
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;