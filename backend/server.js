const express = require("express");
const cors = require("cors");
const tasksRoutes = require("./routes/tasks");
const corstOption = require("./config/corsOptions")

const app = express();
const port = process.env.PORT || 8082;

// Cross Origin Resource Sharing (CORS)
app.use(cors(corstOption));

// Middleware
app.use(express.json());

// Routes
app.use(tasksRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
