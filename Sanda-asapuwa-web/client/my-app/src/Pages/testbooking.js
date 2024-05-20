import  { useEffect, useState } from "react";

import axios from "axios";
export default function TestBooking(){
  
  const[firstName,setFirstName]=useState('');
  const[lastName,setLastname]=useState('');
  const[mail,setMail]=useState('');
  const[guestCount,setGuestCount]=useState();
 
 useEffect(()=>{
  axios.get('http://localhost:5555/booking')
          .then((response)=>console.log(response.data))
          .catch((err)=>{
              console.log(err);
          })
   }
 )
    
    

  const bookNow=()=>{
    const data={
      firstName,
      lastName,
      mail,
      guestCount
    }
    axios.post('http://localhost:5555/booking',data)
    .then(alert("done"))
    .catch((err)=>{
      console.log('An error occured');
    })
  }
   return(
    <div>
      
    {  <form >
        <label for="first_name">First Name:</label>
        <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        
        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name" name="last_name" value={lastName} onChange={(e)=>setLastname(e.target.value)}/>
        
        <label for="field1">Field 1:</label>
        <input type="text" id="field1" name="field1" value={mail} onChange={(e)=>setMail(e.target.value)}/>
        
        <label for="field2">Field 2:</label>
        <input type="Number" id="field2" name="field2" value={guestCount} onChange={(e)=>setGuestCount(e.target.value)}/>
        
        <input type="submit"  value='submit' onClick={bookNow}/>
      
    </form>}
    </div>
   )



}