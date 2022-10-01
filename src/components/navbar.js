import React from "react"
import './components.css'
import {NavLink as Link}from "react-router-dom"

export default function Navbar(){
    return(
        <>
        <nav class="nav navbar-expand-lg navbar">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item navoption1">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                       <li class="nav-item navoption2">
                            <Link className="nav-link text-white" to="/projects">Projects</Link>
                        </li>
                        <li class="nav-item navoption2">
                            <Link className="nav-link text-white" to="/contact">Contact</Link>
                        </li>
        
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}