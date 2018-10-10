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
            card={card}
            updateCard={props.updateCard}
            availableLabels={props.labels}
          />
        )
      })
    }
  </div>
);

export default Content;