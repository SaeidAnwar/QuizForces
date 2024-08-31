import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import RegForm from "./RegForm";
import LoginForm from "./Login";

function App() {
    return (
        <Router>  
            <Routes>
                <Route path="/reg" element={<RegForm />} />
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </Router>
    );
}

export default App;
