import React from "react"
import react from './react.png'
import python from './python.jpg'
import nodejs from './nodejs.png'
import mongodb from './mongodb.png'
import javascript from './javascript.png'
import html from './html.png'
import css from './css.png'

import express from './express.png'

export default function Home(){
    return(
        <>
        
        <h1 className="text-center"><span className="fw-bold">About</span>
        <span className="textcolor fw-bold"> Me</span>
        </h1>
        <div className="container col-6  txt">
            <p className="text-center fs-4">
                Hello, I am Bhavika Aggarwal. I am a second year student pursuing Computer Science Engineering.
                I am into Full Stack Development. I like Competitive Programming too. I am a Machine Learning Enthusiast.
                I love to learn new skills.

            </p>
        </div>
        <h1 className="text-center mt-4"><span className="fw-bold">My</span>
        <span className="textcolor fw-bold"> Skills</span>
        </h1>
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <img src={react} className="imagelogo"></img>

                </div>
                <div className="col-3">
                <img src={express} className="imagelogo"></img>
                </div>
                <div className="col-3">
                <img src={mongodb} className="imagelogo"></img>
                </div>
                <div className="col-3">
                <img src={python} className="imagelogo"></img>
                </div>
            </div>
            <div className="row mt-4 mb-4">
                <div className="col-3">
                <img src={nodejs} className="imagelogo"></img>
                </div>
                <div className="col-3">
                <img src={javascript} className="imagelogo"></img>
                </div>
                <div className="col-3">
                <img src={html} className="imagelogo"></img>
                </div>
                <div className="col-3">
                <img src={css} className="imagelogo"></img>
                </div>
            </div>
        </div>
        
        </>
    
    )
}