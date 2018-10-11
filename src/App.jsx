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
      ] || [],
      cards: [
        {
          board: 'assessor',
          label: {
            name: '',
            color: ''
          }
        },
        {
          board: 'assessor',
          label: {
            name: '',
            color: ''
          }
        },
        {
          board: 'assessor',
          label: {
            name: '',
            color: ''
          }
        },
        {
          board: 'assessor',
          label: {
            name: '',
            color: ''
          }
        }
      ]
    };
    this.createLabel = this.createLabel.bind(this);
    this.updateCard = this.updateCard.bind(this);
  }

  createLabel(label) {
    this.state.labels.push(label)
    this.forceUpdate();
  }

  updateCard(card, label) {
    card.label = label;
    this.recalcLabels();
    this.forceUpdate();
  }

  recalcLabels() {
    this.state.labels.forEach(label => {
      label.counter = 0;
      this.state.cards.forEach(card => {
        if (card.label === label) {
          label.counter++;
        }
      });
    });
  }

  render() {
    const labels = this.state.labels;
    const cards = this.state.cards;
    console.log(this.props.type);
    return (
      <div className="App">
        <header className="App-header">
          <Header title="Assessor" />
        </header>
        <div className="App-content">
          <aside className="App-sidebar">
            <Sidebar
              createLabel={this.createLabel}
              labels={labels}
            />
          </aside>
          <main className="App-main">
            <Content
              updateCard={this.updateCard}
              labels={labels}
              cards={cards}
            />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
