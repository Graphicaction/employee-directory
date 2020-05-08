import React from 'react';
import "./style.css"

function EmployeeList(props) {
    return (
        <div className="table-responsive-sm">
            <table className="table table-bordered table-dark table-striped table-hover text-center">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th></th>
                    <th className= "sortHeading" onClick={() => props.handleSort("firstname")}>First Name<i className="ml-1 fa fa-sort-up"></i></th>
                    <th className= "sortHeading" onClick={() => props.handleSort("lastname")}>Last Name<i className="ml-1 fa fa-sort-up"></i></th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th className= "sortHeading" onClick={() => props.handleSort("department")}>Department<i className="ml-1 fa fa-sort-up"></i></th>
                    <th>Start Date</th>
                    <th className= "sortHeading" onClick={() => props.handleSort("years")}>Years Worked<i className="ml-1 fa fa-sort-up"></i></th>
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
                         <td>{employee.yearsWorked}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;