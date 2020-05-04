import actions from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.SEND_MESSAGE:
      return {
        ...state,
        scale: action.payload,
      };
    case actions.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        scale: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
