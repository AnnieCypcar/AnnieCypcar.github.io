import React from 'react';
import './App.css';

const questions = [
  {
    id: 1,
    text: "What is your name?"
  },
  {
    id: 2,
    text: "What is your favorite color?"
  },
  {
    id: 3,
    text: "What do you like to eat?"
  },
  {
    id: 4,
    text: "Thanks for taking the survey!"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        answers: [],
        currentIndex: 0,
        currentAnswer: ''
      };
      this.handleAnswerUpdate = this.handleAnswerUpdate.bind(this);
      this.handlePreviousNext = this.handlePreviousNext.bind(this);
      this.handleSave = this.handleSave.bind(this);
  }

  handleAnswerUpdate (e) {
    this.setState({
      currentAnswer: e.target.value
    });
  }

  findCurrentAnswer (index) {
    let answers = this.state.answers.slice();
    let currentAnswer = '';
    if (answers.length > 0) {
      for (let i = 0; i < answers.length; i++) {
        if (answers[i].id === index + 1) {
          currentAnswer = answers[i].text;
        } 
      }
    }
    return currentAnswer;
  }

  handlePreviousNext (currentIndex) {
    this.setState({
      currentIndex,
      currentAnswer: this.findCurrentAnswer(currentIndex)
    });
  }

  handleSave () {
    let answers = this.state.answers.slice();
    let isFound = false;
    if (answers.length > 0) {
      for (let i = 0; i < answers.length; i++) {
        if (answers[i].id === this.state.currentIndex + 1) {
          answers[i].text = this.state.currentAnswer;
          isFound = true;
        }
      }
    }
    if (!isFound) {
      answers.push({id: this.state.currentIndex + 1, text: this.state.currentAnswer});
    }
    this.setState({
      answers
    }, this.handlePreviousNext(this.state.currentIndex + 1));
  }
  
  render () {
    const question = questions[this.state.currentIndex].text;
    return (
      <div className="App">
        <div>{question}</div>
        <div>{this.state.currentIndex < questions.length - 1 &&
          <input onChange={(e) => this.handleAnswerUpdate(e)} value={this.state.currentAnswer} />}
        </div>
        <div>
          {this.state.currentIndex > 0 && 
          <button onClick={() => this.handlePreviousNext(this.state.currentIndex - 1)}>previous</button>}
          {this.state.currentIndex < questions.length - 1 && 
          <button onClick={() => this.handlePreviousNext(this.state.currentIndex + 1)}>next</button>}
          {this.state.currentAnswer.length > 0 && <button onClick={this.handleSave}>save</button>}
        </div>
      </div>
    );
  }
}

export default App;
