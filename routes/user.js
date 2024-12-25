const express = require('express');
const { User } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.findAll();
    res.render('index', { users });
});

router.post('/add', async (req, res) => {
    const { name } = req.body;
    await User.create({ name });
    res.redirect('/');
});

module.exports = router;