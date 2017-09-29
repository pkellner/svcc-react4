import reducer, { initialState } from './speakers';
import { LOAD, LOAD_SUCCESS } from '../actions/speakers';

it('notifies that data is being loaded', () => {
  const result = reducer(initialState, { type: LOAD });
  expect(result.isLoading).toBe(true);
  expect(result.data).toEqual([]);
});

it('updates the data', () => {
  const payload = ['a', 'b', 'c'];
  const result = reducer(initialState, { type: LOAD_SUCCESS, payload });
  expect(result.isLoading).toBe(false);
  expect(result.data).toEqual(payload);
});
