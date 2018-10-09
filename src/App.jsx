import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      labels: [
        {
          name: 'Despacho',
          color: '#808080',
          counter: 0
        }
      ]
    };
    this.createLabel = this.createLabel.bind(this);
  }

  createLabel(label) {
    this.state.labels.push(label)
    this.forceUpdate();
  }

  render() {
    const labels = this.state.labels;
    return (
      <div className="App">
        <header className="App-header">
          <Header title="Assessor"></Header>
        </header>
        <div className="App-content">
          <aside className="App-sidebar">
            <Sidebar createLabel={this.createLabel} labels={labels}></Sidebar>
          </aside>
          <main className="App-main">
            <Content labels={labels}></Content>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
