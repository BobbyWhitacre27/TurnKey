const express = require('express');
const apiRouter = express.Router();

const {
    createPosting,
    getAllPostings,
    getPostingByUserId,
    updatePostingTitle,
	updatePostingPrice,
	updatePostingDescription,
	updatePostingType,
	deletePosting
} = require('../db/posting');


// Get all cards
apiRouter.get('/', async (req, res, next) => {
    try {
        const postings = await getAllPostings()

        res.send(
            postings
        )
    } catch (error) {
        next(error)
    }
});

apiRouter.get('/:userId', async (req, res, next) => {
    try {
        const id = req.params.userId;
        const postings = await getPostingByUserId(id)

        res.send(
            postings
        )
    } catch (error) {
        next(error)
    }
});


// Add new card
apiRouter.post('/', async (req, res, next) => {
    try {
        const {
      title,
	  price,
	  description,
	  type,
	  date,
	  userId
        } = req.body;

        const posting = await createPosting({
			title,
			price,
			description,
			type,
			date,
			userId
        })

        res.send(
            posting
        )
    } catch (error) {
        next(error)
    }
});

apiRouter.patch('/:postId/updatetitle', async (req, res, next) => {

    try {
        const id = req.params.postId;
        const {
            title
        } = req.body;

        const posting= await updatePostingTitle({
            id: id,
            title
        })

        res.send(
            posting
        )
    } catch (error) {
        next(error)
    }
});

apiRouter.patch('/:postId/updateprice', async (req, res, next) => {

    try {
        const id = req.params.postId;
        const {
            price
        } = req.body;

        const posting= await updatePostingPrice({
            id: id,
            price
        })

        res.send(
            posting
        )
    } catch (error) {
        next(error)
    }
});

apiRouter.patch('/:postId/updatedescription', async (req, res, next) => {

    try {
        const id = req.params.postId;
        const {
            description
        } = req.body;

        const posting= await updatePostingDescription({
            id: id,
            description
        })

        res.send(
            posting
        )
    } catch (error) {
        next(error)
    }
});

apiRouter.patch('/:postId/updatetype', async (req, res, next) => {

    try {
        const id = req.params.postId;
        const {
            type
        } = req.body;

        const posting= await updatePostingType({
            id: id,
            type
        })

        res.send(
            posting
        )
    } catch (error) {
        next(error)
    }
});


apiRouter.delete('/:postId', async (req, res, next) => {
    try {
        const id = req.params.postId;
        const posting = await deletePosting(id);

        res.send(posting);

    } catch (error) {
        next(error)
    }
});


module.exports = apiRouter;