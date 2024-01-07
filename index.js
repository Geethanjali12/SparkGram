const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

async function connectDB() {
    await mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/${process.env.DB_NAME}?authMechanism=DEFAULT&authSource=admin`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

connectDB();

app.use('/');

const PORT = process.env.DB_PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})