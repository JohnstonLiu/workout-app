import express from 'express';
import {getWorkouts, postWorkout} from '../database.js';
const router = express.Router();

router.get('/', async (req, res) => {
    const workouts = await getWorkouts();
    res.send(workouts);
});

router.get('/:id', async (req, res) => {
    const split_day_id = req.params.id;
    const workout = await getWorkouts(split_day_id);
    res.status(200).send(workout);
});

router.post('/', async (req, res) => {
    const { title, contents } = req.body;
    const workout = await createWorkout(title, contents);
    res.status(201).send(workout);
});

router.delete('/:id', async (req, res) => {
    res.json({msg: 'DELETE a workout'}); 
});

router.patch('/:id', async (req, res) => {
    res.json({msg: 'PATCH a workout'}); 
});

export default router;