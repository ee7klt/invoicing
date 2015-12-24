/** In this file, we create a React component which incorporates components provided by material-ui */



import React from 'react';
import Header from './header.jsx';
import Entry from './entry.jsx';
import Student from './student.jsx';
import {RaisedButton} from 'material-ui';


export default class Main extends React.Component {

handleClick() {
  console.log("button clicked")
}

render() {
    return <div>
      <Header />
      <Student />
      <Entry />
      <Entry />
      <RaisedButton label="Default" onClick = {this.handleClick} />
    </div>

}
}
