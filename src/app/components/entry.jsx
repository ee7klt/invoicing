import React from 'react';
import {DatePicker, TextField, SelectField, RaisedButton} from 'material-ui';


export default class Entry extends React.Component {


  state = {
    selectValue: 1,
  };



  handleClick() {
    console.log("button clicked")
  };

  selectStateLink = (value) => {
    return {
      value: this.state.selectValue,
      requestChange: this.handleSelectChange.bind(this),
    };
  };

  handleSelectChange(newSelect) {
    this.setState({selectValue: newSelect});
  }

  render() {
    let arbitraryArrayMenuItems = [
      {id:1, name:'0.5 hrs'},
      {id:2, name:'1.0 hrs'},
      {id:3, name:'1.5hrs'},
      {id:4, name:'Weekends'},
      {id:5, name:'Weekly'},
    ];



    return <div>
      <h2>This is entry</h2>
      <TextField
        hintText="Kim Park Lee"
        floatingLabelText="Student Name"
        ref = "nameInput"
        />

      <SelectField
        valueLink = {this.selectStateLink()}
        floatingLabelText="Duration"
        valueMember="id"
        displayMember="name"
        menuItems={arbitraryArrayMenuItems} />

      <DatePicker
        hintText="Inline (AutoOk)"
        container="inline"
        autoOk={true} />

      <RaisedButton label="Default" onClick = {this.handleClick} />
    </div>
  }
}
