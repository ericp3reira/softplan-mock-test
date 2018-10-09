import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      showInput: false,
      showMore: false,
      labels: [
        {
          name: 'Despacho',
          color: '#808080',
          counter: 0
        }
      ]
    };
    this.newLabelInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleNewLabel = this.toggleNewLabel.bind(this);
    this.toggleMore = this.toggleMore.bind(this);
  };

  handleSubmit(event) {
    event.preventDefault();

    const randomColor = () => {
      const range = () => {
        return Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
      };
      return `#${range()}${range()}${range()}`;
    }

    const label = event.target['0'].value;
    
    this.setState({
      labels: [...this.state.labels, {
        name: label,
        color: randomColor(),
        counter: 0
      }]
    });

    event.target['0'].value = '';

    this.toggleNewLabel();
  }

  toggleNewLabel() {
    this.setState({
      showInput: !this.state.showInput
    });

    setTimeout(() => {
      this.newLabelInput.current.focus();
    }, 10);
  }

  toggleMore() {
    this.setState({
      showMore: !this.state.showMore
    });
  }

  render() {
    const labels = this.state.labels.map((label, index) => {
      return (
        <li key={index} className="Sidebar-list-item">
          <div>
            <span className="item-color" style={{backgroundColor: label.color}}></span>
            {label.name}
          </div>
          <span>{label.counter}</span>
        </li>
      );
    });

    return (
      <div className="Sidebar-container">
        <section className="Sidebar-section">
          <h3 className="Sidebar-title">Tarefas</h3>
          <ul className="Sidebar-list">
            <li className="Sidebar-list-item">Todos<span>0</span></li>
            {labels}
            <li className="Sidebar-list-item">
              <form onSubmit={this.handleSubmit}>
                <input 
                  type="text"
                  ref={this.newLabelInput}
                  className={`Sidebar-new-label-input ${this.state.showInput ? 'active' : ''}`} />
              </form>
            </li>
          </ul>
          <button className="Sidebar-list-item Sidebar-button" onClick={this.toggleNewLabel}>
            <span className={this.state.showInput ? 'rotated' : null}>&#43;</span>Criar etiqueta  
          </button>
          <button className="Sidebar-list-item Sidebar-button" onClick={this.toggleMore}>
            <span className={this.state.showMore ? 'rotated' : null}>&#8250;</span>Mais
          </button>
        </section>
      </div>
    );
  };
}

export default Sidebar;