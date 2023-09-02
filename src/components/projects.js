import React from "react"
import portfolio from './assets/portfolio.png'
import crm from './assets/crm.png'
import joketellingbot from './assets/joketellingbot.png'
import temperatureconverter from './assets/temperatureconverter.png'
import ecommerceweb3 from './assets/ecommerceweb3.png'
import appointmentmanagement from './assets/appointmentmanagement.png'
import linksphere from "./assets/linksphere.png"

export default function Projects(){
    return(
        <>

        <div className="container-fluid bg-dark p-2 pb-4 my-5">
            <div className="fs-2 fw-bold text-center m-2 text-white">My Projects</div>
            <div className="container">
            <div className="row py-4 px-2">

            <div className="col-lg-4 col-md-6 p-2">
                <div className="card_color p-2 rounded-4">
                <div className="card m-4 project_card">
                        <img src={linksphere} className="card-img-top" alt=""></img>
                        <div class="card-body">
                            <h5 className="card-title">LinkSphere</h5>
                                <p className="card-text">A social media web application which allows users to create post, like post, add comments and chat with another users.
                                    <div className="fw-bold">Tech Stack :- Next.js, Firebase, Hardhat, Tailwind CSS, MongoDB</div>

                                </p>
                            <div className="d-flex justify-content-between">
                            <div><a href="https://link-sphere.vercel.app/" target="_blank" className="btn btn-dark text-white">Live</a></div>
                            <div><a href="https://github.com/Bhavika-14/LinkSphere" target="_blank" className="btn btn-dark text-white">Code</a></div>
                            </div> 
                            </div>
                            </div>
                        
                    </div>
                    

                </div>

                <div className="col-lg-4 col-md-6 p-2">
                <div className="card_color p-2 rounded-4">
                <div className="card m-4 project_card">
                        <img src={ecommerceweb3} className="card-img-top" alt=""></img>
                        <div class="card-body">
                            <h5 className="card-title">Web3 E-Commerce Website</h5>
                                <p className="card-text">Developed a Web3 E-Commerce website on which products purchased using ethers. It allows sellers to list their products easily.
                                    <div className="fw-bold">Tech Stack :- React, Solidity, Hardhat, Ethers.js, Bootstrap</div>

                                </p>
                                
                            <a href="https://github.com/Bhavika-14/ecommerce_web3" className="btn btn-dark text-white">Code</a>
                            </div>
                            </div>
                        
                    </div>
                    

                </div>

                <div className="col-lg-4 col-md-6 p-2">
                <div className="card_color p-2 rounded-4">
                <div className="card m-4 project_card">
                        <img src={appointmentmanagement} className="card-img-top" alt=""></img>
                        <div class="card-body">
                            <h5 className="card-title">Appointment Management</h5>
                                <p className="card-text">Developed a Full Stack Website which allows to create a new appointment, reschedule or cancel an existing one.
                                    <div className="fw-bold">Tech Stack :- MongoDB, React, Express, Bootstrap</div>

                                </p>
                                
                            <a href="https://github.com/Bhavika-14/appointment_management_website" target="_blank" className="btn btn-dark text-white">Code</a>
                            </div>
                            </div>
                        
                    </div>
                    

                </div>
                <div className="col-lg-4 col-md-6 p-2 mt-4">
                <div className="card_color p-2 rounded-4">
                <div className="card m-4 project_card">
                        <img src={crm} className="card-img-top" alt=""></img>
                        <div class="card-body">
                            <h5 className="card-title">CRM</h5>
                            <p className="card-text">It is a web app which is used to store information of customers. It performs all CRUD operations.
                            
                            <div className="fw-bold">
                            Technologies:- MongoDB, React, Express, Bootstrap</div>
                            </p>
                            <a href="https://github.com/Bhavika-14/crm" target="_blank" className="btn btn-dark text-white">Code</a>
                            </div>

                        
                    </div>

                    </div>

                </div>

                <div className="col-lg-4 col-md-6 p-2 mt-4">
                <div className="card_color p-2 rounded-4">
                <div className="card m-4 project_card">
                        <img src={portfolio} className="card-img-top" alt=""></img>
                        <div class="card-body">
                            <h5 className="card-title">Portfolio Website</h5>
                                <p className="card-text">Here, is my portfolio website. It is a frontend project. It showcases my projects, skills and contact information.
                               <div className="fw-bold">Technologies:- HTML, CSS, Javascript, Bootstrap, React</div> 
                               </p>
                            <a href="https://github.com/Bhavika-14/Portfolio1" target="_blank" className="btn btn-dark text-white">Code</a>
                            </div>

                        
                    </div>

                    </div>

                </div>

                <div className="col-lg-4 col-md-6 p-2 mt-4">
                <div className="card_color p-2 rounded-4">
                <div className="card m-4 project_card">
                        <img src={joketellingbot} className="card-img-top"alt=""></img>
                        <div class="card-body">
                            <h5 className="card-title">Joke Telling Bot</h5>
                                <p className="card-text">This is a Frontend Project which tells jokes on click of a button. </p>
                            
                                    <div className="fw-bold">Technologies:- HTML, CSS, Javascript, Bootstrap, React</div>
                                    <br />
                                
                            <a href="https://github.com/Bhavika-14/Joke_Telling_Bot" target="_blank" className="btn btn-dark text-white">Code</a>
                            </div>

                        
                    </div>

                    </div>

                </div>
                
                

                    

            
                
                
                
            </div>
        </div>
        </div>
        </>
    )
}