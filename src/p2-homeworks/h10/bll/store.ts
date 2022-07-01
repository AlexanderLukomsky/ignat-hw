import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { loadingReducer } from './loadingReducer';
import { themeReducer } from '../../h12/bll/themeReducer';
import { H13_Reducer } from '../../hw13/RequestsAPI';
const rootReducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    h13_state: H13_Reducer
})
export const store = configureStore({
    reducer: rootReducers,
})
export type AppStoreType = ReturnType<typeof rootReducers>
export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector
export type AppDispatch = typeof store.dispatch
// @ts-ignore
window.store = store // for dev

export const useAppDispatch: () => AppDispatch = useDispatch