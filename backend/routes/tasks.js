import express from "express"
import {Task} from "../models/TaskModel.js"
import { getTask, getTasks, createTask, updateTask, deleteTask } from "../controllers/taskController.js"

const router=express.Router();

//GET all tasks
router.get("/",getTasks)

//GET a single task
router.get("/:id",getTask)

//POST a new workout
router.post("/",createTask)

//DELETE a workout
router.delete("/:id",deleteTask)

//UPDATE a workout
router.patch("/:id",updateTask)

export default router