// import { Component } from "react";
import { useState } from "react";
import AddTask from "./components/AddTask";
import ToDoScreen from "./screens/ToDoScreen";
// for this i used the react router dom package from npm website 
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { TaskProvider } from "./context/TaskContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ToDoScreen />
  },
  {
    path:"/add-task",
    element:<AddTask/>
  }
])

const App = () => {
  // const [tasks,setTasks]=useState([]);



  return (
    <TaskProvider>
      <RouterProvider router={router} />;
    </TaskProvider>
  )
}

export default App;


//error giving code
// const App = () => {
//   // const [tasks,setTasks]=useState([]);

//   const {taskList, addNewTask} = useContext(TaskContext);

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <ToDoScreen taskList={taskList}/>
//     },
//     {
//       path:"/add-task",
//       element:<AddTask onSubmit={addNewTask} />
//     }
//   ])

//   return <RouterProvider router={router} />;
// }

// export default App;