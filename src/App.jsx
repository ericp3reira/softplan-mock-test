import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header title="Assessor"></Header>
        </header>
        <div className="App-content">
          <aside className="App-sidebar">
            sidebar
          </aside>
          <main className="App-main">
            main
          </main>
        </div>
      </div>
    );
  }
}

export default App;