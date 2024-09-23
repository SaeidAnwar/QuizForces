import "./Problems.css"

function Problems() {
    return (
        <div className="problems-cont">
            <table>
                <tbody>
                    <tr>
                        <td className="sno">#</td>
                        <td className="name">Name</td>
                        <td className="diff">Difficulty</td>
                        <td className="solved">Solved</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Problems;