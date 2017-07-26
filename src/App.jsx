import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import {default as UUID} from "node-uuid";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: []
    };
    console.log(this.props);
  }
  componentDidMount() {
    this.connection = new WebSocket('ws://localhost:3001');
    this.connection.onopen = function (event) {
    console.log('Connected to server');
    }

    this.connection.onmessage = (event) => {
      console.log('On message called! ', event);
      console.log("event data ",event.data);

      const message = event.data;

      var messages = [];
      messages = this.state.messages.concat(JSON.parse(message));
      this.setState({
        messages: messages
      });
      console.log("state messages :",this.state.messages);
    }

  }

  addNewMessage(username, content) {
    const message = {
      id: UUID.v4(),
      username,
      content
    };
    this.connection.send(JSON.stringify(message));
}


  render() {
    console.log("Rendering <App/>")
    return (
      <div>
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser}  newMessage={this.addNewMessage.bind(this)}/>

      </div>
    );
  }
}
export default App;
