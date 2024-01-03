import express from 'express';
import {getSplits, getSplit, createSplit} from '../database.js';
const router = express.Router();

router.get('/', async (req, res) => {
    const splits = await getSplits();
    res.send(splits);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const split = await getSplit(id);
    res.send(split);
});

router.post('/', async (req, res) => {
    const { title, contents } = req.body;
    const split = await createSplit(title, contents);
    res.status(201).send(split);
});

router.delete('/:id', async (req, res) => {
    res.json({msg: 'DELETE a split'}); 
});

router.patch('/:id', async (req, res) => {
    res.json({msg: 'PATCH a split'}); 
});

export default router;