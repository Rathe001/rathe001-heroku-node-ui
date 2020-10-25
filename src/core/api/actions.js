const actions = {
  LOGIN: 'API_LOGIN',
  MOVE_DOWN: 'API_MOVE_DOWN',
  MOVE_LEFT: 'API_MOVE_LEFT',
  MOVE_RIGHT: 'API_MOVE_RIGHT',
  MOVE_UP: 'API_MOVE_UP',

  SEND: 'API_SEND',
  SEND_FAILURE: 'API_SEND_FAILURE',
  SEND_SUCCESS: 'API_SEND_SUCCESS',

  login: (client, params) => ({
    payload: {
      action: 'login',
      params,
    },
    request: (data) => client.send(data),
    type: actions.LOGIN,
  }),

  moveDown: (client) => ({
    payload: {
      action: 'moveDown',
    },
    request: (data) => client.send(data),
    type: actions.MOVE_DOWN,
  }),

  moveLeft: (client) => ({
    payload: {
      action: 'moveLeft',
    },
    request: (data) => client.send(data),
    type: actions.MOVE_LEFT,
  }),

  moveRight: (client) => ({
    payload: {
      action: 'moveRight',
    },
    request: (data) => client.send(data),
    type: actions.MOVE_RIGHT,
  }),

  moveUp: (client) => ({
    payload: {
      action: 'moveUp',
    },
    request: (data) => client.send(data),
    type: actions.MOVE_UP,
  }),

  sendFailure: (payload) => ({
    payload,
    type: actions.SEND_FAILURE,
  }),
  sendSuccess: (payload) => ({
    payload,
    type: actions.SEND_SUCCESS,
  }),
};

export default actions;
