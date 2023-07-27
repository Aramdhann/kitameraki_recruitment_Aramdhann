import { React } from "react";
import { createTask } from "../../service/api";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { TextField, MaskedTextField } from "@fluentui/react/lib/TextField";
import "./createTask.css";

function CreateTask() {
    let title = "";
    let description = "";
    let due = "";

    const updateTitle = (e) => {
        title = e.target.value;
    };
    const updateDescription = (e) => {
        description = e.target.value;
    };
    const updateDueDate = (e) => {
        due = e.target.value;
    };

    const addNewTask = async () => {
        const response = await createTask(title, description, due);
        document.querySelector(".modal-text").textContent =
            response.data.message;
        document.querySelector(".modal").classList.toggle("hide-modal");
    };

    const closeModal = () => {
        document.querySelector(".modal").classList.toggle("hide-modal");
    };

    return (
        <section className='create-page'>
            <div className='form-container animate__animated animate__backInDown'>
                <div className='modal hide-modal animate__animated animate__tada'>
                    <button className='close-btn' onClick={closeModal}>
                        X
                    </button>
                    <p className='modal-text'></p>
                    <a href='/'>
                        <button className='nav-back-btn'>Back to List</button>
                    </a>
                </div>
                <div className='add-Task-form'>
                    <h1>Create task</h1>
                    <div className='input-container'>
                        <TextField
                            label='Title'
                            type='text'
                            name='title'
                            id='title'
                            placeholder='Title'
                            onChange={(e) => updateTitle(e)}
                            required
                        />
                    </div>
                    <div className='input-container'>
                        <TextField
                            label='Description'
                            type='text'
                            name='description'
                            id='description'
                            placeholder='Description'
                            onChange={(e) => updateDescription(e)}
                            multiline
                            autoAdjustHeight
                        />
                    </div>
                    <div className='input-container'>
                        <TextField
                            label='Due Date'
                            type='date'
                            name='due_date'
                            id='due_date'
                            onChange={(e) => updateDueDate(e)}
                        />
                    </div>
                    <div className='input-container'>
                        <PrimaryButton
                            text='Add New Task'
                            onClick={addNewTask}
                            className='addTask-btn'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CreateTask;
