const express = require('express');
const apiRouter = express.Router();

const {
	createComment,
	getAllCommentsByPostId,
	deleteComment
} = require('../db/comments');


apiRouter.get('/:postId', async (req, res, next) => {
    try {
        const id = req.params.postId;
        const comments = await getAllCommentsByPostId(id)

        res.send(
            comments
        )
    } catch (error) {
        next(error)
    }
});


// Add new comment
apiRouter.post('/', async (req, res, next) => {
    try {
        const {
			userId,
			postId,
			comment
        } = req.body;

        const comments = await createComment({
			userId,
			postId,
			comment
        })

        res.send(
            comments
        )
    } catch (error) {
        next(error)
    }
});

apiRouter.delete('/:commentId', async (req, res, next) => {
    try {
        const id = req.params.commentId;
        const comments = await deleteComment(id);

        res.send(comments);

    } catch (error) {
        next(error)
    }
});


module.exports = apiRouter;