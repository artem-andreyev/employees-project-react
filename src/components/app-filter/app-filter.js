import "./app-filter.scss";

const AppFilter = (props) => {
    const buttonsData = [
        {name: "all", label: "All employees", colored: false},
        {name: "rise", label: "Employees up for promotion", colored: false},
        {name: "moreThen1000", label: "Salary is over $1,000", colored: false}
    ];

    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = props.filter === name; // instead of if (with true or false)
        const clazz = active ? "btn-light" : "btn-outline-light";
        const style = colored ? {color: "red"} : null;
        return (
            <button
                type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}
                style={style}>
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