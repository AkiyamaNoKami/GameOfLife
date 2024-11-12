import { Request, Response } from "express";
import Task from "../models/task.model";

export const createTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, description, category } = req.body;
        const newTask = new Task({ title, description, category });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (err) {
        res.status(500).json({err: "Failed to create task"});
    }
}