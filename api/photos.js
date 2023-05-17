const express = require('express');
const apiRouter = express.Router();

const {
    createPhoto,
	getAllPhotosByPostId,
	deletePhoto
} = require('../db/photos');


apiRouter.get('/:postId', async (req, res, next) => {
    try {
        const id = req.params.postId;
        const photos = await getAllPhotosByPostId(id)

        res.send(
            photos
        )
    } catch (error) {
        next(error)
    }
});


// Add new photo
apiRouter.post('/', async (req, res, next) => {
    try {
        const {
			userId,
			postId,
			photo
        } = req.body;

        const photos = await createPhoto({
			userId,
			postId,
			photo
        })

        res.send(
            photos
        )
    } catch (error) {
        next(error)
    }
});

apiRouter.delete('/:photoId', async (req, res, next) => {
    try {
        const id = req.params.photoId;
        const photos = await deletePhoto(id);

        res.send(photos);

    } catch (error) {
        next(error)
    }
});


module.exports = apiRouter;