import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header title="Assessor"></Header>
        </header>
        <div className="App-content">
          <aside className="App-sidebar">
            <Sidebar></Sidebar>
          </aside>
          <main className="App-main">
            <Content></Content>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
