import React from 'react';
import './App.css'
import Login from './component/Login/Login'
import StatesPane from './component/StatesPane/StatesPane'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
    <Switch>
      <Route path="/states">
        <StatesPane />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
     </Switch>
     </Router>
  );
}
