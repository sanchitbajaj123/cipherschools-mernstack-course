import { createContext, useState } from "react";

// for this we have imported the uuid package and v4 is a function in uuid which will provide us a unique id for each task
import {v4 as  randomUUID} from "uuid";


// TaskContext is a context object which tells that what kind of info we want to share
// it is also a recat component which shares the information to other components which require to read ir
// and provider is that component which we will provide the info to whosoever component want to read it
const TaskContext= createContext();
const TASK_EDITABLE_FIELD_LIST=["title", "decription"];



const TaskProvider= ({children}) =>{
    const [taskList, setTaskList] = useState([]);

    const addNewTask=(task) =>{
        setTaskList([...taskList, {...task, createdDate: new Date(), taskId: randomUUID()}])

    };

    const deleteTask= (taskId)=>{
       setTaskList(taskList.filter((task)=> task.taskId !== taskId));
    };

    const editTask= (task)=>{
        let tempTaskList=[...taskList];
        for(let t of tempTaskList){
            if(t.taskId == task.taskId){
                TASK_EDITABLE_FIELD_LIST.forEach((field)=> t[field] = task[field])
            }
        }
        setTaskList(taskList);
    }

    return (
        <TaskContext.Provider value={{taskList, addNewTask,deleteTask, editTask}}>
            
            {children}
        </TaskContext.Provider>
    );
};

export {TaskProvider};
export default TaskContext;