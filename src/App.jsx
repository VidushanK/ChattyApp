import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: [
        {
          id:0,
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id:1,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };
    console.log(this.props);
  }
  componentDidMount() {
    this.connection = new WebSocket('ws://localhost:3001');
    this.connection.onopen = function (event) {
    console.log('Connected to server');
    }

}

  addNewMessage(username, content) {
    const message = {
      id: Date.now(),
      username,
      content
    };

    const newMessageList = this.state.messages.concat(message);
    this.setState({
      messages: newMessageList
    });
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
