import React from 'react';

const styles = {
    navbarStyle: {
      backgroundColor: "sandybrown",
      color: "white"
    },
    searchBtn: {
        backgroundColor: "brown",
        color: "white"
    }
};

function Navbar(props) {
    return(
        <nav style= {styles.navbarStyle} className="navbar">
            <a className="navbar-brand">Employee List</a>
            <form className="form-inline">
                <input 
                className="form-control mr-sm-2" 
                type="search" 
                placeholder="Search" 
                id="search"
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                />
                <button style= {styles.searchBtn} onClick={props.handleFormSubmit} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    );
}

export default Navbar;