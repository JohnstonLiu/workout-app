import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import workoutRouter from './routes/workouts.js';
import splitRouter from './routes/splits.js';

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke :(');
    console.log(req.path, req.method);
    next();
});

// routing
app.use('/api/splits', splitRouter);
app.use('/api/workouts', workoutRouter);

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
});