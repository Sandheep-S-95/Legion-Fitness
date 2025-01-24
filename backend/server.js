import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import taskRoutes from "./routes/tasks.js";
import cors from 'cors'

const app = express();
dotenv.config();

app.use(cors({
    origin: ['http://localhost:5173', 'https://your-frontend-domain.com'], // Only frontend URLs
    credentials: true
  }));
  

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.path)  // Fixed: res.path to req.path
    next();
});

// Use the PORT from environment or default to 4000
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Connected to DB & Listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

app.use('/api/tasks', taskRoutes);

export default app;  // Add this for Vercel deployment

