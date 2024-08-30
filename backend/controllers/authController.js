const { google } = require('googleapis');

// Set up the OAuth2 client with your credentials
const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

// Controller function for handling the OAuth callback
exports.handleOAuthCallback = async (req, res) => {
    try {
        const { code } = req.query;
        const { tokens } = await oauth2Client.getToken(code); // Exchange code for tokens
        oauth2Client.setCredentials(tokens); // Set tokens on the client

        console.log('Tokens:', tokens); // Log tokens, including refresh_token

        // Redirect or respond as needed after obtaining tokens
        res.redirect('/success'); // Example redirection after successful OAuth
    } catch (error) {
        console.error('Error during OAuth callback:', error);
        res.status(500).send('Authentication failed');
    }
};