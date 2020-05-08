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
            <h1>Employee List</h1>
            <form className="form-inline">
                <input 
                className="form-control mr-sm-2" 
                type="search" 
                placeholder="Search" 
                id="search"
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                />
                <button style= {styles.searchBtn} onClick={props.handleFormSubmit} className="btn btn-outline-primary my-2 my-sm-0" type="submit">
                    <i className="fa fa-search"></i>
                </button>
                <button style= {styles.searchBtn} onClick={props.handleFormClear} className="btn btn-outline-secondary m-2 my-sm-0">
                    <i className="fa fa-undo"></i>
                </button>
            </form>
        </nav>
    );
}

export default Navbar;