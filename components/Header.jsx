import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link className="home-btn" to="/">#VanLife</Link>
            <nav>
                <NavLink 
                    to="/vans"
                    className={({isActive}) => isActive && "active-link"}
                >Vans</NavLink>
                <NavLink 
                    to="/about"
                    className={({isActive}) => isActive && "active-link"}
                >About</NavLink>
                <NavLink 
                    to="/host"
                    className={({isActive}) => isActive && "active-link"}
                >Host</NavLink>
            </nav>
        </header>
    )
}