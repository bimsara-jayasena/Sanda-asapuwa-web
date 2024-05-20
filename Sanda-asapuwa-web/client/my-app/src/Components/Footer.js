import React from "react";
import "./ftStyle.css";
import Logo from "../Images/download.jpeg";
export default function Footer(){
    return(
        <footer id="img">
        <div className="footer-container"> </div>
        <div className="f-logo">
          {  <img src={Logo}/>}
        </div>
        <div className="contact">
            <div>Phone:+9476-246-3195</div>
            <div>Address:49, Detagamuwa, Kataragama 91400</div>
            <div>Mail:Sandaasapuwa@gmail.com</div>
        </div>
       
        
       
    </footer>
    
    )
}