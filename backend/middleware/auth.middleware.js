import jwt from "jsonwebtoken";

export const authMiddleware=async(req,res,next)=>{
    try{
        const authHeader=req.headers["authorization"];

        if(!authHeader){
            return res.status(404).json({msg:"No token provided, please login"});
        }

        const token=authHeader.split(" ")[1];

        if(!token){
            return res.status(404).json({msg:"Invalid token format"});
        }

        jwt.verify(token,'asdf',(err,decoded)=>{
            if(err){
                return res.status(403).json({msg:"Invalid or expired token"});
            }
            req.user=decoded;
            next();
        })

    }
    catch(error){
        console.error("AuthCart middleware error:", error);
        return res.status(500).json({ msg: "Server error in auth middleware" });
    }
}