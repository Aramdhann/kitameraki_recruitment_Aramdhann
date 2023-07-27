import axios from "axios";

const URL = "http://localhost:8082";

export const getTasks = async () => {
    try {
        return await axios.get(`${URL}`);
    } catch (error) {
        console.log("Error while calling get task API", error);
    }
};

export const getTask = async (id) => {
    try {
        return await axios.get(`${URL}/editTask/${id}`);
    } catch (error) {
        console.log("Error while calling get task API", error);
    }
};

export const editTask = async (taskDetails) => {
    try {
        return await axios.put(
            `${URL}/editTask/${taskDetails.id}`,
            taskDetails
        );
    } catch (error) {
        console.log("Error while calling edit task API", error);
    }
};

export const createTask = async (title, description, due) => {
    try {
        const taskDetails = {
            title: title,
            description: description,
            due: due,
        };

        return await axios.post(`${URL}/createTask`, taskDetails);
    } catch (error) {
        console.log("Error while calling add task API", error);
    }
};

export const deleteTask = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log("Error while calling delete task API", error);
    }
};
