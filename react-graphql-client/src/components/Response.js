import React, { Component } from 'react';

class Response extends Component {
  constructor(props){
    super(props);
    this.handleClick = this
            .handleClick
            .bind(this);
  }
  handleClick() {
    this.props.onResponseClick(this.props.value);
  }
  render() {
    let text = this.props.text;
    return (
      <div className="Response-wrapper">
        <div onClick={this.handleClick}>{text}</div>
      </div>
    );
  }
}

export default Response;
