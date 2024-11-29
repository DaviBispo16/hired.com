import express from 'express';
import { getAllJobs, registerJob, getJobById, updateJob, deleteJobById} from '../controllers/jobs-controllers';

const jobsRouter = express.Router();

jobsRouter.get('/vagas', getAllJobs);
jobsRouter.post('/vagas', registerJob);
jobsRouter.get('/vagas/:id', getJobById);
jobsRouter.put('/vagas/:id', updateJob);
jobsRouter.delete('/vagas/:id', deleteJobById);

export default jobsRouter;