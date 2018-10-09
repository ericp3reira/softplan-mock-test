import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  constructor() {
    super();
  }

  handleAddLabelIconClick(event) {
    console.log(event.target);
  }

  render() {
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
              <div className="Card-available-labels">
                <div className="Card-label-to-add">
                  Dano moral<span>&#10003;</span>
                </div>
                <div className="Card-label-to-add">
                  Dano moral<span>&#10003;</span>
                </div>
                <div className="Card-label-to-add">
                  Dano moral<span>&#10003;</span>
                </div>
                <div className="Card-label-to-add">
                  Dano moral<span>&#10003;</span>
                </div>
              </div>
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