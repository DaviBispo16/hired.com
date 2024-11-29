import { Request, Response } from "express";
import {v4 as uuidv4} from 'uuid';
import Jobs from '../../models/Jobs';

export const getAllJobs = async (req: Request, res: Response) => {
    try {
        const allJobs = await Jobs.findAll();
        res.status(200).json(allJobs);
    }  catch (error:any) {
        res.status(500).json({messagem: 'server error'});
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
    } catch (error) {
        res.status(500).json({messagem: 'server error'});
    }
};

export const getJobById = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const jobById = await Jobs.findByPk(id);
        if (jobById == null) {
            res.status(404).json({message: "ID not found"});
            return
        }
        res.status(200).json(jobById);
    } catch (error) {
        res.status(500).json({messagem: 'server error'});
    }
};

export const updateJob = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {descricao, titulo, telefone, empresa} = req.body;
    try {
        const jobById = await Jobs.findByPk(id);
        if (jobById == null) {
            res.status(404).json({message: "ID not found"});
            return
        }
        const changeJob = await Jobs.update({
            descricao,
            titulo,
            telefone, 
            empresa
        }, {
            where: {id}
        });
        res.status(201).json(jobById);
    } catch (error) {
        res.status(500).json({messagem: 'server error'});
    }
};

export const deleteJobById = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const jobById = await Jobs.findByPk(id);
        if (jobById == null) {
            res.status(404).json({mensagem: 'ID not found'});
            return
        }
        const removeJob = await Jobs.destroy({where : {id}});
        res.status(204).json();
    } catch (error) {
        res.status(500).json({messagem: 'server error'});
    }
};









