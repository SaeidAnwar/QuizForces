import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import "./App.css";
import RegForm from "./assets/Components/RegForm";
import LoginForm from "./assets/components/LoginForm";
import NavBar from "./assets/components/NavBar";
import Problems from "./assets/components/Problems";
import Footer from "./assets/components/Footer";

function App() {
    return (
        <div className="main-cont">
            <NavBar />
            <Router>
                <Routes>
                    <Route path="/reg" element={<RegForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/problems" element={<Problems/>} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
