import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: "all", label: "All employees"},
        {name: "rise", label: "Employees up for promotion"},
        {name: "moreThen1000", label: "Salary is over $1,000"}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name; // instead of if (with true or false)
        const clazz = active ? "btn-light" : "btn-outline-light";
        return (
            <button
                type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;