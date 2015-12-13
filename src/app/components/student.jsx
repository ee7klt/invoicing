import React from 'react';
import {TextField} from 'material-ui';



export default class Student extends React.Component {
  constructor() {
    super()
    this.state = {
      textFieldValue: '',
    }
  };

  textFieldLink = (value) => {
    //console.log(this.textFieldChange)
    return {
      value: this.state.textFieldValue,
      requestChange: this.textFieldChange.bind(this),
    };
  };

  textFieldChange(newTextInput) {
    this.setState({textFieldValue: newTextInput})
    console.log()
  };

render() {
  return <div>
    <TextField
      hintText="Kim Park Lee"
      floatingLabelText="Student Name"
      valueLink = {this.textFieldLink()}
      />
  </div>
}
}
