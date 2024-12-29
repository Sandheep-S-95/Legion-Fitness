import {Task} from "../models/TaskModel.js"
import mongoose from "mongoose"

//get a single task
const getTask=async(req,res) =>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such task"})
    }
    const task=await Task.findById(id)

    if(!task){
        return res.status(404).json({error: "No such task"})
    }

    res.status(200).json(task)
}


//get all tasks

const getTasks=async(req,res) =>{
    const tasks=await Task.find({}).sort({createdAt:-1})
    res.status(200).json(tasks)
}

//insert a task
const createTask=async(req,res)=>{
    const{title,reps,load}=req.body;
    try{
        const task= await Task.create({title,reps,load})
        res.status(200).json(task)
    }catch(error){
        res.status(400).json({error:"Could not create document"})
    }
}

//update a task
const updateTask=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({msg:"Error, no such task"})
    }
    const task= await Task.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!task){
        return res.status(404).json({error: "No such task"})
    }

    res.status(200).json(task)


}
//delete a task
const deleteTask=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({msg:"Error, no such task"})
    }
    const task= await Task.findOneAndDelete({_id:id})

    if(!task){
        return res.status(404).json({error: "No such task"})
    }

    res.status(200).json(task)

}

export { getTask, getTasks, createTask, updateTask, deleteTask };
