import React from 'react'
import './searchBar.css'

class Search extends React.Component {
    render() {
        return (
            <div className="search">
                <div className="form">
                    <input type="text" className="form-control searchbar" placeholder="Search Candidate"/>
                </div>
            </div>
        )
    }
}

export default Search;