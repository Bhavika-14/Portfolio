import React from "react"
import portfolio from './portfolio.png'
import crm from './crm.png'
import joketellingbot from './joketellingbot.png'
import temperatureconverter from './temperatureconverter.png'

export default function Projects(){
    return(
        <>
        <h1 className="text-center fw-bold">Projects</h1>
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="card">
                        <img src={crm} className="card-img-top" alt=""></img>
                        <div class="card-body">
                            <h5 className="card-title">CRM</h5>
                                <p className="card-text">It is a web app which is used to store information of customers. It performs all CRUD operations.
                            
                                <br></br>
                                Technologies:- MongoDB, React, Express, Bootstrap
                                </p>
                                
                            <a href="https://github.com/Bhavika-14/crm" className="btn btn-primary">Code</a>
                            </div>

                        
                    </div>

                </div>
                <div className="col-2"></div>
                <div className="col-5">
                    <div className="card">
                        <img src={portfolio} className="card-img-top" alt=""></img>
                        <div class="card-body">
                            <h5 className="card-title">Portfolio</h5>
                                <p className="card-text">Here, is my portfolio website.</p>
                                <p className="card-text">Technologies:- HTML, CSS, Javascript, Bootstrap, React</p>
                            <a href="https://github.com/Bhavika-14/Bhavika-14.github.io" className="btn btn-primary">Code</a>
                            </div>

                        
                    </div>

                </div>
                
                        

                

                
            </div>
            <div className="row mt-4 mb-4">
                <div className="col-5">
                    <div className="card">
                        <img src={joketellingbot} className="card-img-top" alt=""></img>
                        <div class="card-body">
                            <h5 className="card-title">Joke Telling Bot</h5>
                                <p className="card-text">This is a Frontend Project. 
                                <br></br>
                                    Technologies:- HTML, CSS, Javascript, Bootstrap, React
                                </p>
                            <a href="https://github.com/Bhavika-14/Joke_Telling_Bot" className="btn btn-primary">Code</a>
                            </div>

                        
                    </div>

                </div>
                <div className="col-2"></div>
                <div className="col-5">
                    <div className="card">
                        <img src={temperatureconverter} className="card-img-top" alt=""></img>
                        <div class="card-body">
                            <h5 className="card-title">Temperature Converter</h5>
                                <p className="card-text">This is a Frontend project. It is used for converting temperature.
                                <br>
                                </br>
                                Technologies:- HTML, CSS, Javascript, Bootstrap, React
                                </p>
                            <a href="https://github.com/Bhavika-14/temperature_converter" className="btn btn-primary">Code</a>
                            </div>

                        
                    </div>

                </div>
                
                        

                

                
            </div>

        </div>
        </>
    )
}