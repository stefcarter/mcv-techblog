const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const session = require('express-session');

router.get('/', async (req, res) => {
    res.render('all');
});

module.exports = router;