/** In this file, we create a React component which incorporates components provided by material-ui */



import React from 'react';
import Header from './header.jsx';
import Entry from './entry.jsx';
import Student from './student.jsx';


export default () => {
  return <div>
    <Header />
    <Student />
    <Entry />
    <Entry />
  </div>
}
