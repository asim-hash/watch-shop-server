import asyncHandler from "express-async-handler";
import User from "../models/userModel.js"
import {generateToken} from "../utils/generateToken.js";


const authUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    const user =  await User.findOne({email})
    if(user && await user.matchPassword(password)){
    res.json({
        _id: user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
        token:generateToken(user._id)
    })} else {
        res.status(401)
        throw new Error("Error email or password")
    }
})


const registerUser = asyncHandler(async(req,res)=>{
    const {email,password , name} = req.body
    const user =  await User.findOne({email})
    if(user){
    res.status(400)
        throw new Error("user already exists")
    }
    let newUser = await User.create({email,password,name})
    if (newUser){
        res.status(201).json({
            _id:newUser._id,
            name:newUser.name,
            password:newUser.password,
            isAdmin:newUser.isAdmin,
            token:generateToken(newUser._id)
        })
    }else {
        res.status(400)
        throw new Error("invalid data")
    }
})


export { authUser,registerUser }
