import React, { Component } from "react";
import moment from "moment";
import EmployeeList from "../EmployeeList"
import API from "../../utils/Apiservice";
import Navbar from '../Navbar';
import validate from './validate';
import MyModal from '../MyModal';
 
class EmployeeSearch extends Component {
    //Initializing state
    state = {
        search: "",
        showModal: false,
        employees: []
    };
    // When this component mounts, search employees
    componentDidMount() {
        this.searchEmployees();
    }
    //Search employees
    searchEmployees = (query) => {
        if(query){
            const valid = validate(query); //Validating the input
            if(valid){ 
                const letters = query.toLowerCase();
                // Filter this.state.employees for employees whose firstname or last name includes searched letters.
                const searchedEmployees = this.state.employees.filter(
                    employee => (employee.firstName.toLowerCase().includes(letters)) || (employee.lastName.toLowerCase().includes(letters))
                    );
                // Set this.state.employees equal to the new employees array
                this.setState({ employees: searchedEmployees });
                return;
            } else {
              this.setState({ showModal: true })
            }
        }else {
            API.getEmployees()
            .then(res => {
                // return new employee array with day's worked col  
                const newEmployees = res.map(employee => {
                    const startDate = moment(employee.date, 'M/D/YYYY')
                    const nowDate = moment()
                    employee.yearsWorked = nowDate.diff(startDate, 'years')
                    return employee     
                    })
                return newEmployees;
             })
            .then(newEmployees => {
                this.setState({ employees: newEmployees })})
            .catch(err => console.log(err));
        }
    }; 
    hideModal = () => {
        this.setState({ showModal: false })
    }
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
        //search for the employees matching the search query
        this.searchEmployees(this.state.search);
        this.setState({ search: "" });
    }
    //Clear the search field and rerender all employees
    handleFormClear = (event) => {
        if(event)
            event.preventDefault();
        //clear search field and search all employees again
        this.setState({ search: "" }, () => {
           this.searchEmployees(this.state.search);
        });
    }
    //Sorting employees by their first name, lastname, years or department
    handleSort = (category) => {
        if(category === "firstname") {
            //Sort this.state.employees by first name 
            const sortedEmployees = this.state.employees.sort(
                (a,b) => {
                    if(a.firstName.toLowerCase() < (b.firstName.toLowerCase())) return -1;
                    if(a.firstName.toLowerCase() > (b.firstName.toLowerCase())) return 1;
                    return 0;
                })
            // Set this.state.employees equal to the new employees array
            this.setState({ employees: sortedEmployees });
        } else if(category === "lastname") {
            // Sort this.state.employees by last name
            const sortedEmployees = this.state.employees.sort(
                (a,b) => {
                    if(a.lastName.toLowerCase() < (b.lastName.toLowerCase())) return -1;
                    if(a.lastName.toLowerCase() > (b.lastName.toLowerCase())) return 1;
                    return 0;
                })
            // Set this.state.employees equal to the new employees array
            this.setState({ employees: sortedEmployees });
        } else if(category === "years") { 
            // Sort this.state.employees by years
            const sortedEmployees = this.state.employees.sort((a,b) => {
                    return a.yearsWorked - b.yearsWorked;
                })
            // Set this.state.employees equal to the new employees array
            this.setState({ employees: sortedEmployees });
        } else if(category === "department") {
            category = category.value;
            console.log(this.state.employees[0].category);
            // Sort this.state.employees by department
            const sortedEmployees = this.state.employees.sort(
                (a,b) => {
                    if(a.department.toLowerCase() < (b.department.toLowerCase())) return -1;
                    if(a.department.toLowerCase() > (b.department.toLowerCase())) return 1;
                    return 0;
                })
            // Set this.state.employees equal to the new employees array
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
                <MyModal 
                showModal = {this.state.showModal} 
                hideModal = {this.hideModal}
                />
            </div>
        );
    }
}

export default EmployeeSearch;