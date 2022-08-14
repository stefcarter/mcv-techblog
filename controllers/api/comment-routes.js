const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment } = require('../../models');

router.get('/', (req, res) => {
    Comment.findAll({})
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
});

router.get('/:id', (req, res) => {
    Comment.findAll({
        where: { id: req.params.id }
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        res.status(500).json(err)
        console.log(err)
    })
});

router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Comment.create({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
    }
});

router.put('/:id', withAuth, (req, res) => {
    Comment.update({
        comment_text: req.body.comment_text
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if(!dbCommentData) {
            res.status(404).json({ message: 'Comment not found'})
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        res.status(500).json(err)
        console.log(err)
    })
});


router.delete('/:id', withAuth, (req, res)=> {
    Comment.destroy({
        where: { id: req.params.id}
    })
    .then(dbCommentData => {
        if(!dbCommentData) {
            res.status(404).json({ message: 'Comment not found'})
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        res.status(500).json(err)
        console.log(err)
    })
});

module.exports = router;