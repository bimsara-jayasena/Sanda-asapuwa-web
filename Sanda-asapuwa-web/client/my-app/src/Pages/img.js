import axios from "axios";
import React, { useEffect, useState ,useRef} from "react";


export default function Img(){
  
    let hasAvailableRoom=true
    let notAvailable="not available";
    let i=0;
    const [roomData,setRoomData]=useState([]);
    const [roomId,setRoomId]=useState('');
    const [roomUrl,setRoomUrl]=useState('');
    const [rooms, setRooms] = useState([]);
    
    const roomUrlRef=useRef('');
    roomUrlRef.current=roomUrl
    useEffect(()=>{
        axios.get('http://localhost:5555/Rooms')
          .then((res)=>{
        
           setRoomData(res.data);
           
           
            })
          .catch((err)=>console.log(err))
          
      }) 

      
          const handleRadioChange = (id) => {
        
            setRoomId(id);
           
            
          
              if (!rooms.includes(id)) {
                setRooms(prevIds => [...prevIds, id]);
               } else {
                 setRooms(prevIds => prevIds.filter(room => room !== id));
               }
        
            
        };
        
        const showRoom=()=>{
         
         
         
          console.log("Selected Rooms")
          rooms.forEach((id)=>{
             axios.get(`http://localhost:5555/Rooms/${id}`)
                  .then((res)=>{
                          setRoomUrl(res.data.url)
                          const data={
                            url:res.data.url,
                            availability:"not available"
                          }
                          axios.put(`http://localhost:5555/Rooms/${id}`,data)
                            .then(alert("room booked"))
                            .catch((err)=>{
                                console.log(res.err)
                            })
                         
                        
                        })
                   .catch((err)=>{console.log(err)})

                       
                      }
                      
                     
          )
            
           
         
       
    }
    
      return(
        <div>
           Available Rooms
            {roomData.map((room)=>{
              
                
              
                return(
                    <div key={room._id}>
                      
                       {(room.availability==="available") ? 
                            <div>
                         
                              <form>
                              {/*   {inputType ?
                                      <div>
                                        <input 
                                              type='radio' 
                                              id={room._id}
                                              name='room'
                                              checked={ selectedRoom === room._id}
                                              onChange={() => handleRadioChange(room._id)} 
                                          />
                                          <label for={room._id}>
                                              <img src={room.url}/>
                                          </label>
                                      </div>
                                      :

                                     
                                  } */}
                                   <div>
                                        <input 
                                              type='checkBox' 
                                              id={room._id}
                                              name='room'
                                            
                                              onChange={() => handleRadioChange(room._id)} 
                                          />
                                          <label for={room._id}>
                                              <img src={room.url}/>
                                              <h2>Room ID:{room._id}</h2>
                                              <h2>Availblity: {room.availability}</h2>
                                          </label>
                                      </div>
                              </form>
                     
                            </div> 
                            : 
                            <span>Sorry</span>  
                        
                        
                        
                        
                      }
                      
                    

                    </div>
                )
            })}
          <button onClick={showRoom}>update</button>
        </div>
      )
}