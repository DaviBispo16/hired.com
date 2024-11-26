import express from 'express';
import router from './routes/jobs-routes';
import sequelize from '../config/database';

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.listen(port, async () => {
    try {
        await sequelize.sync();
        console.log(`Server is running on http://localhost:${port}`);
    } catch (error) {
        console.log(`Error`);
    }
});