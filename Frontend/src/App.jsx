import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import "./App.css";
import RegForm from "./RegForm";
import LoginForm from "./Login";
import NavBar from "./NavBar";

function App() {
    return (
        <div>
            <NavBar />
            <Router>
                <Routes>
                    <Route path="/reg" element={<RegForm />} />
                    <Route path="/login" element={<LoginForm />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
