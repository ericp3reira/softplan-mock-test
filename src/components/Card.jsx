import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super();
    this.state = {
      isModalOpen: false,
      availableLabels: props.availableLabels,
      label: {
        color: '',
        name: ''
      }
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addLabel = this.addLabel.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }

  addLabel(event) {
    const labelIndex = event.target.attributes.dataindex.value;
    const label = this.state.availableLabels[labelIndex];
    this.setState({
      label
    });
    this.props.updateLabel(label);
    this.closeModal();
  }

  render() {
    const availableLabels = this.state.availableLabels.map((label, index) => {
      return (
        <li
          key={index}
          dataindex={index}
          onClick={this.addLabel}
          className="Card-label-to-add"
          style={{backgroundColor: label.color}}
        >
          {label.name}<span>&#10003;</span>
        </li>
      );
    });

    return (
      <div className="Card">
        <div className="Card-header">
          <div className="Card-labels">
            <div className="Card-label" style={{backgroundColor: this.state.label.color}}>
              {this.state.label.name}
            </div>
          </div>
          <div className="Card-add-label">
            <div className="Card-add-label-icon" onClick={this.toggleModal}>
              ...
            </div>
            <div className={`Card-add-label-modal ${this.state.isModalOpen ? 'active' : null}`}>
              <header>
                Adicionar etiqueta
                <span className="Card-close-add-label-modal" onClick={this.closeModal}>&#10005;</span>
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
    );
  }
}

export default Card;