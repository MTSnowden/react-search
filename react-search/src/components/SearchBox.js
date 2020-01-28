import React, { Component } from 'react'

class SearchBox extends Component {
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
        const { searchTerm } = this.state;
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
                            value={searchTerm}
                            name="searchTerm"
                            style={searchInputStyle}
                            placeholder="Search for a movie, actor or director..."
                            onChange={
                                (e)=>this.setState({searchTerm: e.target.value})}
                            onKeyUp={
                                // this provides ability to search when the Enter key is pressed
                                (e)=>{
                                    if (this.props.loadSearch && e.key === "Enter" && this.state.searchTerm) {
                                        this.props.loadSearch(this.state.searchTerm)
                                    }
                                }
                            }
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
    fontSize: '30px',
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

export default SearchBox