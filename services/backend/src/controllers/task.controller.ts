import { Request, Response } from "express";
import Task from "../models/task.model";

export const createTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, description, category } = req.body;

        if (Object.values({ title, description, category }).some(field => !field)) {
            res.status(400).json({ message: "Missing required field" });
            return;
        }

        const newTask = new Task({
            title,
            description,
            category,
            is_done: false,
            is_dropped: false,
        });

        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (err) {
        console.error('Error creating task:', err)
        res.status(500).json({err: "Failed to create task"});
    }
};

export const getAllTasks = async (_: Request, res: Response): Promise<any> => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        console.error('Error fetching tasks:', err);
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
};

export const getInProgressTasks = async (_: Request, res: Response): Promise<any> => {
    try {
        const tasks = await Task.find({ is_done: false });
        res.status(200).json(tasks);
    } catch (err) {
        console.error('Error fetching in-progress tasks:', err);
        res.status(500).json({error: "Failed to fetch in-progress tasks"});
    }
};

export const getDoneTasks = async (_: Request, res: Response): Promise<any> => {
    try {
        const tasks = await Task.find({ is_done: true});
        res.status(200).json(tasks);
    } catch (err) {
        console.error("Error fetching done tasks:", err);
        res.status(500).json({ error: 'Failed to fetch done tasks'});
    }
};

export const getDroppedTasks = async (_: Request, res: Response): Promise<any> => {
    try {
        const tasks = await Task.find({ is_dropped: true });
        res.status(200).json(tasks);
    } catch (err) {
        console.error('Error fetching dropped tasks:', err);
        res.status(500).json({ error: 'Failed to detch dropped tasks' });
    }
};

export const markTaskAsDone = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, {is_done: true, is_dropped: false}, {new: true});
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({message: 'Task not found'});
        }
    } catch (err) {
        console.error('Error marking task as done:', err);
        res.status(500).json({error: 'Failed to mark task as done'});
    }
};

export const markTaskAsDropped = async (req: Request, res: Response): Promise<any> => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, {is_dropped: true, is_done: false}, {new: true});
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({message: 'Task not found'});
        }
    } catch (err) {
        console.error('Error making task as dropped', err);
        res.status(500)
            .json({error: 'Failed to mark task as dropped'});
    }
}