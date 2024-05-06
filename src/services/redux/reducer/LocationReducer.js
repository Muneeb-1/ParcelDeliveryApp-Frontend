import {ADD_LOCATION} from '../constants/Constant';

const initialState = {
  location: null,
};

export const LocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      return {...state, location: action.payload};

    default:
      return state;
  }
};
