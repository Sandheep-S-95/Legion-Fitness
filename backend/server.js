import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'

import taskRoutes from "./routes/tasks.js"

const app=express();
dotenv.config();

//middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path,res.path)
    next()
})

//db Connection
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT ,()=>{
            console.log("Connected to DB & Listening on port ",process.env.PORT)
        })
    })
    .catch(()=>{
        console.log(error)
    })

app.use('/api/tasks',taskRoutes)

