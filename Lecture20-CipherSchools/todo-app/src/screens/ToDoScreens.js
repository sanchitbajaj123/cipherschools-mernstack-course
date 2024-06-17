import {useState} from "react"
import Task from "../components/Task"
function ToDoScreen(){
    const[tasklist,settasklist] =useState([]);
    return (
        <div className="screen"><h1 className="ui heading center">To Do List</h1>
            <div>
                <button onClick={(e) => {
                    settasklist([...tasklist,{
                        title:"Gym",
                        description:"going to gym is good"
                    }])
                    console.log(tasklist);
                }} className="ui secondary button">Add Task</button>
            </div>
           {tasklist.map(()=>(
            <Task />
           ))}
        </div>
    )

}
export default ToDoScreen;
