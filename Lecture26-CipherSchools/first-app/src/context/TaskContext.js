import { createContext, useState } from "react";

// TaskContext is a context object which tells that what kind of info we want to share
// it is also a recat component which shares the information to other components which require to read ir
// and provider is that component which we will provide the info to whosoever component want to read it
const TaskContext= createContext();

const TaskProvider= ({children}) =>{
    const [taskList, setTaskList] = useState([]);

    const addNewTask=(task) =>{
        setTaskList([...taskList, {...task, createdDate: new Date()}])

    }

    return (
        <TaskContext.Provider value={{taskList, addNewTask}}>
            
            {children}
        </TaskContext.Provider>
    );
};

export {TaskProvider};
export default TaskContext;