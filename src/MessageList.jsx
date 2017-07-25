import React, {Component} from 'react';
import Message from './Message.jsx';
class MessageList extends Component{
  render(){
  console.log("Rendering <MessageList/>")
    return(
        <div id="messages-list">
            <Message/>
        </div>
    );
  }
}
export default MessageList;
