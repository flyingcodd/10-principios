import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Box, Button, Container, Grid, Typography} from '@mui/material'
import {styled} from '@mui/material/styles';
import heroImage from '../assets/home-hero.jpg'; // Import using relative path
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import {Image} from "@mui/icons-material";

function HomeCarousel(props) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
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

const StyledRoot = styled('div')(({theme}) => ({
    height: "35vh",
    backgroundSize: "cover",
    backgroundPosition: "65% 50%",
    backgroundAttachment: "fixed",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
    padding: theme.spacing(20, 0),
    // [theme.breakpoints.up('md')]: {
    //     paddingTop: theme.spacing(25),
    //     paddingBottom: theme.spacing(15),
    // },
}));

const StyledDescription = styled('div')(({theme}) => ({
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
        textAlign: 'left',
        paddingLeft: theme.spacing(5),
    },
}));

function Item(props) {
    return (
        // <Paper>
        <StyledRoot>
            <Container>
                <Grid direction={{xs: 'column', md: 'row-reverse'}} container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <Content/>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Description/>
                    </Grid>
                </Grid>
            </Container>
            {/*<Description/>*/}
            {/*<h2>{props.item.name}</h2>*/}
            {/*<p>{props.item.description}</p>*/}

            {/*<Button className="CheckButton">*/}
            {/*    Check it out!*/}
            {/*</Button>*/}
        </StyledRoot>
        // </Paper>
    )
}


function Description() {
    return (
        <StyledDescription>
            <Typography variant="h1" sx={{
                my: 3, textAlign: 'left',
                color: 'primary.lighter'
            }}>
                No importa si es de día o de noche
            </Typography>

            <Typography
                variant="h4"
                sx={{
                    mb: 5,
                    color: 'primary.lighter',
                    textAlign: 'left',
                }}
            >
                Con UNAMBA Pagos, dile adiós a las colas y realiza pagos sin complicaciones
                <br/>
            </Typography>

            <Button color="primary" variant="contained" endIcon={<RequestQuoteIcon/>} size="large">
                Iniciar un Pago!
            </Button>
        </StyledDescription>
    );
}

// ----------------------------------------------------------------------

function Content() {
    return (
        <Box component="img" sx={{height: "250px", width: "auto"}} src="/assets/images/clock.png">
        </Box>
    );
}

export default HomeCarousel;