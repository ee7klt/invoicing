import React from 'react';
import {DatePicker, TextField, SelectField, RaisedButton} from 'material-ui';


export default class Entry extends React.Component {



  constructor() {
    super()
    this.state = {
      selectValue: 1,
      textFieldValue: '',
      dateValue: '',
    }
  }


  // state = {
  //   selectValue: 1,
  //
  // };



  handleClick() {
    console.log("button clicked")
  };

  selectStateLink = (value) => {
      //console.log(this.handleSelectChange)
    return {
      value: this.state.selectValue,
      requestChange: this.handleSelectChange.bind(this),
    };
  };

  textFieldLink = (value) => {
  //  console.log(this.textFieldChange)
    return {
      value: this.state.textFieldValue,
      requestChange: this.textFieldChange.bind(this),
    };
  };

  dateLink = (value) => {
    console.log(this.dateChange)
    return {
      value: this.state.dateValue,
      requestChange: this.dateChange.bind(this),
    }
  }


  handleSelectChange(newSelect) {
    this.setState({selectValue: newSelect});
    console.log(newSelect)
  }

  textFieldChange(newTextInput) {
    this.setState({textFieldValue: newTextInput})
    console.log()
  }

  dateChange(newDate) {
    this.setState({dateValue: newDate})
    console.log(newDate)
  }

  render() {
    let arbitraryArrayMenuItems = [
      {id:1, name:'0.5 hrs'},
      {id:2, name:'1.0 hrs'},
      {id:3, name:'1.5hrs'},
      {id:4, name:'Weekends'},
      {id:5, name:'Weekly'},
    ];


    //console.log(this.refs.nameInput.getValue())
    return <div>
      <h2>This is entry</h2>
      <TextField
        hintText="Kim Park Lee"
        floatingLabelText="Student Name"
        valueLink = {this.textFieldLink()}
        />

      <SelectField
        valueLink = {this.selectStateLink()}
        floatingLabelText="Duration"
        valueMember="id"
        displayMember="name"
        menuItems={arbitraryArrayMenuItems} />

      <DatePicker
        hintText="Select a Date"
        container="inline"
        autoOk={true}
        valueLink = {this.dateLink}
        />

      <RaisedButton label="Default" onClick = {this.handleClick} />

    <hr />
    <div>
    <ul>
      <li>{this.state.textFieldValue}</li>
      <li>  {this.state.selectValue}</li>
      <li> {this.state.dateValue}</li>
    </ul>
</div>
    </div>
  }
}
