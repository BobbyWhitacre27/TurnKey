const client = require('./client');

async function createComment({
    userId,
	postId,
    comment,
}) {
    
    const {
        rows: [comments],
    } = await client.query(
        `
    INSERT INTO comments ("userId", "postId", comment) 
    VALUES($1, $2, $3) 
    RETURNING *;
    `,
        [userId, postId, comment]
    );

    return comments;
}

async function getAllCommentsByPostId(id) {
    const { rows: comments } = await client.query(`
    SELECT * FROM comments
	WHERE "postId"=${id};
    `);

    return comments;
}

async function getAllComments() {
    const { rows: comments } = await client.query(`
    SELECT * FROM comments;
    `);

    return comments;
}

async function deleteComment(id) {
    const {
        rows: [comments],
    } = await client.query(
        `
        DELETE FROM comments
        WHERE id=$1
        RETURNING *;
    `,
        [id]
    );

    return comments;
}

module.exports = {
    createComment,
	getAllCommentsByPostId,
	deleteComment,
	getAllComments
};