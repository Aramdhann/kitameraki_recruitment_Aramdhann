import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTask, editTask } from "../../service/api";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { TextField, MaskedTextField } from "@fluentui/react/lib/TextField";
import "./editTask.css";

const temp = [
    {
        id: 0,
        title: "",
        description: "",
        due: "",
    },
];

function EditTask() {
    const [task, setTask] = useState(temp);
    const { id } = useParams();

    useEffect(() => {
        loadTaskDetails(id);
    }, [id]);

    const loadTaskDetails = async (id) => {
        const response = await getTask(id);
        setTask(response.data);
    };
    console.log(task);
    const onValueChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const updateNewTask = async () => {
        const response = await editTask(task);
        document.querySelector(".modal-text").textContent =
            response.data.message;
        document.querySelector(".modal").classList.toggle("hide-modal");
    };

    const closeModal = () => {
        document.querySelector(".modal").classList.toggle("hide-modal");
    };

    return (
        <section className='edit-page'>
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
                    <h1>Edit task details</h1>
                    <div className='input-container'>
                        <TextField
                            label='Title'
                            type='text'
                            name='title'
                            id='title'
                            placeholder='Title'
                            onChange={(e) => onValueChange(e)}
                            value={task.title}
                        />
                    </div>
                    <div className='input-container'>
                        <TextField
                            label='Description'
                            type='text'
                            name='description'
                            id='description'
                            placeholder='Description'
                            onChange={(e) => onValueChange(e)}
                            value={task.description}
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
                            onChange={(e) => onValueChange(e)}
                            value={task.due}
                        />
                    </div>
                    <div className='input-container'>
                        <PrimaryButton
                            text='Edit Task'
                            onClick={updateNewTask}
                            className='addTask-btn'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EditTask;
