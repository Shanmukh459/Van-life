import React from "react"
import { Link, NavLink } from "react-router-dom"
import imageUrl from "/assets/images/login.png"

export default function Header() {

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }
    
    return (
        <header>
            <Link className="home-btn" to="/">#VanLife</Link>
            <nav> 
                <NavLink 
                    to="/host"
                    className={({isActive}) => isActive ? "active-link" : null}
                >Host</NavLink>
                <NavLink 
                    to="/about"
                    className={({isActive}) => isActive ? "active-link" : null}
                >About</NavLink>
                <NavLink 
                    to="/vans"
                    className={({isActive}) => isActive ? "active-link" : null}
                >Vans</NavLink>
                <Link to="login" className="login-link">
                    <img  className="login-icon" src={imageUrl} />
                </Link>
                <button onClick={fakeLogOut}>X</button>
            </nav>
        </header>
    )
}