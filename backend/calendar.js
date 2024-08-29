// backend/calendar.js
const { google } = require('googleapis');
const { OAuth2 } = google.auth;

const oAuth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
);

oAuth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
});

const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

const createEvent = (bookingDetails) => {
    const event = {
        summary: `Service Booking: ${bookingDetails.service}`,
        description: bookingDetails.notes,
        start: {
            dateTime: bookingDetails.startDateTime,
            timeZone: 'America/New_York',
        },
        end: {
            dateTime: bookingDetails.endDateTime,
            timeZone: 'America/New_York',
        },
        attendees: [{ email: bookingDetails.email }],
    };

    return calendar.events.insert({
        calendarId: 'primary',
        resource: event,
    });
};

module.exports = { createEvent };
