import express from "express";
import { generateToken, getEmailData, hashedPassword, insertData, isEmailExist, isPasswordSame } from "../models/auth.model.js";

const router=express.Router();

router.post('/data', async (req, res) => {
  const { name, email, mobileno, password } = req.body;

  const hashpassword = await hashedPassword(password);
  const checkEmail = await isEmailExist(email);

  if (checkEmail) {
    return res.status(404).json({ msg: "Duplicate entry: Email already exists" });
  }

  const insertion = await insertData(name, email, mobileno, hashpassword);
  console.log(insertion);
  if (insertion) {
    return res.status(200).json({
       msg: "Data inserted successfully",
      });
  }
});

router.post('/verify',async(req,res)=>{
  const{email,password}=req.body;
  const data=await getEmailData(email);
  const emailexist=await isEmailExist(email);

  if(emailexist){
    const checkPass=await isPasswordSame(email,password);
    if(checkPass){
      return res.status(200).json({
        msg:"login successfully",
        token:await generateToken({email,password}),
        pass:data,
      });
    }
    else{
      return res.status(404).json({msg:"invalid credentials"});
    }
  }
  else{
    return res.status(404).json({msg:"email doesn't exist please sign up"});
  }
})

router.post('/cart',async(req,res)=>{
  const {id,src,name,Description,price}=req.body.curelem;
  const {_id,email}=req.body.user;
  console.log(email);
})
export const authCart=router;
export const authLogin=router;
export const authRegister=router;