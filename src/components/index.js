import React from "react"
import react from './assets/icons8-react-100.png'
import python from './assets/icons8-python-48.png'
import nodejs from './assets/icons8-nodejs-48.png'
import mongodb from './assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-24.png'
import javascript from './assets/icons8-javascript-48.png'
import html from './assets/icons8-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-24.png'
import css from './assets/icons8-css3-48.png'
import ethers from './assets/ethers.png'
import hardhat from './assets/hardhat.png'
import express from './assets/icons8-express-js-50.png'
import git from './assets/icons8-git-48.png'
import solidity from './assets/icons8-solidity-48.png'
import bootstrap from './assets/icons8-bootstrap-48.png'
import linkedin from './assets/linkedin.png'


import truffle from './assets/truffle.png'


import next from './assets/next.png'
import rust from './assets/rust.png'
import github from './assets/icons8-github-48 (1).png'

import gmail from './assets/gmail.png'
import resume from './assets/resume.pdf'
import Projects from './projects.js'
import Contact from './contact.js'
import ethereum from './assets/ethereum.png'
import mongoose from './assets/mongoose.png'

export default function Home(){
    return(
        <>
        
        <div className="p-4">
        <h1 className="text-center"><span className="fw-bold">About</span>
        <span className="textcolor fw-bold"> Me</span>
        </h1>
        </div>
        <div className="container col-lg-6 col-sm-10">
            <p className="text-center fs-4">
                Hello, I am Bhavika Aggarwal. I am a third year student pursuing Computer Science Engineering.
                I am into Blockchain and Full Stack Web Development. I like Competitive Programming too. I am a tech enthusiast. I love to learn new skills.

            </p>
            <div className="text-center p-4">
                <a href="https://www.linkedin.com/in/bhavika-aggarwal-963aaa221"><img className="m-1" src={linkedin} /></a>
                <a href="https://github.com/Bhavika-14"><img className="m-1" src={github} /></a>
                <a href="mailto:bhavikaagarwal2002@gmail.com"><img className="m-1" src={gmail} /></a>
            </div>
            <div className="text-center p-4 pb-5">
                <a href="https://drive.google.com/file/d/1ubygmRTbYER6fVkggsnwGbK06rwq-1VG/view?usp=sharing" target="_blank">
                <button className="btn btn-warning btn-lg"><div className="px-2 fs-4">My Resume</div>

                </button>
                </a>
            </div>
        </div>
    
       
        <div className="container-fluid background">
            <div className="text-center text-white p-4 fw-bold"><h1>My Skills</h1></div>
            <div className="container pb-5">
                <div className="row p-4 pb-5">
                    
                    <div className="col-lg-2 col-md-3 col-sm-6 skill-col p-2"><div className="bg-dark text-white rounded-4 text-center p-2"><div><img src={solidity} className="m-2 center bg-light rounded-5"/></div>Solidity</div></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 skill-col p-2"><div className="bg-dark text-white rounded-4 text-center p-2"><div><img src={react} className="m-2 center"/></div>React</div></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 skill-col p-2"><div className="bg-dark text-white rounded-4 text-center p-2"><div><img src={javascript} className="m-2 center"/></div>Javascript</div></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 skill-col p-2"><div className="bg-dark text-white rounded-4 text-center p-2"><div><img src={ethers} className="m-2 center rounded-2"/></div>Ethers.js</div></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 skill-col p-2"><div className="bg-dark text-white rounded-4 text-center p-2"><div><img src={mongodb} className="m-2 center bg-light rounded-5"/></div>MongoDB</div></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 skill-col p-2"><div className="bg-dark text-white rounded-4 text-center p-2"><div><img src={html} className="m-2 center"/></div>HTML</div></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 skill-col p-2"><div className="bg-dark text-white rounded-4 text-center p-2"><div><img src={css} className="m-2 center"/></div>CSS</div></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 skill-col p-2"><div className="bg-dark text-white rounded-4 text-center p-2"><div><img src={nodejs} className="m-2 center bg-light rounded-5"/></div>NodeJS</div></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 skill-col p-2"><div className="bg-dark text-white rounded-4 text-center p-2"><div><img src={express} className="m-2 center"/></div>Express</div></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 skill-col p-2"><div className="bg-dark text-white rounded-4 text-center p-2"><div><img src={bootstrap} className="m-2 center"/></div>Bootstrap</div></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 skill-col p-2"><div className="bg-dark text-white rounded-4 text-center p-2"><div><img src={hardhat} className="m-2 center"/></div>Hardhat</div></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 skill-col p-2"><div className="bg-dark text-white rounded-4 text-center p-2"><div><img src={python} className="m-2 center"/></div>Python</div></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 skill-col p-2"><div className="bg-dark text-white rounded-4 text-center p-2"><div><img src={git} className="m-2 center"/></div>Git</div></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 skill-col p-2"><div className="bg-dark text-white rounded-4 text-center p-2"><div><img src={ethereum} className="m-2 center rounded-5"/></div>Ethereum</div></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 skill-col p-2"><div className="bg-dark text-white rounded-4 text-center p-2"><div><img src={mongoose} className="m-2 center rounded-2"/></div>Mongoose</div></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 skill-col p-2"><div className="bg-dark text-white rounded-4 text-center p-2"><div><img src={truffle} className="m-2 center rounded-5"/></div>Truffle</div></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 skill-col p-2"><div className="bg-dark text-white rounded-4 text-center p-2"><div><img src={next} className="m-2 center rounded-5"/></div>Next.js</div></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 skill-col p-2"><div className="bg-dark text-white rounded-4 text-center p-2"><div><img src={rust} className="m-2 center rounded-5"/></div>Rust</div></div>
                </div>

            </div>

        </div>
        <Projects />
        <Contact />
        
        
        </>
    
    )
}