import React from 'react';
import './Content.css';

import Card from './Card';

const Content = (props) => (
  <div className="Content-container">
    {
      props.cards.map((card, index) => {
        return (
          <Card
            key={index}
            type={props.type}
            card={card}
            updateCard={props.updateCard}
            sendCard={props.sendCard}
            availableLabels={props.labels}
          />
        )
      })
    }
  </div>
);

export default Content;