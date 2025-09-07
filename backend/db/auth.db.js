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

const newSchema=new Schema({
    // _id:{type:String,required:true},
    email:{type:String,required:true,lowercase:true},
    id:{type:String,required:true},
    src:{type:String,required:true},
    name:{type:String,required:true},
    Description:{type:String,required:true},
    price:{type:String,required:true},
},
{
    timestamps:true
});

const reviewSchema=new Schema({
    name:{type:String,required:true},
    title:{type:String,required:true},
    review:{type:String,required:true},
    rating:{type:Number,required:true},
})


export const additionCart=mongoose.model('CartItems',newSchema);

export const collection=mongoose.model('registration',collectionSchema);

export const reviewData=mongoose.model('ReviewData',reviewSchema);



