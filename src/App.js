import React, { useState, useEffect } from 'react';
import CreatePage from './pages/CreatePage'
import './App.css';
import ConnectPage from './pages/ConnectPage';
import SchedulePage from './pages/SchedulePage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from './components/Sidebar';
import { getUser } from './services/UserService'
import { statement } from '@babel/template';

function App() {
  const [name, setName] = useState(null)

  const [user, setUser] = useState(null)

  useEffect(() => {
    getUser().then((res) => {
      console.log(res)
      setUser(res)
    })
  },[])

  return (
    <div className="App">
      <Router>
      <Sidebar name={user ? user.name : 'Loading...'} img={ user && user.imgUrl} />
      <div>
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
