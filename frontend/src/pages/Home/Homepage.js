import { React } from "react";
import "./homepage.css";
import TaskList from "../../components/TaskList";

function Homepage() {
    return (
        <section className="home-page">
            <h1>List of Task</h1>
            <TaskList/>
        </section>
    );
}

export default Homepage;
