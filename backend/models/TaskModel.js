import mongoose from 'mongoose'

const Schema=mongoose.Schema

const taskSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    }

},{timestamps:true})

export const Task = mongoose.model("Task", taskSchema);
