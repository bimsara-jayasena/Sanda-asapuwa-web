import React , { useState }from "react";
import Logo from "../Images/download.jpeg";
import hotelImg1 from "../Images/buddha.jpg";
import hotelImg2 from "../Images/fog.jpg";
import hotelImg3 from "../Images/food2.jpg";
import hotelImg4 from "../Images/food1.jpg";
import imgRelax1 from "../Images/Sanda asapuwa Budhu madura 4.jpg";
import imgRelax2 from "../Images/Sanda asapuwa Budhu madura.jpg";
import foodImg1 from "../Images/food1.jpg";
import foodImg2 from "../Images/foods2.jpg";
import user from "../Images/caregiver.png";
import './style.css';
import { motion} from "framer-motion";
import ImageCarousel from "../Components/ImageCarousel";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faBlogger,  faLinkedin} from '@fortawesome/free-brands-svg-icons';
import vid from "../Images/ALPS & DOLOMITES (Drone + Timelapse) Heavenly Nature Relaxation™ 5 Minute Short Film in 4K UHD.mp4";
import NavBar from "../Components/navbar";
export default function Home(){
   
    const [isOpen, setOpen] = useState(false);
    const[isClicked,setIsClicked]=useState(false);
    const[isOutsideClicked,setIsOutsideClicked]=useState(false);
    const [isShowing,setIsShowing]=useState(false);
    
    const showIcon=()=>{
      
        setIsShowing(!isShowing);
        console.log(isShowing);
    }   
    const handleOutterClick=()=>{
        setIsOutsideClicked(!isOutsideClicked)
        setIsShowing(!isShowing)
    }

   const parentElement={ visible:{overflow:'visible'} };
   const images = [
    hotelImg1,
    hotelImg2,
    hotelImg3,
    hotelImg4,
      
    ];
    
    const hotelImage = [
        imgRelax1,
        imgRelax2
        ];
    const foodImage = [
           foodImg1,
           foodImg2
        
    ];
    
    return(
       <div >
            <div className="home-body-container">
          
                <main>
               
                <section className="header" >
                 
                   <NavBar/>
                    
                    <div className="landing">
                        <motion.h1 
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            exit={{opacity:0}}
                            transition={{duration:3}}    
                            id="header">Sanda Asapuwa</motion.h1>

                        <motion.button className="btnBook"  
                                initial={{y:-50,opacity:0}}
                                whileInView={{y:-10,opacity:1}}
                                exit={{y:-50,opacity:0}}
                                transition={{ delay:1,duration:1}}   
                        >Book Now</motion.button>
                    </div>
                </section>
                <section className="body"  >
                    <section className="welcome">
                            
                            <section className="paragragh">
                            <motion.h1 id="topic" initial={{opacity:0}} whileInView={{opacity:0.3}} exit={{opacity:0}} transition={{duration:1}}>Welcome</motion.h1>
                             <motion.h2 initial={{opacity:0, paddingTop:200}} whileInView={{opacity:1,paddingTop:72}} exit={{opacity:0,paddingTop:200}} transition={{duration:1}} >Amazing Experience on top of mountain</motion.h2>
                             <motion.div className="section"
                             initial={{opacity:0}} 
                             whileInView={{opacity:1}} 
                             exit={{opacity:0}}
                             transition={{delay:0.5,duration:1}}>
                               
                               <p>
                               Escape to our mountaintop retreat, where serenity meets adventure. Perched high above the world, our cozy homestay offers breathtaking views, rustic charm, and warm hospitality. Experience nature's embrace, unwind in tranquil surroundings, and create unforgettable memories in our peaceful sanctuary. Welcome to your mountain getaway, where every moment is a breath of fresh air.
                               </p>
                                
                             </motion.div>
                            </section>
                            <div className="images" >
                            
                             
                                  <ImageCarousel images={images} slidshow={4} />
                            </div>
                          
                    </section>

                    
                    <section className="room1" >
                          
                               
                                <div className="img-relax">
                                <ImageCarousel images={hotelImage} slidshow={1}/>
                                </div>
                            
                            
                          
                            <div className="txtSection">
                                <motion.h1 id="topic" initial={{opacity:0,marginLeft:100}} whileInView={{opacity:0.3,marginLeft:-100}} exit={{opacity:0,marginLeft:720}} transition={{delay:0.5,duration:1}}>Relax</motion.h1>
                                <motion.h2 id="topic" initial={{opacity:0}} whileInView={{opacity:1}} exit={{opacity:0}} transition={{duration:1}}>Relax your Mind</motion.h2>
                            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} exit={{opacity:0}} transition={{delay:0.5,duration:2}}>
                            Indulge in moments of pure relaxation as you breathe in the crisp mountain air and let go of the stresses of everyday life. Our homestay offers the perfect sanctuary for unwinding and rejuvenating your mind, body, and soul through the practice of meditation. Whether you're finding your center amidst the tranquil beauty of nature, meditating in our peaceful garden, or simply sitting in quiet contemplation on our scenic terrace, you'll discover a profound sense of inner peace and harmony. Let the gentle whispers of the wind and the soothing melodies of birdsong guide you into a state of blissful serenity, where each breath becomes a meditation, and each moment is a gift of tranquility.
                            </motion.p>
                            <ul>
                           


                                <motion.li initial={{opacity:0,marginTop:50}} whileInView={{opacity:1,marginTop:20}} exit={{opacity:0,marginTop:50}} transition={{duration:1}}> Guided meditation sessions led by experienced instructors</motion.li>
                                <motion.li initial={{opacity:0,marginTop:50}} whileInView={{opacity:1,marginTop:20}} exit={{opacity:0,marginTop:50}} transition={{delay:1,duration:1}}>Tranquil nature walks through lush forests and meandering trails</motion.li>
                                <motion.li initial={{opacity:0,marginTop:50}} whileInView={{opacity:1,marginTop:20}} exit={{opacity:0,marginTop:50}} transition={{delay:2,duration:1}}>Sunrise and sunset yoga sessions overlooking breathtaking mountain vistas</motion.li>
                            </ul>
                            </div>
                           
                    </section>
                    <section className="room2">
                                    


                        <div className="txtSection">
                                <motion.h1 id="topic" initial={{opacity:0,marginLeft:-350}} whileInView={{opacity:0.3,marginLeft:-70}} exit={{opacity:0,marginLeft:-350}} transition={{duration:1}}>Food</motion.h1>
                                <motion.h2 id="topic" initial={{opacity:0}} whileInView={{opacity:1}} exit={{opacity:0}} transition={{delay:0.5,duration:1}}>Enjoy Healthy foods</motion.h2>
                                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} exit={{opacity:0}} transition={{delay:0.5,duration:2}}>
                                At our mountain retreat, we prioritize your well-being by offering a selection of wholesome and nourishing meals crafted with locally sourced ingredients. From farm-fresh vegetables to organic grains and sustainably sourced proteins, each dish is thoughtfully prepared to provide you with a balanced and nutritious dining experience. Start your day with a hearty breakfast featuring seasonal fruits, homemade granola, and freshly squeezed juices. For lunch and dinner, savor the flavors of our chef's creations, inspired by traditional recipes and infused with a modern twist. Whether you have dietary preferences or special requests, our culinary team is dedicated to accommodating your needs and ensuring that every meal is a celebration of health and vitality
                            </motion.p>
                            <ul>
                        
                                <motion.li initial={{opacity:0,marginTop:50}} whileInView={{opacity:1,marginTop:20}} exit={{opacity:0,marginTop:50}} transition={{duration:1}}> Fresh, seasonal fruits and vegetables bursting with flavor and nutrients</motion.li>
                                <motion.li initial={{opacity:0,marginTop:50}} whileInView={{opacity:1,marginTop:20}} exit={{opacity:0,marginTop:50}} transition={{delay:1,duration:1}}>Whole grains and legumes rich in fiber and essential vitamins</motion.li>
                                <motion.li initial={{opacity:0,marginTop:50}} whileInView={{opacity:1,marginTop:20}} exit={{opacity:0,marginTop:50}} transition={{delay:2,duration:1}}>Locally sourced meats and dairy products free from hormones and antibiotics</motion.li>
                            </ul>
                        </div>
                        <div className="img-food">
                              
                               <ImageCarousel images={foodImage} slidshow={1}/> 
                                </div>



                    </section>

                    <section className="discover" onClick={handleOutterClick}>
                        <motion.h1 initial={{y:-50,opacity:0}}
                            whileInView={{y:-10,opacity:1}}
                            exit={{y:-50,opacity:0}}
                            transition={{duration:3}}>Discover Sanda Asapuwa Home Stay</motion.h1>
                       
                        <motion.p   initial={{opacity:0}}
                                whileInView={{opacity:1}}
                                exit={{opacity:0}}
                                transition={{ delay:1,duration:1}} >"Discover the essence of relaxation in our Home stay."</motion.p>

                              

                 
                       

                        <motion.div className="icon-container" initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} exit={{y:100,opacity:0}} transition={{delay:0.5, duration:0.5}}>
                           
                                <button className={isShowing ? "btnOpen hide-btn" : "btnOpen"}  onClick={showIcon}>Discover</button>
                              <div><a href="https://sandaasapuwa.blogspot.com/" target="_Blank"><FontAwesomeIcon icon={faBlogger} className={isShowing ? "open-apple" : "fa-apple" } /></a></div>
                              
                                <div ><a href="https://www.linkedin.com/company/sanda-asapuwa/about/" target="_Blank"><FontAwesomeIcon icon={faLinkedin} className={isShowing ? "open-html" : "fa-html5"} /></a></div>
                                <div ><a href="https://web.facebook.com/SandaAsapuwa/?_rdc=1&_rdr" target="_Blank"><FontAwesomeIcon icon={faFacebook} className={isShowing ? "open-fb" : "fa-fb"}  /></a></div>
                                <div ><a href="https://www.youtube.com/@SandaAsapuwa" target="_Blank"><FontAwesomeIcon icon={faYoutube} className={isShowing ? "open-yt" : "fa-yt"}  /></a></div>
                           
                        </motion.div>       
                               
                        
                        
                     
                    </section>
                </section>

                <section className="ending">
                <div> <h1>discover the real peace in one place</h1></div>
                    <video src={vid} autoPlay loop muted/>               
                    
                </section>

                <section className="reviews">
                    <h1>What peoples say</h1>
                    <p>
                    Morbi tempus malesuada erat sed pellentesque. Donec pharetra mattis nulla, id laoreet neque scelerisque at. Quisque eget sem non ligula consectetur ultrices in quis augue. Donec imperd iet leo eget tortor dictum, eget varius eros sagittis.
                    </p>
                    <div>
                    <img src={user}/>
                    </div>
                </section>
            </main>
           <Footer/>
        </div>
      </div>
    )
}