const AddTask = () => {
    return (
        <> 
        <h3  className="ui heading center">Add New Task</h3>
               <div className="ui form">
            <form>
                <div className="field">
                    <label>Title</label>
                    <input name="title" type="text" spellCheck="false" data-ms-editor="true" placeholder="Task Title" />
                </div>
                <div className="field">
                    <label>Description</label>
                    <textarea name="description" rows="2" spellCheck="false" data-ms-editor="true" placeholder="Task Description"/>
                </div>
                <button className="ui primary button">
                    Save
                </button>
            </form >
        </div >
        </>

    );
}

export default AddTask;