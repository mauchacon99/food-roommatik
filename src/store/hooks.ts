import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from './index';

/**
 * Hook selector used in app.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
/**
 * Hook selector used in app.
 */
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
