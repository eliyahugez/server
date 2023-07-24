const express = require('express');
const handleErrors = require('../../utils/handleErrors');
const router = express.Router();
const { pick, join } = require('lodash');
const { getCards, FindMycards, create, update, like, remove } = require('../modules/cardsAccessData');
const { register, login } = require('../modules/usersAccsessData');

router.get('/', async (req, res) => {
    try {
       
        const cards = await getCards();
        return res.send(cards);
    } catch (error) {
        return handleErrors(res, error.status, error.message);
    }
});
router.get('/my-cards', async (req, res) => {
    const userId = "123456";
    const card =await FindMycards(userId)
    try {
        return res.send(card);
    } catch (error) {
        return handleErrors(res, error.status || 500, error.message);
    }
});
router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    const card = await FindMycards(userId)
    try {
        return res.send(card);
    } catch (error) {
        return handleErrors(res, error.status || 500, error.message);
    }
});
router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    const card = await FindMycards(userId)
    try {
        return res.send(card);
    } catch (error) {
        return handleErrors(res, error.status || 500, error.message);
    }
});
router.post('/:id', async (req, res) => {
    const card = await create(req.body)
    try {
        return res.send(card);
    } catch (error) {
        return handleErrors(res, error.status || 500, error.message);
    }
});
router.put('/:id', async (req, res) => {
    const userId = req.params.id;
    const card = await update(req.body,userId)
    try {
        return res.send(card);
    } catch (error) {
        return handleErrors(res, error.status || 500, error.message);
    }
});
router.patch('/:id', async (req, res) => {
    const idFromParams = req.params.id;
    const userId = "123456";
    const card = await like(idFromParams, userId)
    try {
        return res.send(card);
    } catch (error) {
        return handleErrors(res, error.status || 500, error.message);
    }
});
router.delete('/:id', async (req, res) => {
    const userId = req.params.id;
    const card = await remove(userId)
    try {
        return res.send(card);
    } catch (error) {
        return handleErrors(res, error.status || 500, error.message);
    }
});
router.post('/', async (req, res) => {
    const user = await register(req.body)
    try {
        res.status(201).send(user);
    } catch (error) {
        return handleErrors(res, error.status || 500, error.message);
    }
});
router.post('/login', async (req, res) => {
    const user = await login(req.body)
    try {
        res.send(user);
    } catch (error) {
        return handleErrors(res, error.status || 500, error.message);
    }
});



module.exports = router;