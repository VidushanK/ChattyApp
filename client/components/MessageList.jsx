import React, {Component} from 'react';
import Message from './Message.jsx';
import {default as UUID} from "node-uuid";
class MessageList extends Component{

  render(){
  console.log("Rendering <MessageList/>")
      const post = this.props.messages.map(post => {
        return <Message
            type={ post.type }
            key={ post.id }
            username={ post.username }
            content={ post.content }
            color={ post.userColor}/>
      });

      return (
        <section>
          { post }
        </section>
      );
  }
}
export default MessageList;
