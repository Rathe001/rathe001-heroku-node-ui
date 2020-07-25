import { useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const useWebSockets = () => {
  const [client, setClient] = useState();

  if (!client) {
    // ws://rathe001-test-app.herokuapp.com
    setClient(new W3CWebSocket('ws://localhost:3001'));
  }

  return client;
};

export default useWebSockets;
