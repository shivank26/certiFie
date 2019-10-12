import React from 'react'
import './login.css'
import { Redirect } from 'react-router-dom'

import axios from 'axios'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.verifyPassword = this.verifyPassword.bind(this);
        this.state = {password: '', userToken: '', redirect: false}; 
    }

    updatePass = event => {
        this.setState({password: event.target.value})
    }

    verifyPassword = event => {
        // console.log(this.state.password);

        if(this.state.password === '') {
            alert('Please Enter Password');
            return 0;
        }
        
        // this.props.verifyPassword(this.state.password);
        // fetch('https://polar-reaches-87686.herokuapp.com/users/login',{
        //     method: 'post',
        //     header: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({'userName': 'admin', 'password': this.state.password})
        // })
        // .then( (response) => {
        //     console.log(response);
            
        // })

        axios.post('https://polar-reaches-87686.herokuapp.com/users/login', {
            userName: 'admin',
            password: this.state.password
        }).then((response) => {
            if(response.data.status === 'success') {
                this.setState({userToken: response.data.data.userToken, redirect: true});
            }
            // console.log('User Token', this.state.userToken);
        }).catch((error) => {
            alert(error.response.data.data.message)            
        });
        event.preventDefault();
    }

    renderRedirect = () => {
        if(this.state.redirect) {
            return <Redirect to={{pathname: '/dashboard',
                state: {loggedIn: true, userToken: this.state.userToken}}}
            />
        }
    }

    render() {
        return(
            <div className="container">
                <form className="login-form form">
                    <input type="password" className="form-control password-field" id="password" placeholder="Password"
                        onChange={this.updatePass}
                    />
                    {this.renderRedirect()}
                    <button className="btn login-btn" style={{marginTop: "1rem"}} onClick={this.verifyPassword}>Login</button>
                </form>
            </div>  
        )
    }
}

export default Login;