import { Router } from "express";
import createUser from "../../controllers/user/createUser";
import getAllUsers from "../../controllers/user/getAllUsers";
import getUser from "../../controllers/user/getUser";

const router = Router();

router.post('/createUser', createUser)
router.post('/getUser', getUser)

router.get('/getUsers', getAllUsers) 

export default router;