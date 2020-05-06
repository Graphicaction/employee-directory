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

    searchEmployees = () => {
        API.getEmployees()
        .then(res =>this.setState({ employees: res }))
        .catch(err => console.log(err));
    };

    handleInputChange = (event) => {

    }

    handleFormSubmit = (event) => {

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