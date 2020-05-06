//Returning the list of employees
export default {
    getEmployees: function() {
        return fetch('https://alper.dev/employees')
        .then((res) => res.json());
  }
};

