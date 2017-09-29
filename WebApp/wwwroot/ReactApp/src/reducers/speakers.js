import { LOAD, LOAD_SUCCESS } from '../actions/speakers';

export const initialState = {
  isLoading: false,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};
