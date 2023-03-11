import { Router } from "express";
import createUser from "../../controllers/user/createUSer";
import getAllUsers from "../../controllers/user/getAllUsers";
import getUser from "../../controllers/user/getUser";

const router = Router();

router.post('/createUser', createUser)
router.get('/getUsers', getAllUsers) 
router.get('/getUser', getUser)

export default router;