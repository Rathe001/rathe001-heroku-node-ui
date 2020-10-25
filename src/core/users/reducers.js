import webSocketsActions from 'core/webSockets/actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case webSocketsActions.ONMESSAGE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
