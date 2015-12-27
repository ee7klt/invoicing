/** In this file, we create a React component which incorporates components provided by material-ui */



import React from 'react';
import Header from './header.jsx';
import Entry from './entry.jsx';
import EntryList from './entry-list.jsx';
import Student from './student.jsx';



export default class Main extends React.Component {


  constructor() {
    super()
    this.state = {
      items: [1,2,3],
    }
  }




render() {


    return <div>
      <Header />
      <Student />
  
      <EntryList items = {this.state.items} />

    </div>

}
}
