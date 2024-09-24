import "./Problems.css";

const testData = [
    {
        id: 1,
        name: "first question first question first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        id: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        id: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        id: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        id: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        id: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        id: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        id: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        id: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        id: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        id: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        id: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        id: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        id: 1,
        name: "first question",
        difficulty: "easy",
        solved: "no",
    },
    {
        id: 1,
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
                            <p>Diff</p>
                        </td>
                        <td className="solved">
                            <p>Sol</p>
                        </td>
                    </tr>
                    {testData.map((el, index) => {
                        return (
                            <tr key={el.id}>
                                <td>
                                    <a href="/">{index+1}</a>
                                </td>
                                <td>
                                    <a href="/">{el.name}</a>
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
