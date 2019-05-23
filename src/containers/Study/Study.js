import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Study.scss';

import words from 'assets/db/words.json';

class Study extends Component {
  constructor(props) {
    super(props);
    this.state = {
      block: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange() {
    this.setState({
      block: this.state.block !== true,
    });
  }

  render() {
    const { id } = this.props.match.params;
    return (
      <div className="Study">
        <div>
          <div>
            <h1>day - {words[id - 1].day}</h1>
            <span>{words[id - 1].description}</span>
          </div>
          <div>
            <div />
            <div>
              <input
                name="block"
                type="checkbox"
                checked={this.state.block}
                onChange={this.handleInputChange}
              />
              단어 뜻 가리기
            </div>
          </div>
        </div>

        <div>
          {words[id - 1].word.map((item, i) => (
            <div key={i}>
              <span>{i + 1}. {item}</span>
              <span style={
                this.state.block === true ? { display: 'none' } : { display: 'block' }
              }
              >{words[id - 1].meaning[i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Study);
