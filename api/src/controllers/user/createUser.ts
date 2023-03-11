import User from '../../models/userModel';
// import { MyResponse } from "../../types";
import { Request, Response } from 'express';

const createUser = async (req: Request, res: Response) => {
  const { email } = req.body
  try {
    const user = await User.findOne({ email: email });
    if (user) throw new Error('this user already exists');
    const newUser =await new User(req.body);
    newUser.save();
    res.json(newUser);
  } catch ({ message }) {
    res.json({ 'error :>> ': message });
  }
};

export default createUser;
