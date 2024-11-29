import express from 'express';
import { loginUser, registerUser } from '../controllers/users-controllers';
const usersRouter = express.Router();

usersRouter.post('/usuario/registro', registerUser);
usersRouter.post('/usuario/login', loginUser);

export default usersRouter;