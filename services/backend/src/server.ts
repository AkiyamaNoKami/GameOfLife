import express, { Request, Response } from "express";

const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req:Request, res:Response) => {
    res.send('Welcome to the backend!');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
})