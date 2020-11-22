const colors = require('colors');
const express = require('express');
const bodyParser = require('body-parser');

const server = express();

const { PORT } = require('../config');

// Import your Routes
const { UserRoutes } = require('./routes');

// Import your middleware
const { NotFoundMiddleware } = require('./middlewares');

// Don't forget to use a body-parser, express has its own.
server.use(bodyParser.json());

// Create your routes and use them
server.use(UserRoutes);

// Use your middleware
server.use(NotFoundMiddleware);

server.listen(PORT, () => {
  console.log(`Application running on PORT ${PORT} ^_^`.yellow.bold);
});
