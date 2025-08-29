import { collection } from "../db/auth.db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const insertData=async(name,email,mobileno,password)=>{
    return await collection.insertMany({name,email,mobileno,password});
}

export const hashedPassword=async(password)=>{
    const salt=10;
    const hashOne=await bcrypt.hash(password,salt);
    return hashOne;
}

export const isEmailExist=async(email)=>{
    const rows=await collection.findOne({email});

    if(rows){
        return true;
    }
    return false;
}

export const isPasswordSame=async(email,password)=>{
    const rows=await collection.findOne({email});
    // console.log( rows.password);
    const verified=await bcrypt.compare(password,rows.password);
    return verified;
}

export const generateToken=(email,password)=>{
  return jwt.sign({email,password},'asdf',{
    expiresIn:"2m",
  });
}

