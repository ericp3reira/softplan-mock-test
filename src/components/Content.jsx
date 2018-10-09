import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  constructor(props) {
    super();
    this.state = {
      isModalOpen: false,
      labels: props.labels || []
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    console.log(this.state.isModalOpen);
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleLabelClick(event) {
    console.log(event.target);
  }

  render() {
    const availableLabels = this.state.labels.map((label, index) => {
      return (
        <li key={index}
          onClick={this.handleLabelClick}
          className="Card-label-to-add"
          style={{backgroundColor: label.color}}
          data-label={label.name}
        >
          {label.name}<span>&#10003;</span>
        </li>
      );
    });

    return (
      <div className="Content-container">
        <div className="Card">
          <div className="Card-header">
            <div className="Card-labels">
              {/* <div className="Card-label">Dano moral</div> */}
            </div>
            <div className="Card-add-label">
              <div className="Card-add-label-icon" onClick={this.toggleModal}>
                ...
              </div>
              <div className={`Card-add-label-modal ${this.state.isModalOpen ? 'active' : null}`}>
                <header>
                  Adicionar etiqueta
                  <span className="Card-close-add-label-modal">&#10005;</span>
                </header>
                <ul className="Card-available-labels">
                  {availableLabels}
                </ul>
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