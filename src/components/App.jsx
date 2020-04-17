import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { w3cwebsocket as WebSocket } from 'websocket';

const ws = new WebSocket('ws://rathe001-test-app.herokuapp.com');

const useStyles = createUseStyles(() => ({
  '@global': {
    '*': {
      boxSizing: 'border-box',
    },
    body: {
      background: 'black',
      color: 'green',
      fontFamily: 'Verdana',
      fontSize: 16,
    },
    input: {
      position: 'absolute',
      bottom: 0,
      border: '1px solid #666666',
      left: 0,
      width: '100%',
      padding: 10,
      background: '#111111',
      color: 'green',
      fontFamily: 'Verdana',
      fontSize: 16,
    },
    p: {
      margin: 0,
      padding: 0,
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const [hasName, setHasName] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const sendMessage = (input) => {
    ws.send(JSON.stringify({ name, input, type: 'message' }));
  };
  const uiMessage = (input) => {
    setMessage(input);
    sendMessage(input);
    setMessage('');
  };
  const login = (input) => {
    setHasName(true);
    setName(input);
    ws.send(JSON.stringify({ name: input, input: '', type: 'connection' }));
  };

  useEffect(() => {
    ws.onmessage = ({ data }) => {
      setMessages([...messages, data]);
    };
  });
  return (
    <div>
      {hasName && (
        <div>
          {messages.map((m) => (
            <p>{m}</p>
          ))}
          <input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && uiMessage(e.target.value)}
            value={message}
            placeholder="Enter message"
          />
        </div>
      )}
      {!hasName && (
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && login(e.target.value)}
          value={name}
          placeholder="What is your name?"
        />
      )}
    </div>
  );
};

export default App;
