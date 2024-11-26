import express from 'express';
import { getJobs} from '../controllers/jobs-controllers';

const router = express.Router();

router.get('/vagas', getJobs);

export default router;