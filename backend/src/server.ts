import express from 'express';
import jobsRouter from './routes/jobs-routes';
import sequelize from '../config/database';
import usersRouter from './routes/users-routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(jobsRouter);
app.use(usersRouter);

app.listen(port, async () => {
    try {
        await sequelize.sync();
        console.log(`Server is running on http://localhost:${port}`);
    } catch (error) {
        console.log(`Error`);
    }
});