import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser.name,
      content: ''
    }
  }

  onUsernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  onContent(event) {
    this.setState({
      content: event.target.value
    });
  }

  enterKeypressed(event) {
    if (event.key === 'Enter') {
      this.props.newMessage(this.state.username, this.state.content)
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
