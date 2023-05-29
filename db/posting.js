const client = require('./client');

async function createPosting({
    title,
    price,
    description,
    type,
	date,
    userId
}) {
    
    const {
        rows: [posting],
    } = await client.query(
        `
    INSERT INTO posting (title, price, description, type, date, "userId") 
    VALUES($1, $2, $3, $4, $5, $6) 
    RETURNING *;
    `,
        [title, price, description, type, date, userId]
    );

    return posting;
}

async function getAllPostings() {
    const { rows: posting } = await client.query(`
    SELECT * FROM posting;
    `);

    return posting;
}

async function getPostingsByType(type) {
    const {
        rows: [posting],
    } = await client.query(
        `
    SELECT * FROM posting
    WHERE type=$1;
  `, [type]);

  return posting;
}


async function getPostingByUserId(id) {
    const {
        rows: [posting],
    } = await client.query(
        `
    SELECT * FROM posting
    WHERE "userId"=${id};
  `);

    return posting;
}

async function updatePostingTitle({
    id,
    title}) {

    const {
        rows: [posting],
    } = await client.query(
        `
      UPDATE posting
      SET title=$1
      WHERE id=${id}
      RETURNING *;
    `,
        [title]
    );

    return posting;
}

async function updatePostingPrice({
    id,
    price}) {

    const {
        rows: [posting],
    } = await client.query(
        `
      UPDATE posting
      SET price=$1
      WHERE id=${id}
      RETURNING *;
    `,
        [price]
    );

    return posting;
}

async function updatePostingDescription({
    id,
    description}) {

    const {
        rows: [posting],
    } = await client.query(
        `
      UPDATE posting
      SET description=$1
      WHERE id=${id}
      RETURNING *;
    `,
        [description]
    );

    return posting;
}

async function updatePostingType({
    id,
    type}) {

    const {
        rows: [posting],
    } = await client.query(
        `
      UPDATE posting
      SET type=$1
      WHERE id=${id}
      RETURNING *;
    `,
        [type]
    );

    return posting;
}

async function deletePosting(id) {
    const {
        rows: [posting],
    } = await client.query(
        `
        DELETE FROM posting
        WHERE id=$1
        RETURNING *;
    `,
        [id]
    );

    return posting;
}

module.exports = {
    createPosting,
	getAllPostings,
	getPostingByUserId,
	updatePostingTitle,
	updatePostingPrice,
	updatePostingDescription,
	updatePostingType,
	deletePosting,
	getPostingsByType
};