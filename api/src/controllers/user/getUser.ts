import User from "../../models/userModel";
import { MyResponse } from "../../types";
import { Request } from "express"; 

const getAllUsers = async (_req:Request, res:MyResponse ) => {
    try {
        const Users = await User.find()
        console.log(Users);
        res.send({Users:Users});
    } catch (error) {
        res.json({'error :>> ': error})
    }
};  

export default getAllUsers;