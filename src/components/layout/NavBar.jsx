import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useToken } from '../contexts/session.context';

const Navbar = () => {
    const token = useToken()
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    tienda
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {
                            token
                                ? <li className="nav-item">
                                    <Link to="/" className="nav-link" aria-current="page">
                                        Home
                                    </Link>
                                    <Link to="/logout" className="nav-link" >
                                        Salir
                                    </Link>
                                </li>
                                : <>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link">
                                            Iniciar Sesión
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/registro" className="nav-link">
                                            Registro
                                        </Link>
                                    </li></>
                        }


                        {/* Commented items
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Contact
              </Link>
            </li>
            */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;