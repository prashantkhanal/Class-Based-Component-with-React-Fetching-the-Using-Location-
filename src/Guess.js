import React, { Component } from 'react';
import './Guess.css';

class App extends Component {
  state = {
    message: 'Start Guessing',
  };

  // secretNumber = Math.floor(Math.random() * 8) + 1;
  // console.log(secretNumber);
  handler = (e) => {
    console.log(e.key);
    // if (e === secretNumber) {
    //   return this.setState({
    //     message: 'you Win the game',
    //   });
    // }
  };
  render() {
    return (
      <div>
        <header>
          <h1>Guess My Number!</h1>
          <p className="between">(Between 1 and 20)</p>
          <button className="btn again">Again!</button>
          <div className="number">?</div>
        </header>
        <main>
          <section className="left">
            <input
              type="number"
              className="guess"
              value={this.state.message}
              onChange={(e) => this.setState({ message: e.target.value })}
            />
            <button className="btn check" onClick={this.handler}>
              Check!
            </button>
          </section>
          <section className="right">
            <p className="message">{this.state.message}</p>
            <p className="label-score">
              💯 Score: <span className="score">20</span>
            </p>
            <p className="label-highscore">
              🥇 Highscore: <span className="highscore">0</span>
            </p>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
