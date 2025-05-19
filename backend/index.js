import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import AuthRouter from './Routes/AuthRoute.js'

const app = express()
dotenv.config()

const Port = process.env.PORT 

// MongoDB Connectiion
const connect = async ()=>{
    try{
        mongoose.connect(process.env.MONGO_URI)
        console.log("CONNECTED WITH DB")
    } catch(error){
        throw(error)
    }
}
mongoose.connection.on("disconnected", ()=>{
    console.log("Disconnected from server")
})

//Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors())

//Routes
// 1) Authentication and Authorization Routes
app.use('/api/server', AuthRouter)


app.listen(Port, ()=>{
    connect()
    console.log(`Server started on Port ${Port}`)
})