import { Router } from "express";
import getAllUsers from "../../controllers/user/getUser";

const router = Router();

router.get('/getUsers', getAllUsers) 


export default router;