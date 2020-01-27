import React, { Component } from 'react'

class Search extends Component {
    constructor() {
        super();
        this.state = { 
            searchTerm: '',
            results: {},
            loading: false,
            message: ''
        }
    }

    render() {
        return (
            <div className="search-container" 
                 style={searchContainerStyle}>
                <h2 className="heading" 
                    style={headingStyle}>
                        Live Search: React Application
                </h2>
                <label className="search-label" 
                       style={searchLabelStyle} 
                       htmlFor="search-input">
                        <input 
                            type="text"
                            value=""
                            style={searchInputStyle}
                            placeholder="Search..."
                        />
                    <i className="fa fa-search" 
                       style={searchIconStyle}
                       aria-hidden="true" />
                </label>
            </div>
        )
    }
}

const searchContainerStyle = {
    margin: '40px auto',
    width: '100%',
    maxWidth: '800px'
}

const headingStyle = {
    fontSize: '30px',
    padding: '20px 0',
    color: '#444',
    textAlign: 'center'
}

const searchLabelStyle = {
    position: 'relative'
}

const searchInputStyle = {
    width: '75%',
    padding: '20px',
    fontSize: '35px',
    fontStyle: 'italic',
    color: '#444',
    boxSizing: 'borderBox',
    outline: 'none'
}

const searchIconStyle = {
    position: 'absolute',
    top: '-10px',
    right: '20px',
    fontSize: '25px',
    color: '#777'
}

export default Search