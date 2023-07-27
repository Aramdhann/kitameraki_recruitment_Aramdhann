import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";

//CSS
import "./App.css";

//Pages
import Homepage from "./pages/Home/Homepage";
import CreateTask from "./pages/Tasks/CreateTask";
import EditTask from "./pages/Tasks/EditTask";
import SettingPage from "./pages/Setting/SettingPage";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/createTask' element={<CreateTask />} />
                <Route path='/editTask/:id' element={<EditTask />} />
                <Route path='/setting' element={<SettingPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
