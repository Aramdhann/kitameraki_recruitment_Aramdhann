// Placeholder for task data in memory
let tasks = [];

// Controller functions for handling CRUD operations on tasks
exports.addTask = (req, res) => {
    const { title, description } = req.body;
    const newTask = { id: tasks.length + 1, title, description };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

exports.getAllTasks = (req, res) => {
    res.json(tasks);
};

exports.deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter((task) => task.id !== taskId);
    res.sendStatus(204);
};

exports.updateTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, description } = req.body;
    tasks = tasks.map((task) =>
        task.id === taskId ? { ...task, title, description } : task
    );
    res.json(tasks.find((task) => task.id === taskId));
};
