import "./Settings.css";

function Settings() {
    return (
        <div className="settings-cont">
            <h3>Settings</h3>
            <div className="inner-cont">
                <p>Show tags for unsolved problems</p>
                <input type="checkbox" />
            </div>
            <div className="inner-cont">
                <p>Hide solved problems</p>
                <input type="checkbox" />
            </div>
        </div>
    );
}

export default Settings;
