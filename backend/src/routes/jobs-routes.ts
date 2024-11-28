import express from 'express';
import { getAllJobs, registerJob, getJobById, updateJob, deleteJobById} from '../controllers/jobs-controllers';

const router = express.Router();

router.get('/vagas', getAllJobs);
router.post('/vagas', registerJob);
router.get('/vagas/:id', getJobById);
router.put('/vagas/:id', updateJob);
router.delete('/vagas/:id', deleteJobById);

export default router;