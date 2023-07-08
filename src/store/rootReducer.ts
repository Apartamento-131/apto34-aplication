import { Action, combineReducers } from '@reduxjs/toolkit'
import { defaultApi } from './api/default'
import authSlice from './slices/auth.slice'
import snackbarSlice from './slices/snackbarSlice'
import confirmationModalSlice from './slices/confirmationModalSlice';
import cartSlice from './slices/cartSlice';
import sessionFilterSlice from './slices/sessionFilterSlice';

// usar ordem alfabética
const reducers = combineReducers({
  [defaultApi.reducerPath]: defaultApi.reducer,
  auth: authSlice,
  snackbar: snackbarSlice,
  cart: cartSlice,
  sessionFilter: sessionFilterSlice,
  modal: confirmationModalSlice,
});

const rootReducers = (state: any, action: Action) => {
  if (action.type === "auth/logout") {
    state = undefined
  };
  return reducers(state, action);
};

export default rootReducers;  
