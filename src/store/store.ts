import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';

import userSaga from '$store/user/sagas';
import contentSaga from '$store/content/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: false,
  }).concat(sagaMiddleware),
});

sagaMiddleware.run(userSaga);
sagaMiddleware.run(contentSaga);
