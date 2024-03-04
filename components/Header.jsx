import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link className="home-btn" to="/">#VanLife</Link>
            <Link className="vans-btn" to="/vans">Vans</Link>
            <Link className="about-btn" to="/about">About</Link>
        </header>
    )
}