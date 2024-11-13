import express, { Response, Request } from 'express';
import Task from '../models/task.model';

const router = express.Router();

router.post('/tasks', async (req: Request, res: Response): Promise<any> => {
    try {
        const { title, description, category } = req.body;

        if (Object.values({ title, description, category }).some(field => !field)) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newTask = new Task({
            title,
            description,
            category,
        });

        await newTask.save();
        res.status(201).json(newTask);

    } catch (err) {
        console.error('Error creating task:', err);
        res.status(500).json({err: 'Failed to create task'});
    }
});

router.get('/tasks', async (req: Request, res: Response): Promise<any> => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        console.error('Error fetching tasks:', err);
        res.status(500).json({error: 'Failed to fetch tasks'});
    }
})

export default router;