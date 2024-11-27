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
}








