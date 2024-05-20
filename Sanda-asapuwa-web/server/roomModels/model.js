import mongoose from "mongoose";

const {Schema}=mongoose;
const bookingSchema=new Schema(
    {
        rooms:{
            type:Array,
            require:true
        },
        keys:{
            type:Array,
            require:true
        },
        firstName:{
            type: String,
            require:true
        },
        lastName:{
            type: String,
            require:true
        },
        mail:{
            type: String,
            require:true
        },
        guestCount:{
            type: Number,
            require:true
        },
        arrivalDate:{
            type:Date,
            require:true
        },
        arrivalTime:{
            type:String,
            require:true
        },
        departureDate:{
            type:Date,
            require:true
        },
        departureTime:{
            type:String,
            require:true
        },
        pickup:{
            type:Boolean,
            require:true
        },
        contactNo:{
            type:Number,
            require:true
        },
       
       
    },
    {timestamps:true}
)
export const Booking = mongoose.model('booking',bookingSchema);