import { useEffect , useState } from "react"
import {useTaskContext} from "../hooks/useTasksContext.jsx"
//components
import TaskDetails from "../components/TaskDetails";
import TaskForm from "../components/TaskForm";

const Home = ()=>{
    const {tasks,dispatch}=useTaskContext()
    // const [tasks, setTasks]=useState(null) //REPLACED BY CONTEXT
    useEffect(()=>{
        const fetchTasks = async () =>{
            const response=await fetch("/api/tasks")
            const json = await response.json()
            console.log("Response received:", json);
            if (response.ok){
                // setTasks(json)
                console.log("SUCCESSFULLY CONNECTED")
                dispatch({type:'SET_TASKS',payload:json})               
            }
            console.log("***********************",response)
        }
        
        fetchTasks();
    },[]);
    return(
        <div className="home bg-gradient-to-r from-blue-900 via-blue-700 to-black min-h-screen relative">
            <div className="tasks">
                {tasks && tasks.map((task)=>(
                    <TaskDetails key={task._id} task={task}/>
                ))}
            </div>
            <TaskForm/>
        </div>
    )
}

export default Home