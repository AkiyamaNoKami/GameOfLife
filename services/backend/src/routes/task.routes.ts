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
            is_done: false,
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

router.get('/tasks/inprogress', async (req: Request, res: Response): Promise<any> => {
    try {
        const tasks = await Task.find({ is_done: false });
        res.status(200).json(tasks);
    } catch (err) {
        console.error('Error fetching in-progress tasks:', err);
        res.status(500).json({ error: 'Failed to fetch in-progress tasks'});
    }
})

router.get('/tasks/done', async (req: Request, res: Response): Promise<any> => {
    try {
        const tasks = await Task.find({ is_done: true });
        res.status(200).json(tasks);
    } catch (err) {
        console.error('Error fetching done tasks:', err);
        res.status(500).json({ error: 'Failed to fetch done tasks'});
    }
})

router.patch('/tasks/:id/mark-done', async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, { is_done: true }, { new: true });
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({message: 'Task not found'});
        }
    } catch (err) {
        console.error('Error making task at done:', err);
        res.status(500).json({ error: 'Failed to mark task at done' });
    }
})

export default router;