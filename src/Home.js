import { useState } from "react";


function Home(props){
    const [todos, setTodos]= useState([]);
    const [task, setTask]=useState('');
    const [priority, setPriority]= useState('');
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        props.addTodo(task, priority)
        
        setTask("");
        event.target.reset();

    } ;
    const deleteTodo = (id) => {
        if (window.confirm('Do you want to remove a task from the todo list?')) {
            const updateTodos = props.todos.filter((todos) => todos.id !== id);
            props.setTodos(updateTodos);
        }
    };
    // update todo
    const editTodo=(id)=>{
        const handeEdit = todos.find((newId)=> newId.id === id);
        

    }



    return(
        <div className="TodoForm">


            <div className="todo-app" onSubmit={handleSubmit}>
                <h2>What's your task for the day</h2>
                <form className="todo-form">
                    <input className="todo-input" onChange={(event) => setTask(event.target.value
                    )} type="text" required placeholder=" Task to do"></input>
                    <select onChange={(event)=>setPriority(event.target.value)}>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                    <button type="Submit" className="todo-btn"> Add Task</button>
                    <div className="todo-row">



                        <table className="todo-table">
                            <thead>
                                <tr>
                                    <th>Task Name</th>
                                    <th>Priority</th>
                                    <th>Todo Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.todos.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.text}</td>
                                        <td>{item.priority}</td>     
                                        <button onClick={()=>deleteTodo(item.id)} className="btn btn-danger">Delete</button>
                                        <button onClick={()=>editTodo(item.id)} className="btn btn-success">Edit</button>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>






                        
                        
                        

                    </div>
                </form>


            </div>

        </div>

        

    );
}
export default Home;

