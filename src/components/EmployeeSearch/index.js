import React, { Component } from "react";
import EmployeeList from "../EmployeeList"
import API from "../../utils/Apiservice";
import Navbar from '../Navbar';

class EmployeeSearch extends Component {
    state = {
        search: "",
        employees: []
    };
    // When this component mounts, search employees
    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = (query) => {
        if(query){
            const letters = query.toLowerCase();
            // Filter this.state.employees for employees whose firstname or last name includes searched letters.
            const searchedEmployees = this.state.employees.filter(
                employee => (employee.firstName.toLowerCase().includes(letters)) || (employee.lastName.toLowerCase().includes(letters))
                );
            // Set this.state.friends equal to the new friends array
            this.setState({ employees: searchedEmployees });
        }else {
            API.getEmployees()
            .then(res =>this.setState({ employees: res }))
            .catch(err => console.log(err));
        }
    }; 

    handleInputChange = (event) => {
        const {name,value} = event.target;
        this.setState({
            [name]: value
        })
     }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.searchEmployees(this.state.search);
    }

    render() {
        return (
            <div>
                <Navbar 
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <EmployeeList employees = {this.state.employees}/>
            </div>
        );
    }
}

export default EmployeeSearch;