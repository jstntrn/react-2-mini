import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor(props){
    super(props)
    
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    }

    this.updateColor = this.updateColor.bind(this)
    this.updateSize = this.updateSize.bind(this)
    this.updateFamily = this.updateFamily.bind(this)
    this.updateEditStatus = this.updateEditStatus.bind(this)
  }

  // updateColor
  updateColor(val){
    this.setState({
      fontColor: val
    })
  }

  // updateSize
  updateSize(val){
    this.setState({
      fontSize: val
    })
  }

  // updateFamily
  updateFamily(val){
    this.setState({
      fontFamily: val
    })
  }

  // updateEditStatus
  updateEditStatus(val){
    this.setState({
      allowEdit: val
    })
  }


  //remember that:
  // referencing a function in current component uses this.function
  // referencing a state within current component uses this.state
  // props passed into component inside the tag of the imported component
  // select components invokes update onChange passing in the e.target.value as the val for the function
  // allowEdit prop used to evaluate disabled prop in child
  //the current state of the style is passed into the TextContainer as props
  render() {
    return (
      <div>
        <div className="headerBar">
          { <EditToggle update={this.updateEditStatus} /> }
          { <ColorChanger update={this.updateColor} allowEdit={this.state.allowEdit} />}
          { <SizeChanger update={this.updateSize} allowEdit={this.state.allowEdit} /> }
          { <FamilyChanger update={this.updateFamily} allowEdit={this.state.allowEdit} /> }
        </div>
        <div className="textArea">
          { <TextContainer 
            fontColor={this.state.fontColor} 
            fontSize={this.state.fontSize} 
            fontFamily={this.state.fontFamily}/> }
        </div>
      </div>
    )
  }
}

export default App;
