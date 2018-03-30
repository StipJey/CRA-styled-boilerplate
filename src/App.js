import React, { Component } from 'react';
import {injectGlobal} from 'styled-components'

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&subset=cyrillic');

    :root{
        font-size: 16px;
        font-family: 'Open Sans', Arial, sans-serif;
    }

    #root{
        background: rgb(239, 240, 241);
        max-width: 100%;
        opacity: 1 !important;
    }

    #loading{
        opacity: 0;
        visibility: hidden;
    }
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
