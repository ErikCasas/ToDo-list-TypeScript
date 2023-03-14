import User from '../../models/userModel';
import bcrypt from 'bcrypt';
import { MyResponse } from '../../types';
import { Request } from 'express';

const getUser = async (req: Request, res: MyResponse) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.findOne({ email });
    const acces = user === null
    ?false
    :await bcrypt.compare(password, user.password)
    if(!acces){

    }

  } catch ({ message }) {
    res.status(300).json({ 'error :>> ': message });
  }
};
export default getUser;
