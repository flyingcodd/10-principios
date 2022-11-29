import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Checkout from './pages/Checkout';
import Pagos from './pages/Pagos';
import Perfil from './pages/Perfil';
import Preguntas from './pages/Preguntas';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layaut = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layaut />,
    children: [
      { path: "/", element: <Home /> },
      //{ path: "/post/:id", element: <Checkout /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/pagos", element: <Pagos /> },
      { path: "/perfil", element: <Perfil /> },
      { path: "/preguntas", element: <Preguntas /> },
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