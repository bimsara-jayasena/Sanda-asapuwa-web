import express from 'express';
import { PORT,mongoURL } from './config.js';
import  mongoose  from 'mongoose';
import  { Booking} from './roomModels/model.js';
import { newRoom } from './roomModels/rooms.js';
import cors from 'cors'; 

const app=express();
app.use(express.json());
app.use(
    cors({
        origin:"http://localhost:3000",
        methods:['GET','POST','PUT'],
        allowedHeaders:['Content-Type']
    })
)
/* app.use(
    cors({
        origin:"http://localhost:3000",
        methods:['GET','POST'],
        allowedHeaders:['Content-Type']
    })
) */
//perform a booking task
/* app.post('/booking',async(req,res)=>{
    try{
       if(!req.body.firstName || 
        !req.body.lastName || 
        !req.body.mail || 
        !req.body.guestCount || 
        !req.body.arrivalDate || 
        !req.body.arrivalTime ||
        !req.body.departureDate || 
        !req.body.departureTime || 
        !req.body.pickup || 
        !req.body.contactNo)
       {
        return res.status(400).send({message:"send all data"})
       }
       const newBooking={
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            mail:req.body.mail,
            guestCount:req.body.guestCount,
            arrivalDate:req.body.arrivalDate,
            arrivalTime:req.body.arrivalTime,
            departureDate:req.body.departureDate,
            departureTime:req.body.departureTime,
            pickup:req.body.pickup,
            contactNo:req.body.contactNo
       }
       const book=await Booking.create(newBooking);
       return res.send(book);
    }
    catch(err){
            console.error(err.message);
            return res.send({message:err.message});
    }
})
//show booking
app.get('/booking',async(req,res)=>{
    try{
      
       const book=await Booking.find({});
       if(!book){
        return res.send({message:"curruntly no booking"})
       }
       return res.send({
            count:book.length,
            data:book
       });
    }
    catch(err){
            console.error(err.message);
            return res.send({message:err.message});
    }
}) */


app.post('/booking/add-booking',async(req,res)=>{
    try{
       if(
        !req.body.rooms ||
        !req.body.keys ||
        !req.body.firstName || 
        !req.body.lastName || 
        !req.body.mail || 
        !req.body.guestCount || 
        !req.body.arrivalDate || 
        !req.body.arrivalTime ||
        !req.body.departureDate || 
        !req.body.departureTime || 
        !req.body.pickup || 
        !req.body.contactNo 
       )
       {
        return res.status(400).send({message:"send all data"})
       }
       const newBooking={
            rooms:req.body.rooms,
            keys:req.body.keys,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            mail:req.body.mail,
            guestCount:req.body.guestCount,
            arrivalDate:req.body.arrivalDate,
            arrivalTime:req.body.arrivalTime,
            departureDate:req.body.departureDate,
            departureTime:req.body.departureTime,
            pickup:req.body.pickup,
            contactNo:req.body.contactNo,
            
       }
       const book=await Booking.create(newBooking);
       return res.send(book);
    }
    catch(err){
            console.error(err.message);
            return res.send({message:err.message});
    }
})
app.get('/booking',async(req,res)=>{
    try{
      
       const book=await Booking.find({});
       if(!book){
        return res.send({message:"curruntly no booking"})
       }
       return res.send({
            count:book.length,
            data:book
       });
    }
    catch(err){
            console.error(err.message);
            return res.send({message:err.message});
    }
}) 

 app.post(('/Rooms'),async(req,res)=>{
    try{
        if(!req.body.url || !req.body.availability){
            return res.status(400).send({message:"send all data"})
        }
        const createRoom={
            url:req.body.url,
            availability:req.body.availability
        }
        const room=await newRoom.create(createRoom);
        return res.send(room);
    }
    catch(err){
        return res.send({message:err.message});
    }
})

app.get(('/Rooms/get-room'),async(req,res)=>{
    try{
       
        const room=await newRoom.find({});
        return res.send(room);
    }
    catch(err){
        return res.send({message:err.message});
    }
})

app.get(('/Rooms/:id'),async(req,res)=>{
    try{
        const {id} =req.params;
        const room=await newRoom.findById(id);
        return res.send(room);
    }
    catch(err){
        return res.send({message:err.message});
    }
})

app.put('/Rooms/:id',async(req,res)=>{
    try{
        const{id} =req.params;
        
        
       
         
          
          if(!req.body.url || !req.body.availability){
            return res.status(400).send({message:"send all data"})
        }
        const data={
            url:req.body.url,
            availability:req.body.availability
             
           }
        const updateRoom=await newRoom.findByIdAndUpdate(id,data);
        return res.send(updateRoom);

    }
    catch(err){
        return res.send({message:err.message});
    }
})
mongoose
        .connect(mongoURL)
        .then(()=>{
            console.log('connected to mongoDB');
            app.listen(PORT,()=>{console.log(`app listening to  :${PORT}`)})
        })
        .catch((err)=>{
            console.log(err);
        })
        
