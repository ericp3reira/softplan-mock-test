import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      type: 'assessor',
      labels: [
        {
          name: 'Despacho',
          color: '#808080',
          counter: 0
        }
      ],
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
      ],
    };
    this.createLabel = this.createLabel.bind(this);
    this.getCards = this.getCards.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.sendCard = this.sendCard.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  createLabel(label) {
    this.state.labels.push(label)
    this.forceUpdate();
  }

  updateCard(card, label) {
    card.label = label;
    this.recalcLabels();
  }

  sendCard(card) {
    card.board = 'juiz';
    this.recalcLabels();
  }

  getCards(type) {
    const { cards } = this.state;
    const validCards = cards.filter(card => {
      return card.board === type;
    });
    return validCards;
  } 

  recalcLabels() {
    const { type, labels } = this.state;
    const cards = this.getCards(type);
    labels.forEach(label => {
      label.counter = 0;
      cards.forEach(card => {
        if (card.label === label && card.board === type) {
          label.counter++;
        }
      });
    });
    this.forceUpdate();
  }

  changePage() {
    this.setState({
      type: this.state.type === 'assessor' ? 'juiz' : 'assessor'
    });
    setTimeout(() => {
      this.recalcLabels();
    }, 100);
  }

  render() {
    const { type, labels } = this.state;
    const cards = this.getCards(type);
    return (
      <div className="App">
        <header className="App-header">
          <Header type={type} changePage={this.changePage} />
        </header>
        <div className="App-content">
          <aside className="App-sidebar">
            <Sidebar
              type={type}
              createLabel={this.createLabel}
              labels={labels}
            />
          </aside>
          <main className="App-main">
            <Content
              type={type}
              updateCard={this.updateCard}
              sendCard={this.sendCard}
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
