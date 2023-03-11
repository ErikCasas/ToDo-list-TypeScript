// import User from '../../models/userModel';
// import { MyResponse } from "../../types";
import { Request, Response } from 'express';

const createUser = async (req: Request, res: Response) => {
    const email = req.body;
    console.log(email);
  try {
    // const user = User.finOne({ email: email });
    // if (user) throw new Error('this user already exists');
    // const newUser = new User(req.body).save();
    // res.json(newUser);
  } catch ({ message }) {
    res.json({ 'error :>> ': message });
  }
};

export default createUser