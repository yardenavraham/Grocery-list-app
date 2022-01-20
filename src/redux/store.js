
import { createStore } from 'redux';
import reducer from "./reducer";
import {loadState, saveState} from '../localStorage/localStorage';

//The store holds the application's state.

const persistedState = loadState();
const store = createStore(
  reducer,
  persistedState
);

export default store;