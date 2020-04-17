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
      overflowY: 'hidden',
      padding: 0,
      margin: 0,
    },
    input: {
      position: 'fixed',
      border: '1px solid #666666',
      width: '100%',
      padding: 10,
      background: '#111111',
      color: 'green',
      fontFamily: 'Verdana',
      fontSize: 16,
      bottom: 0,
    },
    p: {
      margin: 0,
      padding: 0,
    },
  },
  messages: {
    flexGrow: 1,
    padding: [10, 10, 50, 10],
    overflowY: 'auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  wrap: {
    width: '100vw',
    height: '100vh',
    maxHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
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
    ws.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    ws.onmessage = (m) => {
      setMessages([...messages, JSON.parse(m.data)]);
    };
  });
  return (
    <div>
      <div className={classes.wrap}>
        <div className={classes.messages}>
          {messages.map((m) =>
            m.type === 'connection' ? (
              <p key={m.id}>{m.name} has connected!</p>
            ) : (
              <p key={m.id}>
                {m.name} says, &quot;{m.input}&quot;
              </p>
            ),
          )}
        </div>
        {hasName ? (
          <input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && uiMessage(e.target.value)}
            value={message}
            placeholder="Enter message"
          />
        ) : (
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && login(e.target.value)}
            value={name}
            placeholder="What is your name?"
          />
        )}
      </div>
    </div>
  );
};

export default App;
