import { useState } from "react";
import { useTaskContext } from "../hooks/useTasksContext";
import { Dumbbell, Plus } from 'lucide-react';

const TaskForm = () => {
    const { dispatch } = useTaskContext();
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const task = { title, load, reps };
        const response = await fetch("/api/tasks", {
            method: "POST",
            body: JSON.stringify(task),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            console.log("New task added", json);
            dispatch({ type: "CREATE_TASK", payload: json });
        }
    };

    return (
        <div className="fixed right-4 top-20 w-full max-w-md p-6 md:right-6 md:top-24">
            <form onSubmit={handleSubmit} 
                  className="bg-black border border-blue-500 rounded-lg shadow-lg 
                           shadow-blue-500/20 p-6 transform transition-all duration-300
                           hover:shadow-blue-500/30 hover:scale-[1.02]">
                
                {/* Header */}
                <div className="flex items-center space-x-3 mb-6">
                    <Dumbbell className="w-6 h-6 text-blue-500" />
                    <h3 className="text-2xl font-bold text-white">
                        Add New Workout
                    </h3>
                </div>

                {/* Input Fields */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-blue-400 font-semibold mb-2">
                            Exercise Title
                        </label>
                        <input 
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            className="w-full px-4 py-3 bg-gray-900 border border-blue-500/50 
                                     rounded-lg text-white placeholder-gray-400
                                     focus:outline-none focus:border-blue-400 focus:ring-1 
                                     focus:ring-blue-400 transition-all duration-300"
                            placeholder="e.g., Bench Press"
                        />
                    </div>

                    <div>
                        <label className="block text-blue-400 font-semibold mb-2">
                            Load (kg)
                        </label>
                        <input 
                            type="number"
                            onChange={(e) => setLoad(e.target.value)}
                            value={load}
                            className="w-full px-4 py-3 bg-gray-900 border border-blue-500/50 
                                     rounded-lg text-white placeholder-gray-400
                                     focus:outline-none focus:border-blue-400 focus:ring-1 
                                     focus:ring-blue-400 transition-all duration-300"
                            placeholder="0"
                        />
                    </div>

                    <div>
                        <label className="block text-blue-400 font-semibold mb-2">
                            Reps
                        </label>
                        <input 
                            type="number"
                            onChange={(e) => setReps(e.target.value)}
                            value={reps}
                            className="w-full px-4 py-3 bg-gray-900 border border-blue-500/50 
                                     rounded-lg text-white placeholder-gray-400
                                     focus:outline-none focus:border-blue-400 focus:ring-1 
                                     focus:ring-blue-400 transition-all duration-300"
                            placeholder="0"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button 
                    className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold 
                             py-3 px-4 rounded-lg flex items-center justify-center space-x-2
                             transform transition-all duration-300 hover:scale-105
                             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 
                             focus:ring-offset-black shadow-lg shadow-blue-600/30"
                >
                    <Plus className="w-5 h-5" />
                    <span>Add Workout</span>
                </button>

                {/* Error Message */}
                {error && (
                    <div className="mt-4 p-4 bg-red-900/50 border border-red-500 
                                  rounded-lg text-red-400 text-sm">
                        {error}
                    </div>
                )}
            </form>
        </div>
    );
};

export default TaskForm;