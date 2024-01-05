import express from 'express';
import {getSplitDays} from '../database.js';
const router = express.Router();

router.get('/', async (req, res) => {
    res.status(200).send({msg: "You shouldn't be accessing this."});
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const splitDays = await getSplitDays(id);
    res.status(200).send(splitDays);
});

export default router;