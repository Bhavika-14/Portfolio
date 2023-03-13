import React from "react"
import './components.css'
import img4 from './image.jpeg'
import profile from './assets/profile-pic (27)(1).png'

export default function Header(){
    return(
        <>
          
            <header className="bg-dark">
              <div className="row">

              
              <div className="col-8">
          
                <div className="text-white fs-2 ps-4 pt-5">Hello, I'm</div>
                <div className="text-white fs-2 ps-4">Bhavika Aggarwal</div>
                <div className="text-white fs-md-4 ps-4">Blockchain Developer | Full Stack Web Developer | Machine Learning Enthusiast</div>
              
              </div>
              <div className="col-md-4 text-center"><img src={profile} className="p-4 img-fluid text-center" /></div>
              
              </div>
            </header>
            
            
          
        
        </>
    )
  
}