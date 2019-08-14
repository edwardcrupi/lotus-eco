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
      });
      if(this.state.currentQuestion === this.props.questions.length-1){
        let response1 = this.props.answers[0];
        let response2 = this.props.answers[1];
        let variantIds = [this.props.products[0].variants[0].id,
                      this.props.products[1].variants[0].id,
                      this.props.products[2].variants[0].id]
        let quantities = [this.props.quantities[response1][response2][0], this.props.quantities[response1][response2][1], this.props.quantities[response1][response2][2]];
        this.props.addVariantsToCart(variantIds, quantities);
      }
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
      [<p key="0">Based on your responses
        of {this.props.responses[0][this.props.answers[0]].props.children} and {this.props.responses[1][this.props.answers[1]].props.children}
       : 
       We reckon you should just buy {this.props.suggestions[this.props.answers[0]][this.props.answers[1]]} whatevers, so we've added them to your cart</p>];
    return (
      <div className="Product-wrapper">
        {questionnaire}
      </div>
    );
  }
}

export default Questionnaire;
