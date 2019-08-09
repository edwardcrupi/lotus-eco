import React, { Component } from 'react';
import Response from './Response'
class Question extends Component {
  constructor(props){
    super(props);
    this.handleResponseClick = this
            .handleResponseClick
            .bind(this);
  }
  handleResponseClick(value) {
    this.props.onResponseClick(value);
  }
  render() {
    let question = this.props.question;
    let responses = this.props.responses.map((response, index) => {
      return (
        <Response key={index} value={index} onResponseClick={this.handleResponseClick} text={response}/>
      );
    });

    return (
      <div className="Question-wrapper">
        <div>{question}</div>
        {responses}
      </div>
    );
  }
}

export default Question;
