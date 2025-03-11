// routes/userRoutes.js
const express = require('express');
const { registerUser , loginUser, getAllUsers, getUserById } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser );
router.post('/login', loginUser );
// Route to get all users
router.get('/', getAllUsers);
// Route to get a single user by ID
router.get('/:id', getUserById); 

module.exports = router;