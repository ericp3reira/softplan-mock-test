import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Content-container">
        <div className="Card">
          <div className="Card-add-label">...</div>
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