import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import Homepage from './components/Homepage'
import StoreData from './components/StoreData'
import SearchData from './components/SearchData'
import ShowData from './components/ShowData'
import {Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App app-body">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Route exact path="/" component={Homepage}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/dashboard/store" component={StoreData} />
        <Route path="/dashboard/search" component={SearchData} />
        <Route path="/dashboard/show" component={ShowData} />
      </Router>
    </div>
  );
}

export default App;
