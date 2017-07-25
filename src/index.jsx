// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");


// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

ReactDOM.render(<Message />, document.getElementById('messages'));
ReactDOM.render(<ChatBar />, document.getElementById('chatbar'));
ReactDOM.render(<MessageList />, document.getElementById('navbar'));
