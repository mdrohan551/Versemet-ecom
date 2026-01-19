import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, AppRootState } from '../redux/store/store';

// puro app bar bar useDispatch or useSelector use korte gele store theke type ta bar bar call korte hobe tai easy korar jonno eta use korechi 
// jate bar bar call na kora lage 
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;