import React, { useState, useEffect } from 'react';
import CreatePage from './pages/CreatePage'
import './App.css';
import ConnectPage from './pages/ConnectPage';
import SchedulePage from './pages/SchedulePage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from './components/Sidebar';
import { getUser } from './services/UserService'
import UserContext from "./userContext"



function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUser().then((res) => {
      console.log('USER first',res)
      setUser(res)
      localStorage.setItem('username', res.name)
    })
  },[])

  return (
    <UserContext.Provider value={user}>
    <div className="App">
      <Router>
      <Sidebar />
      <div className="page">
        <div className="page-content">
          <Route path="/" exact render={props => <CreatePage {...props} title={ user && `Hi, ${user.name}!`} /> }/>
          <Route path="/create/" render={props => <CreatePage {...props} title={ user && `Hi, ${user.name}!`} /> }/>
          <Route path="/schedule/" render={props => <SchedulePage {...props} title='Schedule Page' /> }/>
          <Route path="/connect/" render={props => <ConnectPage {...props} title='Connect Page' /> }/>
        </div>
      </div>
    </Router>
    </div>

    </UserContext.Provider>

  );
}


export default App;
