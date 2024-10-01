import "./ProblemPage.css"
import Problems from "./Problems";
import Filter from "./Filter";
import Settings from "./Settings";

function ProblemPage() {
    return (
        <div className="problem-page-cont">
            <Problems/>
            <div className="side-bar-cont">
                <Filter/>
                <div className="space"></div>
                <Settings/>
            </div>
        </div>
    )
}

export default ProblemPage;