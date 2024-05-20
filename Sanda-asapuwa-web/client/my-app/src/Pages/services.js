import React, { useEffect } from "react";
import { useState } from "react";
import { color, motion } from "framer-motion";
import NavBar from "../Components/navbar";
import Footer from "../Components/Footer";
import './service.css'
import landingImg from '../Images/Screenshot (1174).png';
import imgSea from '../Images/Screenshot (1175).png';
import yoga from '../Images/yoga.jpg';
import foods from '../Images/food1.jpg';
import med from '../Images/ayurveda.jpg';
import {Motion} from 'framer-motion';
export default function Page2(){
  
  
  
  
    return ( 
      <div>
         <section className="services-header" >
                 
                 <NavBar/>
                  
                  <div className="services-landing">
                      <h1>What we offer you</h1>

                     
                  </div>
          </section>

          <section className="services-main">
              <section className="intro-container">
                  <div className="intro">
                      <h1>Embark on a Journey of Mind, Body, and Soul at Our Holistic Homestay</h1>
                      <p>Step into a sanctuary of holistic well-being at our homestay, where tranquility and rejuvenation await. Immerse yourself in the art of mindfulness with our expert meditation guides, guiding you on a journey of inner peace and self-discovery. Indulge your senses in a culinary adventure of healthy cultural foods, lovingly prepared to nourish both body and soul. Experience the healing touch of Ayurveda with our dedicated medicine facility, where ancient wisdom meets modern wellness practices. At our homestay, we invite you to embark on a transformative voyage, embracing harmony and vitality in every aspect of your stay.</p>
                    
                  </div>
                 
              </section>

              <section className="sec-services">
                <h1>Our Services</h1>
                <div className="card-container">
                <motion.div className="card card1" initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} exit={{opacity:0,y:100}} transition={{delay:0.5,duration:0.5}}>
                  <div className="card-image"></div>
                  <div className="card-desc">
                    <h2>Ayurveda facilities</h2>
                    <p></p>
                  </div>
                </motion.div>
                <motion.div className="card card2" initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} exit={{opacity:0,y:100}} transition={{delay:1,duration:0.5}}>
                        <div className="card-image"></div>
                        <div className="card-desc">
                          <h2>Meditation Guidance</h2>
                          <p></p>
                        </div>
                </motion.div>
                <motion.div className="card card3" initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} exit={{opacity:0,y:100}} transition={{delay:1.5,duration:0.5}}>
                  <div className="card-image"></div>
                  <div className="card-desc">
                    <h2>Healthy foods</h2>
                    <p></p>
                  </div>
                </motion.div>
               
                </div>
                <button className="btn-services"><h2>There are lot more</h2></button>
              </section>
          </section>

          <section className="services-footer">
            <Footer/>
          </section>

    </div>
    
    
    
    
    
    )
       
    
        
    
}