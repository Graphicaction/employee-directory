import React, { Component } from "react";
import EmployeeList from "../EmployeeList"
import API from "../../utils/Apiservice";

class EmployeeSearch extends Component {
    state = {
        search: "",
        employees: []
    };
    // When this component mounts, search the Giphy API for pictures of kittens
    componentDidMount() {
        this.searchEmployees();
    }

    searchEmployees = () => {
        API.getEmployees()
        .then(res =>this.setState({ employees: res }))
        .catch(err => console.log(err));
    };
    render() {
        return (
            <div>
                <EmployeeList employees = {this.state.employees}/>
            </div>
        );
    }
}

export default EmployeeSearch;