import { Double, Int32 } from "mongodb";
import mongoose from "mongoose";

const {Schema}=mongoose;
const roomSchema=new Schema(
    {
        
        
        availability:{
            type:String
        },
        catagory:{
            type:String
        },
        price:{
            type:Number
        }
    }
)
export const newRoom=mongoose.model('rooms',roomSchema);