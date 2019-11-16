import React from 'react'
import './dashboard.css'
import { Link } from 'react-router-dom'
import Homepage from './Homepage'
import axios from 'axios'

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            download:false,
            downloadcontent:null
          }
        this.logout = this.logout.bind(this);
    }


    onChangeHandler=event=>{

        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
          })
    }

    onClickHandler = () => {
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        data.append('usertoken',this.props.location.state.userToken)
        axios.post("https://polar-reaches-87686.herokuapp.com/data/add-files", data, {
      })
      .then(res => {
        if(res.data.status === 'success') {
            console.log(res.data.data);
            var display="";
            for(var i=0;i<res.data.data.result.length;i++){
                display+='\n-----------------------------------------------------------\n'+(i+1)+'. '+res.data.data.result[i].verifyUrl;
            }
            this.setState({download: true,downloadcontent:display});
        }
      }).catch((error) => {
        alert(error.response.data.data.message)
    });
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
        if(this.props.location.state.loggedIn && !this.state.download) {
            
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


                    <div>
                        <input type="file" name="file" onChange={this.onChangeHandler}/>
                        <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload Data</button>
                    </div>
 
                </div>
            )
        }else if(this.props.location.state.loggedIn && this.state.download) {
            
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


                    <div>
                        <input type="file" name="file" onChange={this.onChangeHandler}/>
                        <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload Data</button>
                        <textarea rows='15' value={this.state.downloadcontent}/>
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