// testOpen.js
const open = require('open');

// This should open a URL in your default browser
open('https://www.google.com')
    .then(() => {
        console.log('Browser opened successfully!');
    })
    .catch((error) => {
        console.error('Failed to open browser:', error);
    });
