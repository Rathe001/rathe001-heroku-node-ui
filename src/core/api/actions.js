const actions = {
  MOVE_DOWN: 'API_MOVE_DOWN',
  MOVE_DOWN_FAILURE: 'API_MOVE_DOWN_FAILURE',
  MOVE_DOWN_SUCCESS: 'API_MOVE_DOWN_SUCCESS',

  MOVE_LEFT: 'API_MOVE_LEFT',
  MOVE_LEFT_FAILURE: 'API_MOVE_LEFT_FAILURE',
  MOVE_LEFT_SUCCESS: 'API_MOVE_LEFT_SUCCESS',

  MOVE_RIGHT: 'API_MOVE_RIGHT',
  MOVE_RIGHT_FAILURE: 'API_MOVE_RIGHT_FAILURE',
  MOVE_RIGHT_SUCCESS: 'API_MOVE_RIGHT_SUCCESS',

  MOVE_UP: 'API_MOVE_UP',
  MOVE_UP_FAILURE: 'API_MOVE_UP_FAILURE',
  MOVE_UP_SUCCESS: 'API_MOVE_UP_SUCCESS',

  SEND: 'API_SEND',
  SEND_FAILURE: 'API_SEND_FAILURE',
  SEND_SUCCESS: 'API_SEND_SUCCESS',

  moveDown: (client) => ({
    payload: {
      actions: ['moveDown'],
    },
    request: (data) => client.send(data),
    type: actions.MOVE_DOWN,
  }),
  moveDownFailure: (payload) => ({
    payload,
    type: actions.MOVE_DOWN_FAILURE,
  }),
  moveDownSuccess: (payload) => ({
    payload,
    type: actions.MOVE_DOWN_SUCCESS,
  }),

  moveLeft: (client) => ({
    payload: {
      actions: ['moveLeft'],
    },
    request: (data) => client.send(data),
    type: actions.MOVE_LEFT,
  }),
  moveLeftFailure: (payload) => ({
    payload,
    type: actions.MOVE_LEFT_FAILURE,
  }),
  moveLeftSuccess: (payload) => ({
    payload,
    type: actions.MOVE_LEFT_SUCCESS,
  }),

  moveRight: (client) => ({
    payload: {
      actions: ['moveRight'],
    },
    request: (data) => client.send(data),
    type: actions.MOVE_RIGHT,
  }),
  moveRightFailure: (payload) => ({
    payload,
    type: actions.MOVE_RIGHT_FAILURE,
  }),
  moveRightSuccess: (payload) => ({
    payload,
    type: actions.MOVE_RIGHT_SUCCESS,
  }),

  moveUp: (client) => ({
    payload: {
      actions: ['moveUp'],
    },
    request: (data) => client.send(data),
    type: actions.MOVE_UP,
  }),
  moveUpFailure: (payload) => ({
    payload,
    type: actions.MOVE_UP_FAILURE,
  }),
  moveUpSuccess: (payload) => ({
    payload,
    type: actions.MOVE_UP_SUCCESS,
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
