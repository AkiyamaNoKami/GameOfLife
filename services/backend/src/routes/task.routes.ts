import express from "express";
import {
    createTask,
    getAllTasks,
    getInProgressTasks,
    getDoneTasks,
    getDroppedTasks,
    markTaskAsDone,
    markTaskAsDropped
} from "../controllers/task.controller";

const router = express.Router();

router.post('/tasks', createTask);
router.get('/tasks', getAllTasks);
router.get('/tasks/done', getDoneTasks);
router.get('/tasks/inprogress', getInProgressTasks);
router.get('/tasks/dropped', getDroppedTasks);
router.patch('/tasks/:id/mark-done', markTaskAsDone);
router.patch('/tasks/:id/mark-dropped', markTaskAsDropped);

export default router;