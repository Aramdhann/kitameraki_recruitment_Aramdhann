const express = require("express");
const cors = require("cors");
const tasksRoutes = require("./routes/tasks");
const corstOptions = require("./config/corsOptions")

const app = express();
const port = process.env.PORT || 8082;

// Cross Origin Resource Sharing (CORS)
app.use(cors(corstOptions));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
// app.use('/tasks', require('./routes/tasks'));
app.use(tasksRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
