import { useContext, useState } from "react";
import { formatDate } from "../utils/DateUtils";
import TaskContext from "../context/TaskContext";

const Task = ({task: incomingTask }) => {
    const { title, description, createdDate, taskId }=incomingTask;
    const { deleteTask, editTask } = useContext(TaskContext);

    const [isEditing, setIsEditing] = useState(false)
    const [task, setTask] = useState(incomingTask)
    let handleInputChange = (e) => {
        // console.log(e.target.value);

        setTask({
            ...task, [e.target.name]: e.target.value
        }

        )
    }

    if (isEditing) {
        return (
            <div className="card">
                <div className="content">
                    <div className="ui form">
                        <div className="field">
                            <input name="title" type="text" spellCheck={false} data-ms-editor={true} placeholder="Task Title" onChange={handleInputChange} value={task.title} />
                        </div>
                    
                    <div className="meta">
                        {/* Created date */}
                        {/* {createdDate.toLocaleTimeString()} */}
                        {formatDate(createdDate)}
                    </div>
                    <div className="field">
                        <textarea name="description" rows="2" spellCheck={false} data-ms-editor={true} placeholder="Task Description" onChange={handleInputChange} value={task.description} />
                    </div>
                </div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button" onClick={() => {editTask(task);
                    setIsEditing(false) }}>Save</div>
                        <div className="ui basic red button" onClick={() => setIsEditing(false)}>Cancel</div>
                    </div>
                </div>
            </div>
        );


    } else {

        return (
            <div className="card">
                <div className="content">
                    <div className="header">
                        {/* Go to gym */}
                        {title}
                    </div>
                    <div className="meta">
                        {/* Created date */}
                        {/* {createdDate.toLocaleTimeString()} */}
                        {formatDate(createdDate)}
                    </div>
                    <div className="description">
                        {/* Going to gym is good for muscle growth */}
                        {description}
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button" onClick={() => setIsEditing(true)}>Edit</div>
                        <div className="ui basic red button" onClick={() => deleteTask(taskId)}>Delete</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Task;