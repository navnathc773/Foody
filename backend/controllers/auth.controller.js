import express from "express";
import { deleteCart, generateToken, getEmailData, hashedPassword, insertCart, insertData, isEmailExist, isPasswordSame } from "../models/auth.model.js";
import {additionCart} from "../db/auth.db.js";
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
    console.log(req.body);
    const {id,src,name,Description,Price}=req.body.curelem;
    const {_id,email}=req.body.user;

    const exist = await additionCart.find({ id: id,email:email });
    if (exist.length === 0) {
      const insertion = await insertCart(email, id, src, name, Description, Price);
        if (insertion) {
          return res.status(200).json({ msg: "Item added to Cart" });
        }
    } 
    else {
          return res.status(400).json({ msg: "Item already added to Cart" });
    }

    })

router.post('/cartOne', async (req, res) => {
  try {
    const { email } = req.body;
    console.log("Fetching cart for:", email);
    const dataCart = await additionCart.find({ email });
    if (!dataCart || dataCart.length === 0) {
      return res.status(404).json({ msg: "No items found in cart" });
    }
    return res.json(dataCart); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error fetching cart" });
  }
});

router.delete('/confirm',async(req,res)=>{
  const {id}=req.body;

  const logo=await deleteCart(id);

  if(logo){
    res.status(200).json({msg:"item deleted from cart"});
  }
  else{
    res.status(404).json({msg:"item is not present"});
  }
})
export const authDelete=router;
export const authgetData=router;
export const authCart=router;
export const authLogin=router;
export const authRegister=router;