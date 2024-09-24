import "./NavBar.css";

function NavBar() {
    return (
        <div className="navbar-cont">
            <div className="upper-cont">
                <h1>QUIZFORCES</h1>
                <div className="link-cont">
                    <a className="login-link" href="/login">Login</a>
                    |
                    <a className="reg-link" href="/reg">Register</a>
                </div>
            </div>
            <ul className="navbar-list">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Practice</a>
                </li>
                <li>
                    <a href="/problems">Problems</a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
