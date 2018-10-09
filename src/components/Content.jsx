import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  constructor(props) {
    super();
    this.state = {
      labels: props.labels || []
    };
  }

  handleAddLabelIconClick(event) {
    console.log(event.target);
  }

  render() {
    const availableLabels = this.state.labels.map((label, index) => {
      return (
        <li key={index} className="Card-label-to-add" style={{backgroundColor: label.color}}>
          {label.name}<span>&#10003;</span>
        </li>
      );
    });

    return (
      <div className="Content-container">
        <div className="Card">
          <div className="Card-add-label">
            <div className="Card-add-label-icon" onClick={this.handleAddLabelIconClick}>
              ...
            </div>
            <div className="Card-add-label-modal">
              <header>
                Adicionar etiqueta
                <span className="Card-close-add-label-modal">&#10005;</span>
              </header>
              <ul className="Card-available-labels">
                {availableLabels}
              </ul>
            </div>
          </div>
          <div className="Card-content">
            <section className="Card-content-a">
              <div className="fake-text-a"></div>
              <div className="fake-text-b"></div>
            </section>
            <section className="Card-content-b">

            </section>
            <section className="Card-content-c">
              <div className="fake-text-a"></div>
              <div className="fake-text-b"></div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;