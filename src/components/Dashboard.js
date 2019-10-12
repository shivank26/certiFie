import React from 'react'
import './dashboard.css'
import Dashobject from './Dashobjects'
import { Link, Redirect } from 'react-router-dom'
import Homepage from './Homepage'
import axios from 'axios'

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout () {
        axios.get(`https://polar-reaches-87686.herokuapp.com/users/logout/${this.props.location.state.userToken}`)
        .then((response) => {
            // console.log(response.data);
            alert('Logout Successful')
        })
        .catch((error) => {
            alert(error.response.data.data.message)
        });
    }

    render() {
        // console.log('Inside Dashboard');
        try {
        if(this.props.location.state.loggedIn) {
            
            // console.log('User Token', this.props.location.state.userToken);
            
            return (
                <div className="dashboard container">
                    <h1 className="header">Hello Admin</h1>
                    <p>Welcome to your Dashoard! So what are you up to?</p>
                    <div className="row">
                        <div className="col-md-4">
                            <p className="adminmsg" style={{float:'left'}}>CertiFie Masterhead</p>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4 right-float">
                            <Link to="/">
                                <button className="btn logout-btn" onClick={this.logout}>Logout</button>
                            </Link>
                        </div>
                    </div>

                    <div className="row dashboard-objects">
                        <div className="col-md-4">
                            <Link to={`/dashboard/store`}><Dashobject header={"Store Data"} /></Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={`/dashboard/show`}><Dashobject header={"Show Data"} /></Link>
                        </div>
                        <div className="col-md-4">
                            <Link to={`/dashboard/search`}><Dashobject header={"Search Data"} /></Link>
                        </div>
                    </div> 
                </div>
            )
        }
    }
        catch {
            return (
                <div className="error-render">
                    <h1>Not Logged In</h1>
                    <Link to='/' component={Homepage}><p>Click here to go back to Login Page</p></Link>
                </div>
            )
        }
        
    }
}

export default Dashboard;