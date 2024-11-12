import express, { Request, Response } from "express";
import connectMongo from "./database/mongo";
import mongoose from "mongoose";

const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectMongo()

app.get('/', (req:Request, res:Response) => {
    res.send('Welcome to the backend!');
});

app.get('/check-db', async (req:Request, res:Response) => {
    try {
        const state = mongoose.connection.readyState;
        if (state === 1) {
            res.send('MongoDB connection successfully!');
        } else {
            res.send('MongoDB connection failed');
        }
    } catch (err) {
        res.status(500).send('Error checking connecting to mongoDB');
    }
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
})