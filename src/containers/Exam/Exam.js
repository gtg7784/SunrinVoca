import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Exam.scss';

import exams from 'assets/db/exams.json';

class Exam extends Component {
  render() {
    return (
      <div className="Exam">
        <ul>
          {exams.map((items, i) => (
            <li key={i}>
              <span>
                <div>{items.enko}</div>
                <div>{items.underline}</div>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Exam;
