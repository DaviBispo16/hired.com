import express from 'express';
import { getAllJobs, registerJob} from '../controllers/jobs-controllers';

const router = express.Router();

router.get('/vagas', getAllJobs);
router.post('/vagas', registerJob);

export default router;