import axios from 'axios';
import { basename } from '../global';

export const LOAD = 'speakers/LOAD';
export const LOAD_SUCCESS = 'speakers/LOAD_SUCCESS';

export const load = () => (dispatch, getState) => {
  const prevState = getState();

  dispatch({ type: LOAD });

  if (prevState.speakers.data.length) {
    return dispatch({ type: LOAD_SUCCESS, payload: prevState.speakers.data });
  }

  // return axios.get('/rest/presenter').then(response => {
  //   dispatch({ type: LOAD_SUCCESS, payload: response.data.data });
  // });

  return axios.get(`${basename}/data/speakers.json`).then(response => {
    dispatch({ type: LOAD_SUCCESS, payload: response.data.data });
  });
};
