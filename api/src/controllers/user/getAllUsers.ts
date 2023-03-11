import User from "../../models/userModel";
import { MyResponse } from "../../types";
import { Request } from "express"; 

const getAllUsers = async (_req:Request, res:MyResponse ) => {
    try {
        const Users = await User.find()
        if(Users.length){
            res.json({Users:Users})
        }else{
            throw new Error('There are no users in the database')
        }
    } catch ({message}) {
        res.json({'error :>> ': message})
    }
};  

export default getAllUsers;