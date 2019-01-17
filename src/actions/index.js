import { GET_TASK, SET_TASK } from './types';

export const setTask = payload => ({
  type: SET_TASK,
  payload,
});

export const getTask = ({ id }) => ({
  type: GET_TASK,
  payload: { id },
});
