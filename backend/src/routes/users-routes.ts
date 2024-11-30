import express from 'express';
import cors from 'cors'
import { loginUser, registerUser } from '../controllers/users-controllers';
const usersRouter = express.Router();

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST'],
    optionsSucessStatus: 200
}

usersRouter.use(cors(corsOptions));
usersRouter.post('/usuario/registro', registerUser);
usersRouter.post('/usuario/login', loginUser);

export default usersRouter;