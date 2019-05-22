import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Study.scss';

import words from 'assets/db/words.json';

class Study extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div className="Study">
        <div>
          <h1>day - {words[id - 1].day}</h1>
          <span>{words[id - 1].description}</span>
        </div>
        <div>
          {words[id - 1].word.map((item, i) => (
            <div key={i}>
              <span>{i + 1}. {item}</span>
              <span>{words[id - 1].meaning[i]}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Study);
