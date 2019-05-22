import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Header from 'components/Header/Header';
import Main from 'containers/Main/Main';
import Voca from 'containers/Voca/Voca';
import Study from 'containers/Study/Study';
import Exam from 'containers/Exam/Exam';
// import Login from 'containers/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/voca" exact component={Voca} />
          <Route path="/voca/:id" exact component={Study} />
          <Route path="/exam" exact component={Exam} />
          {/* <Route path="/login" exact component={Login} /> */}
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
