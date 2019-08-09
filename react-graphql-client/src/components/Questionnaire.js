import React, { Component } from 'react';
import Question from './Question';
class Questionnaire extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentQuestion: props.currentQuestion,
      answers: props.answers
    }
    this.onResponseClick = this
            .onResponseClick
            .bind(this);
  }
  onResponseClick(value){
    if(this.state.currentQuestion < this.props.questions.length) {
      let updatedAnswers = this.state.answers;
      updatedAnswers.push(value);
      this.setState({
        currentQuestion: this.state.currentQuestion+1,
        answers: updatedAnswers
      })
    }
  }

  render() {
    let currentQuestion = this.state.currentQuestion;
    let questionnaire = currentQuestion < this.props.questions.length ?
          [<Question
            key="0"
            question={this.props.questions[currentQuestion]}
            responses={this.props.responses[currentQuestion]}
            onResponseClick={this.onResponseClick}
          />] :
      [<p key="0">Based on your responses of {this.props.responses[0][this.props.answers[0]]} and {this.props.responses[1][this.props.answers[1]]}: We reckon you should just buy something</p>];

    return (
      <div className="Product-wrapper">
        {questionnaire}
      </div>
    );
  }
}

export default Questionnaire;
