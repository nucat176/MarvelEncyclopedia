import {combineReducers} from 'redux';

import CharactersReducer from './characters_reducer';

export default combineReducers({
  characters: CharactersReducer
});
