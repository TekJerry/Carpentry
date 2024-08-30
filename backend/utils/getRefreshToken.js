// /backend/utils/getRefreshToken.js

const { google } = require('googleapis');
const express = require('express');
const open = require('open');
require('dotenv').config();

const app = express();
const PORT = 4000; // Temporary port for the OAuth flow

// Set up the OAuth2 client with your credentials
const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

// Generate the URL for obtaining user authorization
const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline', // 'offline' to get a refresh token
    scope: ['https://www.googleapis.com/auth/calendar'], // Google Calendar API scope
});

// Step 1: Open the URL in the browser
console.log('Authorize this app by visiting this URL:', authUrl);
open(authUrl);

// Step 2: Set up the redirect URI route to capture the authorization code
app.get('/oauth2callback', async (req, res) => {
    const code = req.query.code;
    try {
        const { tokens } = await oauth2Client.getToken(code); // Exchange code for tokens
        console.log('Your refresh token is:', tokens.refresh_token); // Log the refresh token
        res.send('Authorization complete! Check your console for the refresh token.');
        process.exit(); // Exit the process after obtaining the token
    } catch (error) {
        console.error('Error retrieving refresh token:', error);
        res.send('Error retrieving refresh token. Check your console for more details.');
    }
});

// Step 3: Start the temporary server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
