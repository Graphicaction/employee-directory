//Returning the list of employees
export default {
    getEmployees: function(query) {
        return fetch('https://alper.dev/employees')
        .then((res) => res.json());
  }
};

