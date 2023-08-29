const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        typr: String,
        required: true,
    }
});