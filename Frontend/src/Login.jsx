import react from "react";
import "./RegForm.css";

function LoginForm() {
    return (
        <div className="reg-form-cont">
            <form method="POST" action="" className="reg-form">
                <h2 className="title">Login for Quizzforces</h2>
                <div className="input-cont">
                    <label>Username/Email</label>
                    <input type="text" />
                </div>
                <div className="input-cont">
                    <label>Password</label>
                    <input type="password" />
                </div>
                <input className="submit-button" type="submit" value="Login" />
            </form>
        </div>
    );
}

export default LoginForm;
