import React from "react";
import NavBar from "../Components/navbar";
import Footer from "../Components/Footer";
import EmailForm from "../Components/MailForm";
import {motion} from "framer-motion";
import './contact.css';
import logo from "../Images/sanda.jpg";
export default function Contact(){
    return(
        <div className="contact-body">
            <section className="contact-header">
                <NavBar/>
            </section>
            <section className="contact-main">
                <h1>say hello</h1>
                <h2>Send your ideas,suggetions to us</h2>
                <EmailForm/>
            </section>
            <section className="contact-footer">
               <div className="footer-img-container">
               <img src={logo}/>
                <div className="address">
                <h2>49, Detagamuwa, Kataragama 91400</h2>
                <h2>Sandaasapuwa@gmail.com</h2>
                <h2>+9476-246-3196</h2>
                </div>


               </div>
             
            </section>
        </div>
    );
}
