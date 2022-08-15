const Post = require('../models');

const postData = [{
    title: 'Post 1',
    content: 'Test',
    user_id: 1

},
{
    title: 'Post 2',
    content: 'Test 2',
    user_id: 2
},
{
    title: 'Post 3',
    content: 'Test 3',
    user_id: 3
}
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;