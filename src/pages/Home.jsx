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

function Home() {
    return (
        <StyledRoot>
            <HomeCarousel/>
            <Container>
                <h1>Home</h1>
                <Box sx={{width: '100%', maxWidth: 500}}>
                    <Typography variant="h1" gutterBottom>
                        h1. Heading
                    </Typography>
                    <Typography variant="h2" gutterBottom>
                        h2. Heading
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                        h3. Heading
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        h4. Heading
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        h5. Heading
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        h6. Heading
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                        quasi quidem quibusdam.
                    </Typography>
                    <Typography variant="button" display="block" gutterBottom>
                        button text
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        caption text
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        overline text
                    </Typography>
                </Box>
            </Container>
        </StyledRoot>
    );
}

export default Home;