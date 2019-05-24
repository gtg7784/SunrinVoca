import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Header from 'components/Header/Header';
import Main from 'containers/Main/Main';
import Voca from 'containers/Voca/Voca';
import Study from 'containers/Study/Study';
import Exam from 'containers/Exam/Exam';
import Wrong from 'containers/Wrong/Wrong';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/voca/:id" exact component={Study} />
          <Route path="/:type" exact component={Voca} />
          <Route path="/exam/:id" exact component={Exam} />
          <Route path="/wrong/:id" exact component={Wrong} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
