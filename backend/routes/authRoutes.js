const express = require('express');
const { handleOAuthCallback } = require('../controllers/authController'); // Import the controller
const router = express.Router();

// Define the redirect URI route and use the controller function
router.get('/oauth2callback', handleOAuthCallback);

module.exports = router;