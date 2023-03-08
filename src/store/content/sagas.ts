import { SagaIterator } from 'redux-saga';
import {
  call, put, select, take, takeLatest,
} from 'redux-saga/effects';
import { LOCATION_CHANGE, LocationChangeAction } from 'connected-react-router';

import { changeText } from '.';
import { IAppState } from '$types/state';

const getAppState = (state: IAppState): IAppState => state;

function* locationChangeSaga({ payload: { location } }: LocationChangeAction): SagaIterator {
  const { CONTENT: { text } }: ReturnType<typeof getAppState> = yield select(getAppState);

  if (location.pathname.includes('second') && !text) {
    // ipcRenderer.send('any');
    // yield put(changeText('some'));
    // const str = window.electron.readFile('data/text.txt');
    // const str = window.electron.ipcRenderer.sendMessage('readFile', ['data/text.txt']);
    // yield call(window.electron.ipcRenderer.sendMessage, 'readFile', ['data/text.txt']);
    // const str = yield call(window.electron.ipcRenderer.once, 'readFile');
    // const str = yield call(window.electron.readFile, 'data/text.txt');
    // const { payload: str } = yield take('readFile');
    const str = yield call(window.electron.ipcRenderer.invoke, 'readFile', ['data/text.txt']);
    console.log(str);
    yield put(changeText(str));
  }
}

export default function* contentSaga(): SagaIterator {
  yield takeLatest(LOCATION_CHANGE, locationChangeSaga);
}
