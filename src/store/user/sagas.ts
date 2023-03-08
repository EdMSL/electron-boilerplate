import { SagaIterator } from 'redux-saga';
import {
  select,
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';

// import { setUserAvatar, setRequestError } from '$store/user';
import { IAppState } from '$types/state';

const getAppState = (state: IAppState): IAppState => state;

function* getUserSaga(): SagaIterator {
  // const { USER: { userAvatar } }: ReturnType<typeof getAppState> = yield select(getAppState);

  // if (!userAvatar) {
  //   const userData = yield call(apiGetUser);

  //   if (userData && userData.avatar_url) {
  //     yield put(setUserAvatar(userData.avatar_url));
  //     yield put(setRequestError(DEFAULT_REQUEST_ERROR));
  //   } else {
  //     yield put(setRequestError(userData));
  //   }
  // }
}

export default function* userSaga(): SagaIterator {
  // yield takeLatest(REHYDRATE, getUserSaga);
}
