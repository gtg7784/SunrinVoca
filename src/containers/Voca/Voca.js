import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Voca.scss';

import words from 'assets/db/words.json';

class Voca extends Component {
  render() {
    return (
      <div className="Voca">
        <ul>
          {words.map((items, i) => (
            <li key={i}>
              <span>
                <h3>
                  <Link to={`/voca/${items.day}`}>DAY - {items.day}</Link>
                </h3>
                <div>{items.description}</div>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Voca;
