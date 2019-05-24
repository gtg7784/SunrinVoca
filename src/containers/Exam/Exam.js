import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import './Exam.scss';

import exams from 'assets/db/exams.json';

class Exam extends Component {
  state = {
    number: 0
  }

  render() {
    const { id } = this.props.match.params;
    return (
      <div className="Exam">
        <h1>DAY - {id}</h1>

        <div>
          <ul>
            {exams[id - 1].enko.map((items, i) => (
              <li id="enko" key={i}>
                {`${i + 1}. ${items}`}
                <input type="text" />
              </li>
            ))}
            {exams[id - 1].underlineSame.map((items, i) => (
              <li key={i}>
                {`${i +  exams[id - 1].enko.length + 1}.  다음 밑줄친 부분과 뜻이 가장 가까운 것을 고르세요.`}
                <div>
                  <div>
                    {`${items[0]} `}
                    <span>{`${items[1]}`}</span>
                    {` ${items[2]}`}
                  </div>
                  <div>
                    <input type="checkbox" /> {items[3]}
                    <input type="checkbox" /> {items[4]}
                    <input type="checkbox" /> {items[5]}
                    <input type="checkbox" /> {items[6]}
                    <input type="checkbox" /> {items[7]}
                  </div>
                </div>
              </li>
            ))}
            {exams[id - 1].underlineOpposite.map((items, i) => (
              <li key={i}>
                {`${i + exams[id - 1].enko.length + 3}.  다음 밑줄친 부분의 반대말로 가장 알맞는 것을 고르세요.`}
                <div>
                  <div>
                    {`${items[0]} `}
                    <span>{`${items[1]}`}</span>
                    {` ${items[2]}`}
                  </div>
                  <div>
                    <input type="checkbox" /> {items[3]}
                    <input type="checkbox" /> {items[4]}
                    <input type="checkbox" /> {items[5]}
                    <input type="checkbox" /> {items[6]}
                    <input type="checkbox" /> {items[7]}
                  </div>
                </div>
              </li>
            ))}
            <li id="example">
              {`[${exams[id - 1].enko.length + 5}~${exams[id - 1].enko.length + 7}] 다음 빈칸에 들어갈 가장 알맞는 것을 고르세요.`}
              <div>
                <div>
                  {exams[id - 1].blankExample.map((items, i) => (
                    <Fragment key={i}>{`${items}  `}</Fragment>
                  ))}
                </div>
              </div>
            </li>
            {exams[id - 1].blank.map((items, i) => (
              <li key={i} id="blank">
                <div>
                  <div>
                    {`${i +  exams[id - 1].enko.length + 5}. `}
                    {`${items[0]} `}
                    <input type="text" />
                    {` ${items[1]}`}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Exam);
