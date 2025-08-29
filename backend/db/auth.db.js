import mongoose, { Schema } from "mongoose";

const URL="mongodb://localhost:27017/Foody";

try{
    const logo=mongoose.connect(URL);

    if(logo){
        console.log("database connected successfully");
    }
    else{
        console.log("some failure is there");
    }
}
catch(error){
    console.log(error);
}


const collectionSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true,lowercase:true},
    mobileno:{type:String,required:true},
    password:{type:String,required:true,minlength:6}
},
{
    timestamps:true,
});


export const collection=mongoose.model('registration',collectionSchema);


