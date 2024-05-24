import React, { Component } from 'react';
import '../App.css';
import questions from '../Resources/questions.json';

class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      questions: [],
    };
  }

  componentDidMount() {
    this.setState({ questions });
  }

  handlePrevious = () => {
    this.setState(prevState => ({
      currentQuestionIndex: Math.max(prevState.currentQuestionIndex - 1, 0)
    }));
  }

  handleNext = () => {
    this.setState(prevState => ({
      currentQuestionIndex: Math.min(prevState.currentQuestionIndex + 1, prevState.questions.length - 1)
    }));
  }

  handleQuit = () => {
    if (window.confirm('Are you sure you want to quit?')) {
      // Handle quit logic (e.g., navigate to a different component or reset the quiz)
    }
  }

  render() {
    const { currentQuestionIndex, questions } = this.state;
    const currentQuestion = questions[currentQuestionIndex];

    if (!currentQuestion) {
      return <div>Loading...</div>;
    }

    return (
      <div className='quiz'>
        <h2>Question</h2>
        <p id='number'>{currentQuestionIndex + 1} of {questions.length}</p>
        <h2>{currentQuestion.question}</h2>
        <ul className='answers'>
          <li className='option'>{currentQuestion.optionA}</li>
          <li className='option'>{currentQuestion.optionB}</li>
          <li className='option'>{currentQuestion.optionC}</li>
          <li className='option'>{currentQuestion.optionD}</li>
        </ul>
        <div className='buttons'>
          <button className='pre' onClick={this.handlePrevious}>Previous</button>
          <button className='next' onClick={this.handleNext}>Next</button>
          <button className='quit' onClick={this.handleQuit}>Quit</button>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
