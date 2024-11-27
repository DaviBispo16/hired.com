import { Request, Response } from "express";
import {v4 as uuidv4} from 'uuid';
import Jobs from '../../models/Jobs';

export const getAllJobs = async (req: Request, res: Response) => {
    try {
        const allJobs = await Jobs.findAll();
        res.status(200).json(allJobs);
    }  catch (error:any) {
        res.status(500).json({message: `${error.message}`});
    }
};

export const registerJob = async (req: Request, res: Response) => {
    const {descricao, titulo, telefone, empresa} = req.body;
    try {
        const id = uuidv4();
        const createJob = await Jobs.create({
            id,
            descricao,
            titulo,
            telefone,
            empresa
        });
        res.status(201).json(createJob);
    } catch (error: any) {
        res.status(500).json({message: `${error.message}`});
    }
};

export const getJobById = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const jobById = await Jobs.findByPk(id);
        res.status(200).json(jobById);
    } catch (error: any) {
        res.status(500).json({message: `${error.message}`});
    }
};







