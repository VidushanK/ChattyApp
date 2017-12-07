// import dependencies
import React, {Component} from 'react';
import ChatBar from './components/ChatBar.jsx';
import Message from './components/Message.jsx';
import MessageList from './components/MessageList.jsx';
import {default as UUID} from "node-uuid";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      onlineUser: 0,
      userColor: '',
      currentUser: {name: "Bob"},
      messages: []
    };
  }
  // loads data from the chatty_server
  componentDidMount() {
    this.connection = new WebSocket('ws://localhost:3001');
    this.connection.onopen = function (event) {
    console.log('Connected to server');
    }
    this.connection.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if(message.type === 'incomingClientSize'){
        this.setState({
          onlineUser: message.clientSize,
          userColor: message.color
        });
      }
      console.log(message.color)
      let color = message.randsadsadsadasdasdsColor;
      const messages = this.state.messages.concat(message);
      this.setState({
        messages: messages
      });
    }
  }
  // add a new message
  // Checks if user changes their current username
  // if user changes their username the client will send a postNotification
  // server responds with a incomingNotification which gets posted in the clientCount span
  addNewMessage(username, content, type) {
    let oldName = this.state.currentUser.name;
    if (oldName !== username){
      var check = {
        type : 'postNotification',
        content : `${oldName} changed their name to ${username}`
      }
    // Changes the oldName to the new Username
    oldName = username
    this.connection.send(JSON.stringify(check))
  }
      const message = {
        type,
        id: UUID.v4(),
        username,
        content,
        userColor: this.state.userColor
      };
      this.connection.send(JSON.stringify(message));

  }

  render() {
    console.log("Rendering <App/>")
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <span className="counter">{this.state.onlineUser} users online!</span>
        </nav>
          <MessageList messages={this.state.messages} userColor={this.state.userColor}/>
          <ChatBar currentUser={this.state.currentUser}  newMessage={this.addNewMessage.bind(this)}/>
      </div>
    );
  }
}
export default App;
