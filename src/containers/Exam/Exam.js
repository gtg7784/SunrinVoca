import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Exam.scss';

import words from 'assets/db/words.json';

class Exam extends Component {
  render() {
    return (
      <div className="Exam">
        <ul>
          {words.map((items, i) => (
            <li key={i}>
              <span>
                <h3>
                  <Link to={`/exam/${items.day}`}>DAY - {items.day}</Link>
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

export default Exam;
