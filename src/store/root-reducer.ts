import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import { history } from '$store/history';
import { userReducer } from '$store/user';
import { contentReducer } from '$store/content';
import { NameSpace } from '$constants/store';

export const rootReducer = combineReducers({
  [NameSpace.User]: userReducer,
  [NameSpace.Content]: contentReducer,
  router: connectRouter(history),
});
