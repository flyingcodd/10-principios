import './App.css';
import ThemeProvider from './theme';

import {createBrowserRouter, Outlet, RouterProvider,} from "react-router-dom";
import Home from "./pages/Home";
import Checkout from './pages/Checkout';
import Pagos from './pages/Pagos';
import Perfil from './pages/Perfil';
import Preguntas from './pages/Preguntas';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Box} from "@mui/material";

const Layaut = () => {
    return (
        <ThemeProvider>
            <Box sx={{display: 'flex', flexDirection: 'column', height: 1}}>
                <Navbar/>
                <Box component="main" sx={{flexGrow: 1, pt: 11}}>
                    <Outlet/>
                </Box>
                <Footer/>
            </Box>
        </ThemeProvider>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layaut/>,
        children: [
            {path: "/", element: <Home/>},
            //{ path: "/post/:id", element: <Checkout /> },
            {path: "/checkout", element: <Checkout/>},
            {path: "/pagos", element: <Pagos/>},
            {path: "/perfil", element: <Perfil/>},
            {path: "/preguntas", element: <Preguntas/>},
        ],
    },
    {
        path: "/Pergunta",
        element: <h1>Hola </h1>,
    },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}>
            </RouterProvider>
        </div>
    );
}

export default App;