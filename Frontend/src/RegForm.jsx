import react from "react";
import "./RegForm.css";

function RegForm() {
    return (
        <div className="reg-form-cont">
            <form method="POST" action="" className="reg-form">
                <h2 className="title">Register for Quizzforces</h2>
                <div className="input-cont">
                    <label>Username</label>
                    <input type="text" />
                </div>
                <div className="input-cont">
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div className="input-cont">
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div className="input-cont">
                    <label>Confirm Password</label>
                    <input type="password" />
                </div>
                <input className="submit-button" type="submit" value="Regiter" />
            </form>
        </div>
    );
}

export default RegForm;
