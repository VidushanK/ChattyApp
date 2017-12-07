import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser.name,
      content: ''
    }
  }
  // Changes the username
  onUsernameChange(event) {
    const oldName = this.state.username;
    const username = event.target.value;
    this.setState({
      username
    })
  }
  // sets the content to the chatbar content
  onContent(event) {
    this.setState({
      content: event.target.value
    });
  }
  // if the user presses the key Enter, then it will create a new message
  // with a type of postMessage
  // after each post, the content of the chatbar will return to default
  enterKeypressed(event) {
    if (event.key === 'Enter') {
      this.props.newMessage(this.state.username, this.state.content, "postMessage")
      this.setState({
        content: ''
      });
    }
  }
  render() {
  console.log("Rendering <ChatBar/>")
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={this.props.currentUser.name}
        value={this.state.username} onChange={this.onUsernameChange.bind(this)}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onChange={this.onContent.bind(this)}
        value={this.state.content} onKeyDown={this.enterKeypressed.bind(this)}/>
      </footer>
    );
  }
}
export default ChatBar;
