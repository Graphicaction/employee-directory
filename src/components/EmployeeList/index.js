import React from 'react';

function EmployeeList(props) {
    return (
        
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                    <th>#</th>
                    <th></th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Start Date</th>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        
    );
}

export default EmployeeList;