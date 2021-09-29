// import actions from './actions';

import uiActions from 'actions/uiActions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case uiActions.INIT: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case uiActions.INIT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
