import React, { Component } from 'react';

export default class TextContainer extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.updateText = this.updateText.bind(this)
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    })
  }

  //style takes in object containing the style props passed in from the parent listed as key value pairs similar to css
  render() {
    return (
      <div className="textContainer">
        <textarea 
          style={{
            color: this.props.fontColor,
            fontFamily: this.props.fontFamily,
            fontSize: this.props.fontSize
          }}
          onChange={this.updateText}
          value={this.state.text} 
          placeholder='Start typing your thoughts here!'
          cols="90"
          rows="30">
        </textarea>
      </div>
    )
  }
}




