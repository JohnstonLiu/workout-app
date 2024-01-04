import express from 'express';
import {getSplits, getSplit, postSplit, deleteSplit, patchSplit} from '../database.js';
const router = express.Router();

router.get('/', async (req, res) => {
    const splits = await getSplits();
    res.status(200).send(splits);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const split = await getSplit(id);
    res.status(200).send(split);
});

router.post('/', async (req, res) => {
    const { title, contents } = req.body;
    const split = await postSplit(title, contents);
    res.status(200).send(split);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const split = await deleteSplit(id);
    res.status(200).send(split);
});

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const { title, contents } = req.body;
    const split = await patchSplit(id, title, contents);
    res.status(200).send(split);
});

export default router;