const actions = {
  SEND_INPUT: 'API_SEND_INPUT',
  SEND_INPUT_FAILURE: 'API_SEND_INPUT_FAILURE',
  SEND_INPUT_SUCCESS: 'API_SEND_INPUT_SUCCESS',
  sendInput: ({ message }) => ({
    payload: {
      message,
    },
    request: (data) => window.websocketclient.send(data),
    type: actions.SEND_INPUT,
  }),
  sendInputFailure: (payload) => ({
    payload,
    type: actions.SEND_INPUT_FAILURE,
  }),
  sendInputSuccess: (payload) => ({
    payload,
    type: actions.SEND_INPUT_SUCCESS,
  }),
};

export default actions;
