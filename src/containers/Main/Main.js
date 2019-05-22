import React, { Component } from 'react';
import Typed from 'react-typed';
import back from 'assets/image/back.jpeg';
import './Main.scss';

const type = ['HELLO SUNRIN!', 'THIS IS SUNRIN VOCA!'];

class Main extends Component {
  render() {
    return (
      <>
        <img className="back" src={back} alt="" />
        <div className="Main">
          <Typed
            strings={type}
            typeSpeed={100}
            backSpeed={50}
          />
        </div>
      </>
    );
  }
}

export default Main;
