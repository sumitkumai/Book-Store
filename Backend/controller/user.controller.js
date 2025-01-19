import User from '../model/user.model.js'
import bcrypt from 'bcrypt'

export const signup = async(req,res)=>{
    try {
        const{name,email,password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:'Email already exists'});
        }

        const hashPassword = await bcrypt.hash(password,10)

        const newUser = new User({name,email,password:hashPassword});
        await newUser.save();
        res.status(201).json({message:'Account successfully created!',newUser});
        
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}

export const login = async(req,res)=>{
    try {
        const{email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:'Invalid email or password'});
        }
        
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:'Invalid email or password'});
        }

        res.status(200).json({message:"Login successful",user:{
            _id:user._id,
            name:user.name,
            email:user.email
        }})
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}