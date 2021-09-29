const actions = {
  HANDLE_ERROR: 'UI_HANDLE_ERROR',
  INIT: 'UI_INIT',
  INIT_SUCCESS: 'UI_INIT_SUCCESS',
};

export default {
  ...actions,
  handleError: (payload) => ({
    payload,
    type: actions.HANDLE_ERROR,
  }),
  init: (payload) => ({
    payload,
    type: actions.INIT,
  }),
  initSuccess: (payload) => ({
    payload,
    type: actions.INIT_SUCCESS,
  }),
};
