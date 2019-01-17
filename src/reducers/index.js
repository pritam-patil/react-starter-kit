import { combineReducers } from 'redux';

const simpleReducer = (
  state = {
    data: 'NO_DATA',
  },
  action,
) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers(simpleReducer);

export default rootReducer;
