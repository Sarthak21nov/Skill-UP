import User from "../Schemas/UserSchema.js"
import bcrypt from "bcrypt"
import { generateToken } from "../Utils/generateTokoen.js"


export const login = async (req, res)=>{
    try{
        const {email, password} = req.body
        if(!email ||!password){
            return res.status(400).json({
                outcome: false,
                message:"ALL THE FIELDS ARE MANDATORY!!"
            })
        }
        
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                outcome: false,
                message: "NO USER EXIST WITH THIS EMAIL ID"
            })
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        if(!checkPassword){
            return res.status(400).json({
                outcome: false,
                message: "INCORRECT E-MAIL ID OR PASSWORD"
            })
        }
        generateToken(res, user, `Welcome Back ${user.name}`)

        return res.status(200).json({
            outcome: true,
            message: "LOGGED IN SUCCESSFULLY"
        })
    } catch(err){
        console.log(err)
        res.status(400).json({
            outcome: false,
            message: "AN ERROR OCCURED"
        })
    }
    
}

export const register = async (req,res)=>{
    try{
        const {name, email, phone, password, role} = req.body;
        if(!name || !email || !phone || !password){
            return res.status(400).json({
                outcome: false,
                message: "ALL FIELDS ARE MANDATORY"
            })
        }
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                outcome: false,
                message: "USER ALREADY EXIST WITH THIS EMAIL ID"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await User.create({
            name,
            email,
            phone,
            password: hashedPassword,
            role
        })

        return res.status(200).json({
            outcome: true,
            message: "REGISTRATION COMPLETED SUCCESSULLY!! YOU WILL BE REDIRECTED TO THE LOGIN PAGE FOR LOGGING IN"
        })

    } catch(err){
        console.log(err)
        res.status(400).json({
            outcome: false,
            message: "AN ERROR OCCURED"
        })
    }
}