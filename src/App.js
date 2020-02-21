import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/Button';

class App extends Component
{
  render()
  {
    return (
      <ButtonToolbar>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
        adaug si eu ceva 
      </ButtonToolbar>
    );
  }
}

export default App;
