import React from "react";
import { Link } from "react-router-dom";
import './navStyle.css';

import logo from '../Images/download.jpeg';
import { Waypoint } from "react-waypoint";
import fb from "../Images/icons/social.png";
import yt from "../Images/icons/youtube.png";
import se from "../Images/icons/search.png";
import blg from "../Images/icons/blogger.png";
import { useState } from 'react';
import Hamburger from 'hamburger-react';


export default function NavBar(){
   
    const [isWaypointInView, setIsWaypointInView] = useState(true);
    const [isOpen, setOpen] = useState(false);
    const[isClicked,setIsClicked]=useState(false);
    
    const handleEnter = () => {
        setIsWaypointInView(false);
    };
    
    const handleLeave = () => {
        setIsWaypointInView(true);
    };

    const customToggle=()=>{
        setOpen(!isOpen);
        if(!isOpen){
            setIsClicked(true);
        }
        else{
            setIsClicked(false);
        }
    
    }
    return(
         <div>
        <div className="nav-container" >
               
               <img src={logo} alt="" className={isWaypointInView ? "showImage" : "hideImage"} />
         
         
       
               <div className={isWaypointInView ? "nav-icon showIcon" : "nav-icon hide"}>
                <Hamburger toggled={isOpen}  toggle={customToggle} color={isOpen ? "red" : "dodgerblue"}size={200} />
              </div>

        
        </div> 
        <div className={isClicked ? "nav-panel-container " : "nav-panel-container hide-nav-panel"}>
  
        <div className={isClicked ? "nav-panel-list showList" : "nav-panel-list"}>
               
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Book'>Book now</Link></li>
                    <li><Link to='/Services'>Services</Link></li>
                    <li><Link to='/Contact'>Contact us</Link></li>
                </ul>
            </div>
            <div className={isClicked ? "nav-panel-cover showPanel" : "nav-panel-cover"}></div>
           
        </div>
       
         <Waypoint onEnter={handleEnter} onLeave={handleLeave}>
                        <section className="nav-logo-container">
                        <div className="logo">
                            <img src={logo} alt="this is a image"/>
                         </div>
                        <div className="navigation">
                            <div className="links">
                              <a href="https://m.facebook.com"> <img src={fb} alt="this is a image"/></a>
                              <a href="https://m.youtube.com"> <img src={yt} alt="this is a image"/></a>
                              <a href="https://sand.blogspot.com"> <img src={blg} alt="this is a image"/></a>
                            </div>
                            
                            <div className="nav-links">
                               <nav>
                                    <ul>
                                        <li><Link to='/' className="custom-link">Home</Link></li>
                                        <li><Link to='/Book' className="custom-link">Book now</Link></li>
                                        <li><Link to='/Services' className="custom-link">Services</Link></li>
                                        <li><Link to='/Contact' className="custom-link" >Contact us</Link></li>
                                    </ul>
                               </nav>
                               
                            </div>
                           
                           
                            
                           <button className="btnDawnload " 
                               
                            >dawnload app</button>

                        </div>
                        </section>
                   </Waypoint> 
                  
                        
                   
        </div>
       
    )
}