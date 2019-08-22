import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default class Header extends Component {
  state = {
    path: '/'
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ path: window.location.pathname });
    }, 1);
  }

  render() {
    const { path } = this.state;
    return (
      <nav className={
         path === '/'
          ? 'nonColor Header'
          : 'Color Header'
      }
      >
        <h2>
          <Link to="/">Sunrin Voca</Link>
        </h2>
        <ul>
          <Link to="/voca">Voca</Link>
          {/* <Link to="/exam">Exam</Link>
          <Link to="/wrong">Wrong</Link> */}
        </ul>
      </nav>
    );
  }
}
