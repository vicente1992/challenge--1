
const router = require('express').Router();

// Import your Controllers
const { UsersController } = require('../controllers');


// Create your routes...
router.post('/users', UsersController.createUser);
router.get('/users', UsersController.getUsers);

module.exports = router;
