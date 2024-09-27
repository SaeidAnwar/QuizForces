import "./Filter.css";

function Filter() {
    return (
        <div className="filter-cont">
            <h3>Filter</h3>
            <div className="inner-cont">
                <p>Difficulty</p>
                <select>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            <div className="inner-cont">
                <p>Tag</p>
                <select>
                    <option value="Logical Reasoning">Logical Reasoning</option>
                    <option value="Quantitative Analysis">Quantitative Analysis</option>
                    <option value="Qualitative Analysis">Qualitative Analysis</option>
                    <option value="Maths">Maths</option>
                </select>
            </div>
            <button>Apply</button>
        </div>
    );
}

export default Filter;
