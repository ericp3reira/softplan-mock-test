import React from 'react';
import './Content.css';

import Card from './Card';

const Content = (props) => (
  <div className="Content-container">
    <Card updateLabel={props.updateLabel} availableLabels={props.labels}></Card>
  </div>
);

export default Content;