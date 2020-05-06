import React from 'react';
import "./style.css"

function EmployeeList(props) {
    return (
        <div className="table-responsive-sm">
            <table className="table table-bordered table-dark table-striped table-hover">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th></th>
                    <th className= "sortHeading" onClick={() => props.handleSort("firstname")}>First Name<i className="ml-1 fa fa-sort-up"></i></th>
                    <th className= "sortHeading" onClick={() => props.handleSort("lastname")}>Last Name<i className="ml-1 fa fa-sort-up"></i></th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Start Date</th>
                    <th>Days Worked</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map(employee => (
                        <tr key={employee.id}>
                         <td>{employee.id}</td>
                         <td><img src={employee.avatar} alt={employee.firstName} /></td>
                         <td>{employee.firstName}</td>
                         <td>{employee.lastName}</td>
                         <td>{employee.email}</td>
                         <td>{employee.gender}</td>
                         <td>{employee.department}</td>
                         <td>{employee.date}</td>
                         <td>{employee.daysWorked}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;