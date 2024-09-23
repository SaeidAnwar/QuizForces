import "./Problems.css";

const testData = [
    {
        sno: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        sno: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        sno: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        sno: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        sno: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        sno: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        sno: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        sno: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        sno: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        sno: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        sno: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        sno: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        sno: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        sno: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        sno: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
];

function Problems() {
    return (
        <div className="problems-cont">
            <h3>Problems</h3>
            <table>
                <tbody>
                    <tr className="header">
                        <td className="sno">
                            <p>#</p>
                        </td>
                        <td className="name">
                            <p>Name</p>
                        </td>
                        <td className="diff">
                            <p>Difficulty</p>
                        </td>
                        <td className="solved">
                            <p>Solved</p>
                        </td>
                    </tr>
                    {testData.map((el) => {
                        return (
                            <tr key={el.sno}>
                                <td>
                                    <p>{el.sno}</p>
                                </td>
                                <td>
                                    <p>{el.name}</p>
                                </td>
                                <td>
                                    <p>{el.difficulty}</p>
                                </td>
                                <td>
                                    <p>{el.solved}</p>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Problems;
