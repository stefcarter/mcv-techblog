const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: "post_id"
});

Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "cascade"
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "cascade"
});

Comment.belongsTo(Post, {
    foreignKey: "post_id",
    onDelete: "cascade"
});

User.hasMany(Comment, {
    foreignKey: "comment_id",
    onDelete: "cascade"
});

module.exports = { User, Post, Comment };