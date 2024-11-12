import express, { Request, Response } from "express";
import cors from "cors";
import connectMongo from "./database/mongo";
import mongoose from "mongoose";
import dotenv from "dotenv";
import taskRoutes from "./routes/task.routes";


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())

app.use(express.json());

connectMongo()

app.use('/api', taskRoutes)

app.use((err: any, req: Request, res: Response, next: any) => {
    console.error(err.stack);
    res.status(500).send({error: err.message || 'Internal Server Error'});
})

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