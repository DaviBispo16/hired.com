import { Request, Response } from "express";
import {v4 as uuidv4} from 'uuid';
import bcrypt from 'bcrypt';
import Users from '../../models/Users';

export const registerUser = async(req: Request, res: Response) => {
    const { nome, email, senha } = req.body;
    try {
        const encryptedPassword = await bcrypt.hash(String(senha), 10);
        const id = uuidv4();
        const createUser = await Users.create({
            id,
            nome,
            email,
            senha: encryptedPassword
        });
        res.status(201).json(createUser);

    } catch (error:any) {
        res.status(500).json({mensagem: `${error.message}`});
    }
}

export const loginUser = async(req: Request, res: Response) => {
    const {email, senha} = req.body;
    try {
        const findUserByEmail = await Users.findOne({where: {email}}) as any;
        if (findUserByEmail === null) {
            res.status(404).json({mensagem: 'Usuário não encontrado'});
            return;  
        } 
        const {senha: userPassword} = findUserByEmail;
        const passwordValidation = await bcrypt.compare(String(senha), String(userPassword));
        if (!passwordValidation) {
            res.status(404).json({mensagem: 'Usuário não encontrado'});
            return;
        }        
        res.status(200).json(findUserByEmail);
    } catch (error:any) {
        res.status(500).json({mensagem: "Error no servidor"});
    }
}