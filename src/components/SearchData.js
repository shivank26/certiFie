import React from 'react'

class SearchData extends React.Component {

    state = { searchQuerry:''};

    keyHandler = event => {
        if (event.key === 'Enter') {
            //Search the database
        }
    }

    changeQuerry = event => {
        this.setState({searchQuerry: event.target.value})
    }

    render() {
        return (
            <div className="search-data">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-md-6">
                        <div className="form">
                            <form className="form">
                                <input type="text" className="form-control" placeholder={"Search Candidate"}
                                    onChange={this.changeQuerry}
                                    onKeyPress={this.keyHandler}
                                    onSubmit={"#"}
                                />
                                <button className="btn btn-lg search-btn" onClick={"#"}>Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        )
    }
}

export default SearchData;