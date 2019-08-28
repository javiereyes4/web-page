import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import './App.css';

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {

    const { children } = this.props;

    return (
      <div className="App">
        <div className="containerAll">
          {children}
        </div>
      </div>
    )
  }
}

export default App;
