import React, { Component } from "react";
import EmployeeList from "../EmployeeList"
import API from "../../utils/Apiservice";
import Navbar from '../Navbar';

class EmployeeSearch extends Component {
    //Initializing state
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
            return;
        }else {
            API.getEmployees()
            .then(res =>this.setState({ employees: res }))
            .catch(err => console.log(err));
        }
    }; 
    //Changing state whenever search field changes
    handleInputChange = (event) => {
        const {name,value} = event.target;
        this.setState({
            [name]: value
        })
     }
    //Search for the employees with specific letters
    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("handleform submit: ",this.state.search);
        this.searchEmployees(this.state.search);
    }
    //Clear the search field and rerender all employees
    handleFormClear = (event) => {
        event.preventDefault();
        this.setState({ search: "" });
        console.log(this.state.search);
        this.searchEmployees(this.state.search);
    }
    //Sorting employees by their first name or lastname
    handleSort = (name) => {
        if(name === "firstname") {
            // Filter this.state.employees for employees whose firstname or last name includes searched letters.
            const sortedEmployees = this.state.employees.sort(
                (a,b) => {
                    if(a.firstName.toLowerCase() < (b.firstName.toLowerCase())) return -1;
                    if(a.firstName.toLowerCase() > (b.firstName.toLowerCase())) return 1;
                    return 0;
                })
            // Set this.state.friends equal to the new friends array
            this.setState({ employees: sortedEmployees });
        } else if(name === "lastname") {
            // Filter this.state.employees for employees whose firstname or last name includes searched letters.
            const sortedEmployees = this.state.employees.sort(
                (a,b) => {
                    if(a.lastName.toLowerCase() < (b.lastName.toLowerCase())) return -1;
                    if(a.lastName.toLowerCase() > (b.lastName.toLowerCase())) return 1;
                    return 0;
                })
            // Set this.state.friends equal to the new friends array
            this.setState({ employees: sortedEmployees });
        }
    }

    render() {
        return (
            <div>
                <Navbar 
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    handleFormClear = {this.handleFormClear}
                />
                <EmployeeList 
                    employees = {this.state.employees}
                    handleSort={this.handleSort}
                />
            </div>
        );
    }
}

export default EmployeeSearch;