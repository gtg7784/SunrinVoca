import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Voca.scss';

import words from 'assets/db/words.json';

class Voca extends Component {
  render() {
    return (
      <div className="Voca">
        <div>
          {words.map(items => (
            <div>
              <h3>DAY - {items.day}</h3>
              <span>{items.description}</span>
              <div>
                <Link to={`/voca/${items.day}`}>START!</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Voca;
