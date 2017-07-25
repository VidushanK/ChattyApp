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
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 3000);
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
