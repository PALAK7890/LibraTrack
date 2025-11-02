const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../database_models/db');
require('dotenv').config();
const auth = express.Router();

auth.post('/signin',async(req,res)=>{
    try{
        const {username,email,password}=req.body
        if (!username || !email || !password){
            res.status(400).json({message: 'All Fields Are Mandatory'})
        }
        const userExists = await User.findOne({email})
        if (userExists){
            res.status(400).json({message: 'User Already Exists'})
        }

        const enctPass = await bcrypt.hash(password,10)
        const newUser = new User ({username,email,password:enctPass})
        await newUser.save()
        res.status(201).json({ message: "User registered successfully" });

    }catch(err){
        res.status(500).json({message:'Server Error hai',error : err})
    }
})

auth.post ('/login',async(req,res)=>{
    try{
        const {email,password}=req.body
        if (!email || !password){
            res.status(400).json({message :'All fields asre zaruri'})
        }
        const user = await User.findOne({ email });
        if (!user)
            return res.status(400).json({ message: "Invalid email or password" });

        const samePass = await bcrypt.compare(password, user.password);
        if (!samePass)
      return res.status(400).json({ message: "Invalid email or password" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token });

    }catch(err){
        res.status(500).json({ message: "Server error", error: err })

    }
})

module.exports = auth;