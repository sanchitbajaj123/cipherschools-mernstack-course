import {useState} from "react"

const AddTask = () => {

    const [task,setTask]=useState({
        title:"",
        description:"",
    });

    let handleInputChange = (e)=>{
        // console.log(e.target.value);

        setTask({
            ...task,[e.target.name]: e.target.value
        }

    )
    }

    let onFormSubmit=(e)=>{
        e.preventDefault();
        console.log(task);
    }
    return (
        <> 
        <h3  className="ui heading center">Add New Task</h3>
               <div className="ui form">
            <form onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Title</label>
                    <input name="title" type="text" spellCheck={false} data-ms-editor={true} placeholder="Task Title" onChange={handleInputChange} />
                </div>
                <div className="field">
                    <label>Description</label>
                    <textarea name="description" rows="2" spellCheck={false} data-ms-editor={true} placeholder="Task Description" onChange={handleInputChange}/>
                </div>
                <button type="submit" className="ui primary button">
                    Save
                </button>
            </form >
        </div >
        </>

    );
}

export default AddTask;