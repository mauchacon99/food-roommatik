import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { rootReducer } from './features/rootReducers';

/**
 * Store main.
 *
 * @returns Configure store.
 */
const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });

type Store = ReturnType<typeof makeStore>;

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = Store['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
