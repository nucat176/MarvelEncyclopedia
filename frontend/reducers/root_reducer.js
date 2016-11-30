import {combineReducers} from 'redux';

import CharactersReducer from './characters_reducer';
import CharacterReducer from './character_reducer';
import PowersReducer from './powers_reducer';
import AbilitiesReducer from './abilities_reducer';

export default combineReducers({
  characters: CharactersReducer,
  character: CharacterReducer,
  powers: PowersReducer,
  abilities: AbilitiesReducer
});
