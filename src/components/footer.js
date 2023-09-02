import React from "react"
import './components.css'
import linkedin from './assets/linkedin.png'
import github from './assets/icons8-github-48 (1).png'
import mail from './assets/gmail.png'


export default function Footer(){

    return(
        <footer className="position-bottom bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-4 mt-4 ps-4">
                        
                        <p className="text-white pt-4">
                            
                            Thankyou, for visiting my portfolio website.
                        </p>
                        
                    </div>
                    <div className="col-8 text-end mt-4 pe-4">
                        <a href="https://www.linkedin.com/in/bhavika-aggarwal-963aaa221" target="_blank"><img className="bg-light rounded-5 m-2" src={linkedin} /></a>
                        <a href="https://github.com/Bhavika-14" target="_blank"><img className="bg-light rounded-5 m-2" src={github} /></a>
                        <a href="mailto:bhavikaagarwal2002@gmail.com" target="_blank"><img className="bg-light rounded-5 m-2" src={mail} /></a>
                        
                        
                    </div>
                </div>
                <div className="row text-white text-center pb-4">
                    <div className="col-4"></div>
                    <div className="col-4">
                    Designed with ❤️ by Bhavika Aggarwal
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
       </footer>
    )
}
                     