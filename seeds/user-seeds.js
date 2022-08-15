const { User } = require('../models');

const userData = [{
    username: 'Steffan',
    password: 'Carter'

},
{
    username: 'test',
    password: 'testpw'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;