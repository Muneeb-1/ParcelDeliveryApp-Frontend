import {configureStore} from '@reduxjs/toolkit';
import RootReducer from '../reducer/RootReducer'; // Import your root reducer

const store = configureStore({
  reducer: RootReducer
});

export default store;
