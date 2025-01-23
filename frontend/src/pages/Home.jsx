import { useEffect } from "react"
import { motion } from "framer-motion"
import {useTaskContext} from "../hooks/useTasksContext.jsx"
//components
import TaskDetails from "../components/TaskDetails";
import TaskForm from "../components/TaskForm";
import Footer from "../components/Footer.jsx";

const Home = ()=>{
    const {tasks,dispatch}=useTaskContext()
    useEffect(()=>{
        const fetchTasks = async () =>{
            const response=await fetch("/api/tasks")
            const json = await response.json()
            console.log("Response received:", json);
            if (response.ok){
                console.log("SUCCESSFULLY CONNECTED")
                dispatch({type:'SET_TASKS',payload:json})               
            }
            console.log("***********************",response)
        }
        
        fetchTasks();
    },[]);
    return(
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="home bg-gradient-to-r from-blue-900 via-blue-700 to-black min-h-screen relative"
        >
            <div className="tasks space-y-4 p-6">
                {tasks && tasks.map((task, index) => (
                    <motion.div
                        key={task._id}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                            duration: 0.5, 
                            delay: index * 0.1 
                        }}
                    >
                        <TaskDetails task={task}/>
                    </motion.div>
                ))}
            </div>
            
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <TaskForm/>
                <Footer />
            </motion.div>
            
        </motion.div>

        
    )
}

export default Home  