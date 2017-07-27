import React, {Component} from 'react';

class Message extends Component {
  // ParseType() {
  //   switch(this.props.message.type){
  //     case 'incomingMessage':
  //       return (
  //         <div className="message">
  //           <span className="message-username">{ this.props.username} </span>
  //           <span className="message-content">{this.props.content}</span>
  //         </div>
  //       )
  //       break;
  //     case 'incomingNotification':
  //       return (
  //         <span className="message-notification">{this.props.type}</span>
  //       )
  //       break;
  //   }
  // }
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
        <div className="message system">
      
        </div>
      </div>
    );
  }
}
export default Message;
