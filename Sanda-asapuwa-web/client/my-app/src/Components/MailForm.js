import React from "react";
import "./form.css";
export default function MailForm(){
    return(
        <div className="mail-container">
            <form className="mailForm">
             <div>
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Subject" />
                <input type="email" placeholder="Your email" />
             </div>
             <div>
                <textarea placeholder="Your message"></textarea>
             </div>
            
            </form>
            <button className="btnSend">Send</button>
        </div>
    )
}