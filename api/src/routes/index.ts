import { Router } from 'express';
import UserRouter from './usersRoutes/user.routers';

const router = Router();

router.get('/',async (_req , res) => {
    try {
        console.log('UP!');
        res.json("the server it's alive!!")
    } catch (error) {
        console.log('error :>> ', error);
    }
})
router.use(UserRouter)

export default router;