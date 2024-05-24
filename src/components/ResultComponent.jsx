import React, { Component } from 'react';
import '../App.css';

class ResultComponent extends Component {
  render() {
    return (
      <div className="result-container">
        <h2>Results</h2>
        <div className="result-row">
          <p>You need more practice!</p>
        </div>
        <div className="result-row">
          <p>Your Score:</p>
          <p>20%</p>
        </div>
        <div className="result-row">
          <p>Total number of Questions:</p>
          <p>15</p>
        </div>
        <div className="result-row">
          <p>Number of attempted Questions:</p>
          <p>9</p>
        </div>
        <div className="result-row">
          <p>Number of correct answers:</p>
          <p>3</p>
        </div>
        <div className="result-row">
          <p>Number of wrong answers:</p>
          <p>6</p>
        </div>
        <div>
          <button>Play Again</button>
          <button>Back to Home</button>
        </div>
      </div>
    );
  }
}

export default ResultComponent;
