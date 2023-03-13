import React from "react"
import './components.css'

export default function Contact(){
    return(
        <>
        <h1 className="text-center"><span className="fw-bold">Get In</span>
        <span className="textcolor fw-bold"> Touch</span>
        </h1>

        <div className="container mt-6 col-6 mb-4">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="E-mail" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Message"></textarea>
            </div>
            <div className="col-8">
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>

        </div>
        </>
    )
}