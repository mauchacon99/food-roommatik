import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from './index';

/**
 * Hook selector used in app.
 *
 * @returns Hook selector.
 */
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

/**
 * Hook selector used in app.
 */
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
