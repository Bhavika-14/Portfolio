import React from "react"
import './components.css'
import img1 from './linkedin.png'
import img2 from './github.png'
import img3 from './mail.png'


export default function Footer(){

    return(
        <footer className="position-bottom bg-dark footer">
            <div className="container">
                <div className="row">
                    <div className="col-6 mt-1">
                        <div className="col-4">
                        <p className="text-white">
                            
                            Thankyou, for visiting my portfolio website.
                        </p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6"></div>
                        <div className="col-2">
                          <a href="https://www.linkedin.com/in/bhavika-aggarwal-963aaa221">
                            <img className="img1" src={img1}></img>
                          </a>
                        </div>
                          
                        <div className="col-2">
                        <a href="https://github.com/Bhavika-14">
                            <img className="img2" src={img2}></img>
                          </a>

                        </div> 
                        <div className="col-1">
                        <a href="mailto:bhavikaagarwal2002@gmail.com">
                            <img className="img2" src={img3}></img>
                          </a>

                        </div> 
                        </div> 
                    </div>
                </div>
                <div className="row text-white text-center">
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
                     