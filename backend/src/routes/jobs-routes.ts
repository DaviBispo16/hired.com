import express from 'express';
import { getAllJobs, registerJob, getJobById} from '../controllers/jobs-controllers';

const router = express.Router();

router.get('/vagas', getAllJobs);
router.post('/vagas', registerJob);
router.get('/vagas/:id', getJobById);

export default router;