import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Box, Button, Container, Grid, Paper, Typography} from '@mui/material'
import {styled} from '@mui/material/styles';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import heroImage from '../assets/io.jfif'; // Import using relative path

function HomeCarousel(props) {
    var items = [
        {
            title: "No importa si es de día o de noche",
            description: "Con UNAMBA Pagos, dile adiós a las colas y realiza pagos sin complicaciones"
        },
        {
            title: "Desde tu PC o smartphone",
            description: "Usa UNAMABA-Pagos donde quieras, cuando quieras"
        },
        {
            title: "Mas facil , mas rapido, olvida la cola",
            description: "Un diseño renovado, para agilizar tus pagos"
        }
    ]

    return (
        <Carousel
            height="700px"
            navButtonsAlwaysVisible={true}
            fullHeightHover={true}
            NextIcon={<ChevronRightIcon/>}
            PrevIcon={<KeyboardArrowLeftIcon/>}
            navButtonsWrapperProps={{
                style: {
                    bottom: '0',
                    top: 'unset'
                }
            }}
        >
            {
                items.map((item, i) => <Item key={i} item={item}/>)
            }
        </Carousel>
    )
}

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};

const StyledDescription = styled('div')(({theme}) => ({
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
        textAlign: 'left',
        paddingLeft: theme.spacing(5),
    },
}));

function Item({item}) {
    return (
        <Paper sx={{height: "100%", backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "65% 50%"}}>
            <Container>
                <Grid direction={{xs: 'column', md: 'row'}} container spacing={5}>
                    <Grid item xs={12} md={8}>
                        <Text title={item.title} description={item.description}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}


function Text(props) {
    return (
        <StyledDescription>
            <Typography variant="h1"
                        sx={{
                            my: 17,
                            textAlign: 'left',
                            color: 'primary.lighter'
                        }}>
                {props.title}
            </Typography>

            <Typography
                variant="h4"
                sx={{
                    mb: 5,
                    color: 'primary.lighter',
                    textAlign: 'left',
                }}
            >
                {props.description}
                <br/>
            </Typography>

            <Button color="primary" variant="contained" endIcon={<RequestQuoteIcon/>} size="large">
                Iniciar un Pago!
            </Button>
        </StyledDescription>
    );
}

export default HomeCarousel;