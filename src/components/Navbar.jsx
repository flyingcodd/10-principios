import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      Navbar
          <Link to="/" className="link"><h6>Inicio</h6></Link>
          <Link to="/Pagos" className="link"><h6>Pagos</h6></Link>
          <Link to="/Perfil" className="link"><h6>Perfil</h6></Link>
          <Link to="/Preguntas" className="link"><h6>Pregunta</h6></Link>
          <Link to="/Checkout" className="link"><h6>Checkout</h6></Link>
    </div>
  );
}

export default Navbar;