import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/cabecalho.css"
import UserMenu from "./UserMenu";

function Cabecacalho(props) {
    const [user, setUser] = useState();

    useEffect(() => {
        const userLogged = JSON.parse(localStorage.getItem("user_logged_in"));
        setUser(userLogged);
    }, [])

    function handleLogoutUser() {
        localStorage.removeItem("user_logged_in")
    }

    return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand text-decoration-none">
                <img src="/images/logo.png" width="50px" className="img-fluid" />
            </Link>
        </div>
        <div className="collapse navbar-collapse text-uppercase">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link text-decoration-none fw-bold" style={{color: "white"}}>playlist</Link>
            </li>
            
            {user ? 
                <UserMenu user={user} onLogoutUser={handleLogoutUser}/>
                :
                <>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link text-decoration-none fw-bold" style={{color: "white"}}>
                            registrar
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link text-white">
                            Login
                        </Link>
                    </li>
                </>
            }
            <li className="nav-item">
                <Link to="/faq" className="nav-link text-decoration-none fw-bold" style={{color: "white"}}>
                    FAQ
                </Link>
            </li>
            </ul>
        </div>
    </nav>
    );
  }
  
  export default Cabecacalho;
