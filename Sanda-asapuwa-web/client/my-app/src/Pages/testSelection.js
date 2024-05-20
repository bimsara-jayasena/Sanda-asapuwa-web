import React, { useState } from "react";
import './testSelection.css';
import Room1 from '../Images/room1.jpg';
export default function(){
    const [inputType,changeInputType]=useState('radio');
    const change=()=>{
            if(inputType==='radio'){
                changeInputType('checkBox')
            }
            if(inputType==='checkBox'){
                changeInputType('radio')
            }
    }
    return(
        <div>
            <form className="test">
          
           
              

          <input type={inputType} id="radioButton2" name="radioGroup" />   
                  <label for="radioButton2" class="radioImageLabel">
                    <div className="container">
                         <h2 className="test-cover">Select</h2>
                         <h1>Selected</h1>
                         <img src={Room1} alt="Radio Button" />
                    
                    
                    </div>
                    </label>

                 
                    <input type={inputType} id="radioButton3" name="radioGroup" />   
                  <label for="radioButton3" class="radioImageLabel">
                    <div className="container">
                         <h2 className="test-cover">Select</h2>
                         <h1>Selected</h1>
                         <img src={Room1} alt="Radio Button" />
                    
                    
                    </div>
                    </label>
         
                    
       

                   
     </form>
     {/* <button onClick={change}>Change</button> */}
        <div className="selectOp">
        <input type='radio' id="radioButton4" name="radioGroup" value="single" onClick={change} defaultChecked/>   
                  <label for="radioButton4" className="select">single Room</label>

        <input type='radio' id="radioButton5" name="radioGroup" value="multiple" onClick={change}/>   
                  <label for="radioButton5" className="select" >multiple room</label>
        </div>
        </div>
        
        
    )
}