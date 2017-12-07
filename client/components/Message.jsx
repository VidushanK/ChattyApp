import React, {Component} from 'react';
import {default as UUID} from "node-uuid";

class Message extends Component {

  render(){
  console.log("Rendering <Message>")
    return(
      <div className="messages">
        <div className="message">
          <span className="message-username">{this.props.username} </span>
          <span className="message-content">{this.props.content}</span>
        </div>
      </div>
    );
  }
}
export default Message;
