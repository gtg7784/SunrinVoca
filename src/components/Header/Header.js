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
    return (
      <nav className="Header">
        <h2>
          <Link to="/">
            SUNRINVOCA
          </Link>
        </h2>
        <ul>
          {this.state.path === "/VOCA" ? 
            <div>
              <div>
                <Link to="/VOCA">VOCA</Link>
                <div/>
              </div>
            </div>
          : <Link to="/VOCA">VOCA</Link>
          }
          {this.state.path === "/TEST" ? 
            <div>
              <div>
                <Link to="/TEST">TEST</Link>
                <div/>
              </div>
            </div>
          : <Link to="/TEST">TEST</Link>
          }
        </ul>
      </nav>
    );
  }
}