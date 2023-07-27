import React, { useState, useEffect } from "react";
import { getTasks, deleteTask } from "../../src/service/api";
import "./taskList.css";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import { SharedColors } from "@fluentui/theme";

const temp = [
    {
        id: 0,
        title: "",
        description: "",
        due: "",
    },
];

const TasksList = () => {
    const [tasks, setTasks] = useState(temp);

    useEffect(() => {
        getAllTask();
    }, []);

    const getAllTask = async () => {
        let response = await getTasks();
        setTasks(response.data);
    };

    const deleteTaskFromCollection = async (id) => {
        const response = await deleteTask(id);
        document.querySelector(".modal-text").textContent =
            response.data.message;
        document.querySelector(".modal").classList.toggle("hide-modal");
    };

    const closeModal = () => {
        document.querySelector(".modal").classList.toggle("hide-modal");
    };

    return (
        <section className='task-page'>
            <div className='modal hide-modal'>
                <button className='close-btn' onClick={closeModal}>
                    X
                </button>
                <p className='modal-text'></p>
                <a href='/'>
                    <button className='nav-back-btn'>Back to List</button>
                </a>
            </div>
            <a href={`/createTask`}>
                <DefaultButton
                    text='+ Add New Task'
                    style={{ color: SharedColors.green10 }}
                />
            </a>
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <div className='task-card'>
                        <div className='book-card-header'>
                            <h4>
                                Title:{" "}
                                <span className='light-text'>{task.title}</span>
                            </h4>
                            <h4>
                                Description:{" "}
                                <span className='light-text'>
                                    {task.description}
                                </span>
                            </h4>
                            <h4>
                                Due Date:{" "}
                                <span className='light-text'>{task.due}</span>
                            </h4>
                        </div>
                        <div className='task-card-buttons'>
                            <a href={`editTask/${task.id}`}>
                                <DefaultButton text='Edit' />
                            </a>
                            <PrimaryButton
                                text='Delete'
                                onClick={() =>
                                    deleteTaskFromCollection(task.id)
                                }
                                className='delete-buton'
                            />
                        </div>
                    </div>
                ))
            ) : (
                <div className='book-card'>
                    <div className='book-card-header'>
                        <h2 className='light-text'>Collection is Empty!</h2>
                    </div>
                </div>
            )}
        </section>
    );
};
export default TasksList;
