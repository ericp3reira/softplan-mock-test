import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      type: props.type,
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
      ],
      typeCards: []
    };
    this.createLabel = this.createLabel.bind(this);
    this.getCards = this.getCards.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.sendCard = this.sendCard.bind(this);
  }

  createLabel(label) {
    this.state.labels.push(label)
    this.forceUpdate();
  }

  updateCard(card, label) {
    card.label = label;
    card.board = 'juiz';
    this.recalcLabels();
  }

  sendCard() {
    this.setState({
      type: 'juiz'
    });
  }

  getCards(type) {
    const { cards } = this.state;
    const validCards = cards.filter(card => {
      return card.board === type;
    });
    return validCards;
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
    const { type, labels } = this.state;
    const cards = this.getCards(type);
    return (
      <div className="App">
        <header className="App-header">
          <Header type={type} />
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
