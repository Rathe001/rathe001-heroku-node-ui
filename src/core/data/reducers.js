import actions from 'core/webSockets/actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.ONMESSAGE:
      console.log(JSON.parse(action.payload.data).message);
      return {
        ...state,
        messages: [JSON.parse(action.payload.data).message, ...state.messages],
      };

    default:
      return state;
  }
};

export default reducer;
