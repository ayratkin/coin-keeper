import { handleActions } from 'redux-actions';

const initialState = {
  count: 2,
};

function countReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
}

export default countReducer;
