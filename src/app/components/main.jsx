/** In this file, we create a React component which incorporates components provided by material-ui */



import React from 'react';
import Header from './header.jsx';
import Entry from './entry.jsx';
import EntryList from './entry-list.jsx';
import Student from './student.jsx';
import {RaisedButton} from 'material-ui';



export default class Main extends React.Component {


  constructor() {
    super()
    this.state = {
      items: [1,2,3],
      dummy: '',
    }
  }

handleClick () {
  console.log("main button clicked")
  this.state.items.push('hello from main')
  this.setState({dummy:''})
}


render() {


    return <div>
      <Header />
      <Student />

      <EntryList items = {this.state.items} />
        <RaisedButton label="Main" onClick = {() => this.handleClick()} />

    </div>

}
}
