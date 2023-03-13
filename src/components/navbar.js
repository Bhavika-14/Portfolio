import React from "react"
import './components.css'
import {NavLink as Link}from "react-router-dom"

export default function Navbar(){
    return(
        <>
        <nav class="nav navbar-expand-lg navbar-dark navbar" data-bs-theme="light">
            <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item px-2">
                            <Link className="nav-link text-white fs-4" to="/">Home</Link>
                        </li>
                       <li class="nav-item px-2">
                            <Link className="nav-link text-white fs-4" to="/projects">Projects</Link>
                        </li>
                        <li class="nav-item px-2">
                            <Link className="nav-link text-white fs-4" to="/contact">Contact</Link>
                        </li>
        
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}