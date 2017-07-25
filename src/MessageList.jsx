import React, {Component} from 'react';
class MessageList extends Component{
  render(){
  console.log("Rendering <MessageList/>")
    return(
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
    );
  }
}
export default MessageList;
