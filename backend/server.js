// backend/server.js
const express = require('express');
const { google } = require('googleapis');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Example Route
app.get('/', (req, res) => {
    res.send('Backend is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const { createEvent } = require('./calendar');

app.post('/api/book', async (req, res) => {
    try {
        const bookingDetails = req.body;
        await createEvent(bookingDetails);
        res.status(200).send('Booking successfully added to Google Calendar');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating booking');
    }
});

