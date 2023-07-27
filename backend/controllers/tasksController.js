const data = {
    tasks: require("../model/tasks.json"),
    setTasks: function (data) {
        this.tasks = data;
    },
};

const fsPromises = require("fs").promises;
const path = require("path");

// get all data
const getAllTask = (req, res) => {
    res.json(data.tasks);
};

const getTask = (req, res) => {
    const task = data.tasks.find((ts) => ts.id === parseInt(req.params.id));
    if (!task) {
        return res.json({
            message: `Task ID ${req.params.id} not found!`,
        });
    }
    res.json(task);
};

// post data
const createTask = async (req, res) => {
    const newTask = {
        id: data.tasks?.length ? data.tasks[data.tasks.length - 1].id + 1 : 1,
        title: req.body.title,
        description: req.body.description,
        due: req.body.due,
    };

    if (!newTask.title) {
        return res.json({
            message: "Please enter The Title!",
        });
    }

    if (!newTask.description && !newTask.due) {
        newTask.description = "No description";
        newTask.due = "No due date";
    }

    data.setTasks([...data.tasks, newTask]);
    await fsPromises.writeFile(
        path.join(__dirname, "..", "model", "tasks.json"),
        JSON.stringify(data.tasks)
    );
    res.status(201).json({ message: "Task added!" });
};

// update data
const updateTask = async (req, res) => {
    const updatedTask = data.tasks.find(
        (ts) => ts.id === parseInt(req.body.id)
    );
    console.log(req.body);

    if (!updatedTask) {
        return res.json({
            message: `Task with ID ${req.body.id} was not found`,
        });
    }

    if (!req.body.title) {
        return res.json({
            message: "Please do not leave empty fields!",
        });
    }

    if (req.body.title) updatedTask.title = req.body.title;
    if (req.body.description) updatedTask.description = req.body.description;
    if (req.body.due) updatedTask.due = req.body.due;

    const filteredArray = data.tasks.filter(
        (ts) => ts.id !== parseInt(req.body.id)
    );
    const unsortedArray = [...filteredArray, updatedTask];

    data.setTasks(
        unsortedArray.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
    );
    await fsPromises.writeFile(
        path.join(__dirname, "..", "model", "tasks.json"),
        JSON.stringify(data.tasks)
    );
    res.json({ message: "Yeay Task updated!" });
};

const deleteTask = async (req, res) => {
    const task = data.tasks.find((ts) => ts.id === parseInt(req.params.id));

    if (!task) {
        return res.json({
            message: `Task with ID ${req.params.id} was not found`,
        });
    }

    const filteredArray = data.tasks.filter(
        (ts) => ts.id !== parseInt(req.params.id)
    );

    data.setTasks([...filteredArray]);
    await fsPromises.writeFile(
        path.join(__dirname, "..", "model", "tasks.json"),
        JSON.stringify(data.tasks)
    );
    res.json({ message: "Task deleted!" });
};

module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask };
