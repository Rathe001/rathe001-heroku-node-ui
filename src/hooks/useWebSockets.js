import { useRef, useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const useWebSockets = () => {
  const ws = useRef(null);
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    // ws://rathe001-test-app.herokuapp.com
    // ws://localhost:3001
    if (!ws.current && !inProgress) {
      setInProgress(true);
      console.log('hit');
      ws.current = new W3CWebSocket('ws://localhost:3001');
    }

    return () => ws.current.close();
  }, []);

  return ws.current;
};

export default useWebSockets;
