import { Trash2 } from 'lucide-react';
import { useTaskContext } from '../hooks/useTasksContext';

const TaskDetails = ({ task }) => {
    const {dispatch}=useTaskContext()
        const handleClick=async()=>{
            console.log("Delete")
            const response = await fetch('/api/tasks/'+ task._id,{
                method:'DELETE'
            })
            const json = await response.json()
    
            if(response.ok){
                dispatch({type:'DELETE_TASK',payload:json})
            }
        }
    return (
        <div className="bg-black border border-blue-500 rounded-lg p-6 mb-6 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] transform hover:-translate-y-1 w-[320px] ml-0">
            {/* Title with a blue heading bar */}
            <div className="flex items-center justify-start bg-blue-600 text-white py-2 px-4 rounded-t-lg">
                <h4 className="text-lg font-bold truncate">{task.title}</h4>
            </div>

            {/* Workout details with spacing */}
            <div className="space-y-4 mt-4">
                <div className="flex items-center justify-start">
                    <span className="text-blue-400 text-sm font-semibold">Load:</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-md border border-blue-500/30 text-gray-300 text-sm ml-2">
                        {task.load} kg
                    </span>
                </div>

                <div className="flex items-center justify-start">
                    <span className="text-blue-400 text-sm font-semibold">Reps:</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-md border border-blue-500/30 text-gray-300 text-sm ml-2">
                        {task.reps}
                    </span>
                </div>
            </div>

            {/* Delete button */}
            <button className="mt-4 text-red-400 hover:text-red-300 transition-colors duration-300 flex items-center space-x-1 text-xs justify-start"
                onClick={handleClick}>
                <Trash2 className="w-4 h-4" />
                <span>Delete workout</span>
            </button>
        </div>
    );
};

export default TaskDetails;
