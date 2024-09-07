import mongoose from "mongoose";
// import { type } from "os";


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
        default:'https://tse4.mm.bing.net/th?id=OIP.hGSCbXlcOjL_9mmzerqAbQHaHa&pid=Api&P=0&h=180'
    },
    isAdmin:{
        type:Boolean,
        default:false,
        
    },
    }, {timestamps:true}
);
const User = mongoose.model('User',userSchema);

export default User;