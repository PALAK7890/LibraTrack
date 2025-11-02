const mongo= require('mongoose')
require('dotenv').config();

const connectDataBase =async()=>{
    try{
        await mongo.connect(process.env.MONGO_URI);
        console.log('Connected')
    }catch(err){
        console.log('nahi hua connect',err)
    }
}

module.exports = connectDataBase;
