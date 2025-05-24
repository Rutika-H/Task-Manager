import React,{useState,useEffect} from 'react';
import axios from 'axios'

function Todos(){
    const[tasks,setTasks]=useState([]);
    const[inputValue,setInputValue]=useState('');

    useEffect(()=>{
        fetchTasks();
    },[]);

    const fetchTasks=async()=>{
        try{
            const response=await axios.get('http://127.0.0.1:8000/api/todos/add/')
            setTasks(response.data)
        }catch(error){
            console.log('error',error);
        }
    }
const toggleCompleted = async () => {
    try {
        if (inputValue.trim() !== '') {
            const response = await axios.post('http://127.0.0.1:8000/api/todos/add/', {
                title: inputValue,
                description: "",
                completed: false
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            setTasks([...tasks, response.data]);
            setInputValue('');
        } 
    } catch(error) {
        console.log('Full error:', error.response?.data);
    }
};
    return(
        <div className="container">
            <div className="todo-app">
                <div className="app-title">
                    <h2>To-do app</h2>
                    <i className="fa-solid fa-book-bookmark"></i>
                </div>
                <div className="row">
                    <input type="text" id="input-box" 
                    placeholder="add your tasks"
                    value={inputValue}
                    onChange={e=>setInputValue(e.target.value)}
                    />
                    <button onClick={toggleCompleted}>Add</button>
                </div>
               


                <ul id="list-container">
                    {tasks.map(task=>(
                        <li key={task.id} onClick={()=>toggleCompleted(task.id)}
                       className={task.completed ? 'checked' : ''}>
                       {task.completed ? <del>{task.title}</del> :
                        task.title}</li>
                    )
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Todos