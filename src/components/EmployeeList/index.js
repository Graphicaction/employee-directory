import React from 'react';

function EmployeeList(props) {
    return (
        <ul className="list-group">
            {props.employees.map(employee => (
                <li className="list-group-item" key={employee.id}>
                   <p> <img alt={employee.firstName} className="img-fluid" src={employee.avatar} />
                   {employee.firstName}</p>
                </li>
            ))}
        </ul>
    );
}

export default EmployeeList;