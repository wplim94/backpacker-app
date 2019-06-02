import React from 'react';
import logo from './logo.svg';
import CreatePage from './pages/CreatePage'

import './App.css';
import ConnectPage from './pages/ConnectPage';
import SchedulePage from './pages/SchedulePage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      {/* <CreatePage title='Create Page' />
      <ConnectPage title='Connect Page' />
      <SchedulePage title='Schedule Page' />
      <header className="App-header">
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
      <Sidebar name="Ping" img='https://images.pexels.com/photos/1619690/pexels-photo-1619690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200' />
        
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create/">Create</Link>
            </li>
            <li>
              <Link to="/schedule/">Schedule</Link>
            </li>
            <li>
              <Link to="/connect/">Connect</Link>
            </li>
          </ul>
        </nav> */}

        <Route path="/" exact render={props => <CreatePage {...props} title='Create Page' /> }/>
        <Route path="/create/" render={props => <CreatePage {...props} title='Create Page' /> }/>
        <Route path="/schedule/" render={props => <SchedulePage {...props} title='Schedule Page' /> }/>
        <Route path="/connect/" render={props => <ConnectPage {...props} title='Connect Page' /> }/>
      </div>
    </Router>
    </div>
  );
}

export default App;
