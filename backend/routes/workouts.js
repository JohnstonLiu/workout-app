import express from 'express';
import {getWorkouts, getWorkout, createWorkout} from '../database.js';
const router = express.Router();

router.get('/', async (req, res) => {
    const workouts = await getWorkouts();
    res.send(workouts);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const workout = await getWorkout(id);
    res.send(workout);
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