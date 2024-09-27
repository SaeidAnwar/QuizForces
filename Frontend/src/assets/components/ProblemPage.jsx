import "./ProblemPage.css"
import Problems from "./Problems";
import Filter from "./Filter";

function ProblemPage() {
    return (
        <div className="problem-page-cont">
            <Problems/>
            <div className="side-bar-cont">
                <Filter/>
            </div>
        </div>
    )
}

export default ProblemPage;