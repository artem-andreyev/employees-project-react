import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps} // {...item} (spread operator(expands the object into separate elements)) is identical to name={item.name} salary={item.salary})
                onDelete={() => onDelete(id)}
                onToggleProp={() => onToggleProp(id)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;