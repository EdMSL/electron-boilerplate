import { SagaIterator } from 'redux-saga';
import {
  call, put, select, takeLatest,
} from 'redux-saga/effects';
import { LOCATION_CHANGE, LocationChangeAction } from 'connected-react-router';

import { changeText } from '.';
import { IAppState } from '$types/state';
import { TEXT_FILE } from '$constants/paths';

const getAppState = (state: IAppState): IAppState => state;

function* locationChangeSaga({ payload: { location } }: LocationChangeAction): SagaIterator {
  if (location.pathname.includes('second')) {
    const { CONTENT: { text } }: ReturnType<typeof getAppState> = yield select(getAppState);

    if (!text) {
      const str = yield call(window.electron.ipcRenderer.invoke, 'readFile', [TEXT_FILE]);

      yield put(changeText(str));
    }
  }
}

export default function* contentSaga(): SagaIterator {
  yield takeLatest(LOCATION_CHANGE, locationChangeSaga);
}
