import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import Homepage from './Homepage';
import axios from 'axios';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Button from 'react-bootstrap/Button';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            download:false,
            downloadcontent:null,
            resjson:""
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
            display+='1. '+res.data.data.result[0].verifyUrl;
            for(var i=1;i<res.data.data.result.length;i++){
                display+='\n\n'+(i+1)+'. '+res.data.data.result[i].verifyUrl;
            }
            this.setState({download: true,downloadcontent:display,resjson:JSON.stringify(res.data.data)});
        }
      }).catch((error) => {
        alert("Please select file")
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
                        <p>Select <b>.csv</b> file and then click upload</p>
                        <input type="file" name="file" onChange={this.onChangeHandler}/>
                        <Button variant="success" onClick={this.onClickHandler}>Upload Data</Button>
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
                        <Button style={{margin: "10px"}} variant="success" onClick={this.onClickHandler}>Upload Data</Button>
                        <textarea rows='15' value={this.state.downloadcontent}/>
                        <div>
                            <CopyToClipboard style={{margin: "10px"}} text={this.state.downloadcontent}>
                                <Button>Copy plain text</Button>
                            </CopyToClipboard>
                            <CopyToClipboard style={{margin: "10px"}} text={this.state.resjson}>
                                <Button>Copy JSON</Button>
                            </CopyToClipboard>
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