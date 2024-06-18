// import { Component } from "react";

//using hook
import { useState } from "react"
import Task from "../components/Task";
import AddTask from "../components/AddTask";



const ToDoScreen = () => {
    const [taskList, setTaskList] = useState([]);
    return (
        <>
        <div className="screen">
            <h1 className="ui heading center">To Do List</h1>

            <div>
                <button onClick={(e) => {
                    setTaskList([...taskList, 
                    {
                        title: "Go to gym",
                        description: "Going to gym is good for muscle growth",
                        createdDate: new Date(),
                    },
                ])
                }} className="ui secondary button">Add Task</button>
                <section>

                <div className="ui cards">
{/* key is used when map isnused so that recat DOM knows that which objectis being changed */}
{/* so key is a unique identifier which is going to help react to identify elements whenever necessary */}
                    {taskList.map((task,index) => 
                    <Task task={task} key={index}/>)}
                </div>
                </section>
            </div>
        <AddTask/>
        </div>
        </>
    );
}

export default ToDoScreen;