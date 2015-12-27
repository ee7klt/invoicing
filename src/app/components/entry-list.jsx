import React from 'react';
import {RaisedButton} from 'material-ui';
import Entry from './entry.jsx';


export default class EntryList extends React.Component {

  constructor() {
    super()
    this.state = {
      item:'',
    }
  }
  handleClick() {
    console.log("button clicked")

    this.props.items.push(<Entry />)
    //console.log(this.props.items)
    this.setState({item:''})

  }

  render () {
    return <div>
      this is entry-list with items {this.props.items}
          <br />
        <RaisedButton label="Default" onClick = {() => this.handleClick()} />
    </div>
  }
}
