import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Study.scss';

import words from 'assets/db/words.json';

class Study extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div className="Study">
        {words[id].day}
      </div>
    );
  }
}

export default withRouter(Study);
