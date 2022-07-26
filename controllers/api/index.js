const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');
const session = require('express-session');

router.get('/', async (req, res) => {
    try {
        let homePage = await User.findAll({});
        res.render('home', {homePage});
    } catch(error) {
        res.status(404).send("Big error.")
    }
});

module.exports = router;