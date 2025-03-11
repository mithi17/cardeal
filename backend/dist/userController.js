// controllers/userController.js
const User = require('../models/userModel');

// Get all users -- http://localhost:8000/api/v1/users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json({
      success: true,
      users: users.map(user => ({
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile
      }))
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Register a new user -- http://localhost:8000/api/v1/users/register
exports.registerUser = async (req, res) => {
  const {
    name,
    mobile,
    email,
    password
  } = req.body;
  try {
    // Create a new user with the provided data
    const user = await User.create({
      name,
      mobile,
      email,
      password
    });
    res.status(201).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// controllers/login.js -- http://localhost:8000/api/v1/users/login
exports.loginUser = async (req, res) => {
  const {
    email,
    password
  } = req.body;
  try {
    // Convert email to lowercase for case-insensitive comparison
    const user = await User.findOne({
      email: email.toLowerCase()
    });
    console.log('User  found:', user); // Log the user object

    // Check if user exists and if the password matches
    if (!user || password !== user.password) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }
    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get a single user by ID  --- http://localhost:8000/api/v1/users/id
exports.getUserById = async (req, res) => {
  const {
    id
  } = req.params; // Get the user ID from the request parameters

  try {
    const user = await User.findById(id); // Fetch the user by ID from the database

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User  not found'
      });
    }
    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile
      }
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};