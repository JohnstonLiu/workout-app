import express from 'express';
import {getExercises, postExercise} from '../database.js';
const router = express.Router();

router.get('/:id', async (req, res) => {
    const user_id = req.params.id;
    const exercises = await getExercises(user_id);
    res.status(200).send(exercises);
});

router.post('/', async (req, res) => {
    const { title, user_id } = req.body;
    const exercise = await postExercise(title, user_id);
    res.status(200).send(exercise);
});

export default router;