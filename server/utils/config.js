if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

module.exports = {
    session: {
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
        key: 'express.sid',
    },
    cors: {
        origin: "*",
        credentials: true,
        optionSuccessStatus: 200,
    }
}