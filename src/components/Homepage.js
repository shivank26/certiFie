import React from 'react'
import Login from './Login'
import './homepage.css'

class Homepage extends React.Component {

    verifyPassword = password => {
        // Verify Password Code
        if (password === "qwerty");
            
    }

    render() {
        return (
            <div className="homepage-body">
                <h1 className="login-header">
                    Welcome to CertiFie
                </h1>
                <p className="homepage-para">
                    Your Certificate storage
                </p>
                <div className="row">
                    <div className="col"></div>
                    <div className="col-4">
                        <Login verifyPassword={this.verifyPassword}/>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        )
    }
}

export default Homepage;