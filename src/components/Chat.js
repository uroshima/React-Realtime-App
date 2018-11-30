import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Chat extends Component {
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <div className="input-group">
              <input type="text" ref="messageText" className="form-container" />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-primary">Send</button>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Chat.propTypes = {};

export default Chat;
