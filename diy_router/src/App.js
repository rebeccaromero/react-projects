import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigation } from './navigation.js';
import { JavaScriptDisplay } from './JavaScriptDisplay.js';
import { HaskellDisplay } from './HaskellDisplay.js';
import { CoffeeScriptDisplay } from './CoffeeScriptDisplay.js';

class App extends Component {
  render() {
    var component
    if (window.location.href === 'http://localhost:3000/javascript') {
      component = <JavaScriptDisplay />;
    } else if (window.location.href === 'http://localhost:3000/haskell') {
      component = <HaskellDisplay />
    } else if (window.location.href === 'http://localhost:3000/coffeescript') {
      component = <CoffeeScriptDisplay />
    } else {
      component = <p/>
    }
    console.log(window.location.href);
    return (
      <div className="App">
        <Navigation />
        {component}
      </div>
    );
  }
}

export default App;
