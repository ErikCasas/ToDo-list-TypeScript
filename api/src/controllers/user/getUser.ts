import User from "../../models/userModel";
import { MyResponse } from "../../types";
import { Request } from "express"; 

const getUser =async (req:Request, res: MyResponse) => {
    const { email, password } = req.body;
    try {
        const user = await User.finOne({email:email})
        switch (user) {
            case user.password!==password:
                throw new Error('Wrong password')
                break;
                case !user :
                throw new Error('non-existent user')
                break;
            default:
                res.json(user);
                break;
        }
    } catch ({message}) {
        res.json({'error :>> ': message})
    }
}
export default getUser;