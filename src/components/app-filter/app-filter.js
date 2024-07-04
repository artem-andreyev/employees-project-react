import "./app-filter.css";

const AppFilter = () => {
    const buttonsData = [
        {name: "all", label: "All employees"},
        {name: "rise", label: "Employees up for promotion"},
        {name: "moreThen1000", label: "Salary is over $1,000"}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        return (
            <button
                className="btn btn-light"
                key={name}
                type="button">
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
            {/* <button
                className="btn btn-light"
                type="button">
                    All employees
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                    Employees up for promotion
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                    Salary is over $1,000
            </button> */}
        </div>
    );
}

export default AppFilter;