import React from 'react'
import './dashboard.css'

class Dashobject extends React.Component {

    render() {
        return (
            <div className="dashobject">
                <button className="btn">{this.props.header}</button>
            </div>
        )
    }
}

export default Dashobject;