const actions = {
  ONCLOSE: 'WEB_SOCKETS_ONCLOSE',
  ONERROR: 'WEB_SOCKETS_ONERROR',
  ONMESSAGE: 'WEB_SOCKETS_ONMESSAGE',
  ONOPEN: 'WEB_SOCKETS_ONOPEN',

  onclose: (payload) => ({
    payload,
    type: actions.ONCLOSE,
  }),
  onerror: (payload) => ({
    payload,
    type: actions.ONERROR,
  }),
  onmessage: (payload) => ({
    payload,
    type: actions.ONMESSAGE,
  }),
  onopen: (payload) => ({
    payload,
    type: actions.ONOPEN,
  }),
};

export default actions;
