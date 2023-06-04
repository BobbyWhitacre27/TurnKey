const { client } = require('.');
const { createUser } = require('./users');
const { createPosting } = require('./posting');
const { createPhoto } = require('./photos');
const { createComment } = require('./comments');

async function dropTables() {
    try {
        console.log('Dropping all tables...');
        await client.query(`
        DROP TABLE IF EXISTS users CASCADE;
		DROP TABLE IF EXISTS comments;
		DROP TABLE IF EXISTS photos;
		DROP TABLE IF EXISTS posting;
      `);

        console.log('finished dropping tables!');
    } catch (error) {
        console.error('Error dropping tables...');
        throw error;
    }
}

async function createTables() {
    try {
        console.log('Starting to create tables...');
        await client.query(`
      
      CREATE TABLE users (
        id SERIAL PRIMARY KEY, 
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
		isAdmin BOOLEAN
      );
      
      CREATE TABLE posting (
        id SERIAL PRIMARY KEY, 
        title VARCHAR(255) NOT NULL,
        price INTEGER NOT NULL,
        description TEXT,
		type VARCHAR(255) NOT NULL,
		date DATE NOT NULL,
        "userId" INTEGER REFERENCES users(id)
      );

	  CREATE TABLE comments (
        id SERIAL PRIMARY KEY, 
        "userId" INTEGER REFERENCES users(id),
		"postId" INTEGER REFERENCES posting(id),
		comment TEXT
      );

	  CREATE TABLE photos (
        id SERIAL PRIMARY KEY, 
		"postId" INTEGER REFERENCES posting(id),
		photo TEXT
      );
  
      `);
        console.log('finished creating tables!');
    } catch (error) {
        console.error('Error in creating tables...');
        throw error;
    }
}

async function createInitialUsers() {
    try {
        console.log('Starting to create users...');
        const usersToCreate = [
            { username: 'admin', password: '12345678', isAdmin: true },

        ];

        const users = await Promise.all(usersToCreate.map(createUser)); 

        console.log('Users created:');
        console.log(users);
        console.log('Finished creating users!');
    } catch (error) {
        console.error('Error creating users...');
        throw error;
    }
}

async function createInitialPosting() {
    try {
        console.log('Starting to create posting...');
        const postingToCreate = [
            {
                title: "House for sale",
                price: 425000,
                description: "Selling our 3 bedroom 2 bathroom home. Beautiful backyard. New owners will be lucky!",
                type: "buy",
				date: "2000-01-01",
                userId: 1
            },

        ];

        const posting = await Promise.all(postingToCreate.map(createPosting));

        console.log('postings created:');
        console.log(posting);
        console.log('Finished creating posting!');
    } catch (error) { }
}

async function createInitialPhoto() {
    try {
        console.log('Starting to create photo...');
        const photoToCreate = [
            {
                postId: 1,
                photo: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },

        ];

        const photo = await Promise.all(photoToCreate.map(createPhoto));

        console.log('photo created:');
        console.log(photo);
        console.log('Finished creating photo!');
    } catch (error) { }
}

async function createInitialComment() {
    try {
        console.log('Starting to create comment...');
        const commentToCreate = [
            {
                userId: 1,
				postId: 1,
                comment: "I'll take it!",
            },

        ];

        const comment = await Promise.all(commentToCreate.map(createComment));

        console.log('comment created:');
        console.log(comment);
        console.log('Finished creating comment!');
    } catch (error) { }
}

async function rebuildDB() {
    try {
      client.connect();
      await dropTables();
      await createTables();
      await createInitialUsers();
      await createInitialPosting();
	  await createInitialPhoto();
	  await createInitialComment();
    } catch (error) {
      console.log('Error during rebuildDB');
      throw error;
    }
  }
  
  rebuildDB()
    .catch(console.error)
    .finally(() => client.end());