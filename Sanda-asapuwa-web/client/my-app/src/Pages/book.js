import "./book.css";
import Navbar from "../Components/navbar.js";
import { useEffect, useRef, useState } from "react";
import Room1 from "../Images/room1.jpg";
import Room2 from "../Images/room2.png";
import axios from "axios";
import ImageCarousel from "../Components/ImageCarousel";
export default function Book() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [guestCount, setGuestCount] = useState();
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [isRoomAvailable, setisRoomAvailable] = useState(true);
  const [pickup, setPickup] = useState(true);
  const [contactNo, setContactNo] = useState();
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [roomId, setRoomId] = useState([]);
  const [roomCatagory,setRoomCatagory]=useState([]);
  const [roomKeys, setRoomKeys] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [inputType, changeInputType] = useState("radio");
  const [roomInfo, setRoomInfo] = useState([]);
  const [selectedRooms,setSelectedRooms]=useState([]);
  const selectedRoomsRef=useRef([])
  useEffect(()=>{selectedRoomsRef.current=selectedRooms},[selectedRooms]);
  const change = () => {
    if (inputType === "radio") {
      changeInputType("checkBox");
    }
    if (inputType === "checkBox") {
      changeInputType("radio");
    }
  };
 
  const handleClick = (id) => {
   /*  if (!roomId.includes(id)) {
      setRoomId((prevIds) => [...prevIds, id]);
    } else {
      setRoomId((prevIds) => prevIds.filter((room) => room !== id));
    } */
  
      const rooms=[...roomCatagory];
      const keys=[...roomKeys];
    axios.get(`http://localhost:5555/Rooms/${id}`)
    .then((res)=>
      {
        
      
        rooms.push(res.data.catagory);
        keys.push(res.data.keyNum);

        setRoomCatagory(rooms);
        setRoomKeys(keys);
       
      }
    )
    .catch((err)=>console.log(err))
    

    

  };
  useEffect(()=>{
    console.log(roomCatagory);
    console.log(roomKeys);
  },[roomCatagory,roomKeys])
  //get rooms info
  useEffect(() => {
    axios
      .get("http://localhost:5555/Rooms/get-room")
      .then((res) => {
        let availableRoomCount = 0;
        setRoomInfo(res.data);
        console.log(res.data);
        res.data.forEach((r) => {
          if (r.availability === "available") {
            availableRoomCount++;
          }
        });
        if (availableRoomCount === 0) {
          setisRoomAvailable(false);
        }
        console.log(`available room count: ${availableRoomCount}`);
      })
      .catch((err) => {
        console.log(err.res);
      });
  }, []);


  const createBooking = (e) => {
    let isAllCorrect = true;

    if (firstName.length === 0) {
      isAllCorrect = false;
      alert("please enter your first name");
    }

    const regex = /^[^\s@]+@gmail\.com$/;
    if (!regex.test(mail)) {
      isAllCorrect = false;
      alert("Please enter a valid email address");
    }
    const telephoneRegex = /^\d{10}$/;
    if (!telephoneRegex.test(contactNo)) {
      isAllCorrect = false;
      alert("Contact number is not valid");
    }
    if (guestCount === 0) {
      isAllCorrect = false;
      alert("please select guest numbers");
    }
    if (arrivalDate === "") {
      isAllCorrect = false;
      alert("please select the date of your arrival");
    }
    if (arrivalTime === "") {
      isAllCorrect = false;
      alert("please select the Time of your arrival");
    }
    if (departureDate === "") {
      isAllCorrect = false;
      alert("please select the date of your departure");
    }
    if (departureTime === "") {
      isAllCorrect = false;
      alert("please select the time of your departure");
    }
    if (isAllCorrect) {
      const data = {
        roomCatagory,
        roomKeys,
        firstName,
        lastName,
        mail,
        guestCount,
        arrivalDate,
        arrivalTime,
        departureDate,
        departureTime,
        pickup,
        contactNo,
        
      };
      axios
        .post("http://localhost:5555/booking/add-booking", data)
        .then()
        .catch((err) => console.log(err));

      //update room availability
      roomId.forEach((id) => {
        axios.get(`http://localhost:5555/Rooms/${id}`).then((res) => {
          const url = res.data.url;
          console.log(res.data);
          const availability = "not available";
          const data = {
            url: url,
            availability: availability,
          };
          axios
            .put(`http://localhost:5555/Rooms/${id}`, data)
            .then(
              alert(
                "room booked successfully\nyou will recieve token including the reservation details.please check your email.Thank you"
              )
            )
            .catch((err) => console.log(err.res));
        });
      });
    }
  };

  return (
    <div>
      <section className="book-header">
        <Navbar />
      </section>
      <section className="book-body">
        <form className="bookForm">
          <div className="availble-room-container">
            {/*   <div className="selectOp">
                            <input type='radio' id="radioButton4" name="radioGroup" value="single" onClick={(e)=>change(e)} defaultChecked/>   
                                <label for="radioButton4" className="select">single Room</label>

                            <input type='radio' id="radioButton5" name="radioGroup" value="multiple" onClick={(e)=>change(e)}/>   
                                <label for="radioButton5" className="select" >multiple room</label>
                              
                      </div> */}
            <h1 className="center">Availble Rooms</h1>
            <div className="card-container">
              {!isRoomAvailable ? (
                <h2 className="not-available">
                  Sorry curruntly no rooms available
                </h2>
              ) : (
                <>
                  {roomInfo.map((room) => {
                    return (
                      <div>
                        {room.availability === "available" ? (
                          <div>
                            <input
                              type="checkBox"
                              id={room._id}
                              name="radioGroup-room"
                              onChange={() => handleClick(room._id)}
                            />
                            <label for={room._id} className="roomLabel">
                              <div className="roomCard ">
                                <div className="cover">select</div>
                                <div className="card-details">
                                  <h2 className="notify ">selected</h2>
                                  <img src={Room1} alt="room-image"/>

                                  <ul>
                                    <li>Room type:{room.catagory}</li>
                                    <li>Price:{room.price}/per night</li>
                                    <li>Availblity:{room.availability}</li>
                                  </ul>
                                </div>
                              </div>
                            </label>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>

          <div className="form-body">
            <div className="left-side">
              <div className="container">
                <label for="Name">Full name</label>
                <div>
                  <input
                    type="text"
                    placeholder="first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="last name"
                    value={lastName}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <div className="container">
                <label for="guest">Number of Guest</label>
                <div>
                  <select
                    className="dropdown"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  {/* <input type='Number' placeholder='count' value={guestCount} onChange={(e)=>setGuestCount(e.target.value)}/> */}
                </div>
              </div>

              <div className="container">
                <label for="guest">Arrival</label>
                <div className="section-left">
                  <input
                    type="date"
                    placeholder="arrival data"
                    value={arrivalDate}
                    onChange={(e) => setArrivalDate(e.target.value)}
                  />
                  <input
                    type="time"
                    placeholder="arrival time"
                    value={arrivalTime}
                    onChange={(e) => setArrivalTime(e.target.value)}
                  />
                </div>
              </div>

              <div className="container">
                <label for="guest">Departure</label>
                <div className="section-left">
                  <input
                    type="date"
                    placeholder="departure data"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                  />
                  <input
                    type="time"
                    placeholder="departure time"
                    value={departureTime}
                    onChange={(e) => setDepartureTime(e.target.value)}
                  />
                </div>
              </div>

              <div className="container ">
                <label for="guest">Do you want to pickup?</label>
                <div className="section-left pickMe">
                  <input
                    type="radio"
                    id="yes"
                    name="pick"
                    value={true}
                    onChange={(e) => setPickup(e.target.value)}
                  />
                  <label for="yes">Yes Please , Pick me on arrival</label>
                  <input
                    type="radio"
                    id="no"
                    name="pick"
                    value={false}
                    onChange={(e) => setPickup(e.target.value)}
                  />
                  <label for="no">No Thanks,i'll make my own way there</label>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="container">
                <label for="mail">E-mail</label>
                <div>
                  <input
                    type="mail"
                    placeholder="example@gmail.com"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="container">
                <label for="tp">Contact number</label>
                <div>
                  <input
                    type="tel"
                    placeholder="contact number"
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="form-footer">
            {/*  <button className='btnSubmit' onClick={createBooking}>Submit</button> */}
          </div>
        </form>
        <div className="btnSubmit">
          <button onClick={createBooking}>Submit</button>
        </div>
      </section>
      <section className="book-footer"></section>
    </div>
  );
}
