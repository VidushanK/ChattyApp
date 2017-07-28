import React, {Component} from 'react';

class Message extends Component {

  render(){
  console.log("Rendering <Message>")
  console.log("this is the props",this.props)
  console.log(this.props.type)
    return(
      <div className="messages">
        <div className="message">
          <span className="message-username">{ this.props.username} </span>
          <span className="message-content">{this.props.content}</span>
        </div>
      </div>
    );
  }
}
export default Message;
