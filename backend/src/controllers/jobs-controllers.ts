import { Request, Response } from "express";
import Jobs from '../../models/Jobs';

export const getJobs = async (req: Request, res: Response) => {
    try {
        const get = await Jobs.findAll();
        res.status(200).json(get);
    }  catch (error:any) {
        res.status(500).json({message: `${error.message}`});
    }
}


