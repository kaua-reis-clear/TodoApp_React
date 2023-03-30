import { createStore } from 'redux';
import { combineReducers } from 'redux';
import todoReducer from './reducers/todoReducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
