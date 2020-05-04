const actions = {
  SET_STATE_FROM_DATA: 'CORE_SET_STATE_FROM_DATA',
  setStateFromData: (payload) => ({
    payload,
    type: actions.SET_STATE_FROM_DATA,
  }),
};

export default actions;
