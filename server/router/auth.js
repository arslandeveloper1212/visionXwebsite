const express = require("express");
const router = express.Router();
const User = require("../model/UserSchema")

// router.get("/", (req,res)=>{
//     res.send("router Home Page");
//     console.log("router set");
// })

//login
router.post ("/login", async (req,res)=>{
    console.log(req.body);
    const {name, email ,phone,company,subject,message}= req.body;
    if(!name || !email || !phone || !company || !subject || !message){
        res.status(422).json({message:"please fill the data"});
    }
    try{
        const UserExist = await User.findOne({email:email});
        if(UserExist){
            res.status(422).json({message: "Email Already Exist"})
        }else{
            const addUser = await new User({name, email ,phone,company,subject,message});
            await addUser.save();
            if(addUser){
                res.status(201).json({message: "user registered successfully"});
                console.log(addUser);
            }else{
                res.status(422).json({message: "Invalid Credentials"})
            }
        }

    }catch(err){
        console.log(err);
        res.status(500).json({err: "internal server error"});
    }
})




module.exports= router;