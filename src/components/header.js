import React from "react"
import './components.css'
import img4 from './image.jpeg'

export default function Header(){
    return(
        <>
          
            <header className="pageheader bg-dark">
              <div className="row">

              
              <div className="col-8">
              <p className="text-white">
                <div className="heading1">Hello, I'm</div>
                <div className="heading12">Bhavika Aggarwal</div>
                <div className="heading2">Web Developer | Competitive Programmer | Machine Learning Enthusiast</div>
              </p>
              </div>
              <div className="col-1"></div>
              <div className="col-2">
                <img src={img4} className="img4">
                </img>
              </div>
              </div>
            </header>
            
            
          
        
        </>
    )
  
}