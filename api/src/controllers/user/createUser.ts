import User from '../../models/userModel';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';


const createUser = async (req: Request, res: Response) => {
  const { email, name, password } = req.body
  try {
    const user = await User.findOne({ email: email });
    const passwordHash = await bcrypt.hash(password, 10)
    if (user) throw new Error('this user already exists');
    const newUser =await new User({
      email,
      name,
      passwordHash
    });
    newUser.save();
    res.json(newUser);
  } catch ({ message }) {
    res.json({ 'error :>> ': message });
  }
};

export default createUser;
