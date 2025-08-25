import express from "express";
import cors from "cors";
const app=express();
const PORT=3000;

const corsoptions={
    origin:"http://localhost:5173",
    method:"GET,POST,PUT,PATCH,DELETE,HEAD",
}

app.use(cors(corsoptions));

app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`);
})

