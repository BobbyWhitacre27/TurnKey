const client = require('./client');

async function createPhoto({
    postId,
    photo,
}) {
    
    const {
        rows: [photos],
    } = await client.query(
        `
    INSERT INTO photos ("postId", photo) 
    VALUES($1, $2) 
    RETURNING *;
    `,
        [postId, photo]
    );

    return photos;
}

async function getAllPhotos() {
    const { rows: photos } = await client.query(`
    SELECT * FROM photos;
    `);

    return photos;
}

async function getAllPhotosByPostId(id) {
    const { rows: photos } = await client.query(`
    SELECT * FROM photos
	WHERE "postId"=${id};
    `);

    return photos;
}


async function deletePhoto(id) {
    const {
        rows: [photos],
    } = await client.query(
        `
        DELETE FROM photos
        WHERE id=$1
        RETURNING *;
    `,
        [id]
    );

    return photos;
}

module.exports = {
    createPhoto,
	getAllPhotosByPostId,
	deletePhoto,
	getAllPhotos
};