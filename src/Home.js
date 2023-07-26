import { useState } from "react";



function Home() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('');

    const handleAddTask = () => {
        if (task.trim() !== '') {
            setTodos([...todos, { text: task, priority }])
            setTask('');
            setPriority('');
        }

    }
    const handleDeleteTask = (index) => {
        const updatedTasks = todos.filter((task, i) => i !== index)
        setTodos(updatedTasks)
    };

    const handleUpdatePriority = (index, newPriority) => {
        const updatedTasks = todos.map((task, i) => {
            if (i === index) {
                return { ...task, priority: newPriority };

            }
            return task;
        })
        setTodos(updatedTasks)

    }
    const priorityClasses = {
        low: 'priority-low',
        medium: "priority-medium",
        high: "priority-high"
    }


    return (
        <div className="TodoForm">
            <div className="todo-group">
                <div className="todo-content">
                    <h1>Tasks to do</h1>
                    <div className="input">
                        <input type="text" placeholder="Add a new task" onChange={(event) => setTask(event.target.value)}></input>
                        <button onClick={handleAddTask}>Add Taks</button>
                        <select onChange={(event) => setPriority(event.target.value)}>
                            <option value=" ">select</option>
                            <option value="low" className="priority-low">Low</option>
                            <option value="medium" className="priority-medium">Medium</option>
                            <option value="high" className="priority-high">High</option>
                        </select>
                        <div className="added-task">
                            {todos.map((tasks, index) => (
                                <div key={index} className={`task-item ${priorityClasses[tasks.priority]}`}>
                                    <div className="task-info">
                                        <h2>{tasks.text}</h2>
                                        <h1 className={`priority-circle ${priorityClasses[tasks.priority]}`}></h1>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="delete"
                                        x="0"
                                        y="0"
                                        version="1.1"
                                        viewBox="0 0 52 52"
                                        xmlSpace="preserve"
                                        onClick={() => handleDeleteTask(index)}
                                    >
                                        <path d="m33.916 18.66-1.099 22.083a1 1 0 0 1-.998.95h-.05a1 1 0 0 1-.95-1.05l1.094-21.983h-4.916v22.033a1 1 0 1 1-2 0V18.66H20.08l1.094 21.983a1 1 0 0 1-.95 1.05h-.05a1 1 0 0 1-.998-.95L18.078 18.66H9.855c-.087 0-.173-.01-.26-.013l2.56 27.403a4.333 4.333 0 0 0 4.33 3.95h19.02c2.26 0 4.12-1.7 4.33-3.95l2.56-27.403c-.084.004-.166.013-.25.013h-8.23z"></path>
                                        <path
                                            fill="#3c93c9"
                                            d="M42.145 8.85h-7.52V6.63c0-2.56-2.07-4.63-4.63-4.63h-8c-2.55 0-4.63 2.07-4.63 4.63v2.22h-7.51c-1.93 0-3.49 1.56-3.49 3.49v.83c0 1.92 1.56 3.49 3.49 3.49h32.29a3.5 3.5 0 0 0 3.49-3.49v-.83c0-1.93-1.57-3.49-3.49-3.49zm-9.52 0h-13.26V6.63c0-1.45 1.18-2.63 2.63-2.63h8c1.45 0 2.63 1.18 2.63 2.63v2.22z">
                                        </path>
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        id="edit"
                                        className="update"
                                        fill="white"
                                       
                                        onClick={()=>handleUpdatePriority(index, tasks.priority )}>
                                        <path
                                            fill="white"
                                            d="M13.6568542,2.34314575 C14.4379028,3.12419433 14.4379028,4.39052429 13.6568542,5.17157288 L6.27039414,12.558033 C5.94999708,12.87843 5.54854738,13.105727 5.10896625,13.2156223 L2.81796695,13.7883721 C2.45177672,13.8799197 2.12008033,13.5482233 2.21162789,13.182033 L2.78437771,10.8910338 C2.894273,10.4514526 3.12156995,10.0500029 3.44196701,9.72960586 L10.8284271,2.34314575 C11.6094757,1.56209717 12.8758057,1.56209717 13.6568542,2.34314575 Z M10.1212441,4.46435931 L4.14907379,10.4367126 C3.95683556,10.6289509 3.82045738,10.8698207 3.75452021,11.1335694 L3.38388341,12.6161166 L4.86643062,12.2454798 C5.1301793,12.1795426 5.37104912,12.0431644 5.56328736,11.8509262 L11.5352441,5.87835931 L10.1212441,4.46435931 Z M11.5355339,3.05025253 L10.8282441,3.75735931 L12.2422441,5.17135931 L12.9497475,4.46446609 C13.3402718,4.0739418 13.3402718,3.44077682 12.9497475,3.05025253 C12.5592232,2.65972824 11.9260582,2.65972824 11.5355339,3.05025253 Z">
                                        </path>
                                    </svg>

                                </div>


                            ))}

                        </div>



                    </div>

                </div>
            </div>


        </div>


    );
}
export default Home;

//