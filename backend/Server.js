import express from "express";
import cors from "cors";
import { authCart, authContact, authDelete, authgetData, authLogin, authPayment, authRegister, authReview } from "./controllers/auth.controller.js";
const app=express();
const PORT=3000;

const corsoptions={
    origin:"http://localhost:5173",
    method:"GET,POST,PUT,PATCH,DELETE,HEAD",
}
app.use(cors());

app.use(cors(corsoptions));

app.use(express.json());

app.use('/register/',authRegister);

app.use('/login',authLogin);

app.use('/buy/add/',authCart);

app.use('/getData/add',authgetData);

app.use('/delete/cart',authDelete);

app.use('/save/data',authReview);

app.use('/save/contact',authContact);

app.use('/payment',authPayment);


app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`);
})

