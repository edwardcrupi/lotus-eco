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
  onComponentDidUpdate(){

  }
  render() {
    let currentQuestion=this.state.currentQuestion;
    let questionnaire = this.props.questions.map((question, index) => {
      if(index===currentQuestion){
        return (
          <Question
            key={index}
            question={question}
            responses={this.props.responses[index]}
            onResponseClick={this.onResponseClick}
          />
        );
      } else {
        return '';
      }
    });

    return (
      <div className="Product-wrapper">
        {questionnaire}
      </div>
    );
  }
}

export default Questionnaire;
