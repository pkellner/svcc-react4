import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import thunk from 'redux-thunk';
import { load, LOAD, LOAD_SUCCESS } from './speakers';
import { initialState } from '../reducers/speakers';
import { basename } from '../global';

const STATUS_OK = 200;
const dummyData = [1, 2, 3];
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockAxios = new MockAdapter(axios);
mockAxios.onGet(`${basename}/data/speakers.json`).reply(STATUS_OK, { data: dummyData });

it('dispatches LOAD', () => {
  const store = mockStore({ speakers: initialState });

  store.dispatch(load());

  expect(store.getActions()).toEqual([{ type: LOAD }]);
});

it(`immediately dispatches LOAD_SUCCESS if speakers data isn't empty`, () => {
  const speakers = {
    ...initialState,
    data: ['a', 'b', 'c'],
  };
  const store = mockStore({ speakers });

  store.dispatch(load());

  expect(store.getActions()).toEqual([
    { type: LOAD },
    { type: LOAD_SUCCESS, payload: speakers.data },
  ]);
});

it(`should dispatch LOAD_SUCCESS with`, async () => {
  const store = mockStore({ speakers: initialState });

  await store.dispatch(load());

  expect(store.getActions()).toEqual([
    { type: LOAD },
    { type: LOAD_SUCCESS, payload: dummyData },
  ]);
});
