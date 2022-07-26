const sequelize = require('../config/connection');
const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    try {
        let homePage = await User.findAll({});
        res.render('home', {homePage});
    } catch(error) {
        res.status(404).send("Big error.")
    }
});

// router.get('/home', async (req, res) => {
//     try {
//         let homePage = await User.findAll({
//         });
//         res.render('home', {homePage});
//     } catch(error) {
//         res.status(404).send("Oops, mongoose ate my homeowork")
//     }
// });

module.exports = router;