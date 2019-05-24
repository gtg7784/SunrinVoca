import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Voca.scss';

import words from 'assets/db/words.json';

class Voca extends Component {

  path = (items) => {
    if(window.location.pathname === '/voca'){
      return`/voca/${items.day}`;
    } else if(window.location.pathname === '/exam'){
      return `/exam/${items.day}`;
    }else{
      return `/wrong/${items.day}`
    }
  }

  render() {
    const { type } = this.props.match.params;

    return (
      <div className="Voca">
        <h1>{type}</h1>

        <div>
          <ul>
            {words.map((items, i) => (
              <li key={i}>
                <span>
                  <h3>
                    <Link to={this.path(items)}>
                      DAY - {items.day}
                    </Link>
                  </h3>
                  <div>{items.description}</div>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Voca);
