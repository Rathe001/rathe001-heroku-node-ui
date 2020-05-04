import React from 'react';
import { useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import Input from 'components/Input';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import webSocketsActions from 'core/webSockets/actions';

const connectToServer = () => {
  window.websocketclient = new W3CWebSocket('ws://rathe001-test-app.herokuapp.com');
};

const useStyles = createUseStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
    },
    body: {
      background: 'black',
      color: 'green',
      fontFamily: 'Verdana',
      fontSize: 16,
      margin: 0,
      overflowY: 'hidden',
      padding: 0,
    },
  },
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    maxHeight: '100%',
    width: '100vw',
  },
});

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  if (!window.websocketclient) {
    connectToServer();

    window.websocketclient.onerror = (rs) => {
      console.log('Connection Error');
      dispatch(webSocketsActions.onerror(rs));
    };
    window.websocketclient.onclose = (rs) => {
      console.log('WebSocket Client Disconnected');
      dispatch(webSocketsActions.onclose(rs));
      connectToServer();
    };
    window.websocketclient.onopen = (rs) => {
      console.log('WebSocket Client Connected');
      dispatch(webSocketsActions.onopen(rs));
    };
    window.websocketclient.onmessage = (rs) => {
      console.log(rs);
      dispatch(webSocketsActions.onmessage(rs));
    };
  }

  return (
    <div className={classes.wrap}>
      <Input />
    </div>
  );
};

export default App;
