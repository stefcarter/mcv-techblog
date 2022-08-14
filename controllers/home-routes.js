const sequelize = require('../config/connection');
const router = require('express').Router();
const { User, Comment, Post } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'content', 'created_at'],
        include: [{
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
        }]
    })
})

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