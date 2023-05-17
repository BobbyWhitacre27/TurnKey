const express = require('express');
const apiRouter = require('express').Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
require('dotenv').config();

apiRouter.get('/', (req, res, next) => {
  res.send({
    message: 'This is the TurnKey API!',
  });
});

// place your routers here
// ROUTER: /api/users
const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

// ROUTER: /api/posting
const posting = require('./posting');
apiRouter.use('/posting', posting);

// ROUTER: /api/photos
const photos = require('./photos');
apiRouter.use('/photos', photos);

// ROUTER: /api/comments
const comments = require('./comments');
apiRouter.use('/comments', comments);

// ROUTER:
apiRouter.use('*', async (req, res, next) => {
  res.status(404).json({ message: '404 not found' });
});

module.exports = apiRouter;