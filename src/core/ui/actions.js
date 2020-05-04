const actions = {
  SET_WS: 'UI_SET_WS',
  setWs: (data) => ({
    payload: data,
    type: actions.SET_WS,
  }),
};

export default actions;
