const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const keyRoutes = require('./routes/keyRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.get('/', (req, res) => {
    res.redirect('/auth/login');
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

// Database connection
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));

// Routes
app.use('/auth', authRoutes);
app.use('/keys', keyRoutes);

// Serve static files (Frontend)
app.use(express.static('views'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
