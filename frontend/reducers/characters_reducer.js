import {
  RECEIVE_CHARACTERS,
  RECEIVE_CHARACTER
} from '../actions/character_actions';

import merge from 'lodash/merge';

const _defaultState = {comics: {}, series: {}, stories: {}, events: {}, urls: {}};

const CharactersReducer = (state = _defaultState, action) => {
  switch(action.type){
    case RECEIVE_CHARACTERS:
      return merge({}, action.characters);
    case RECEIVE_CHARACTER:
      return merge({}, state, {[action.character.id]: action.character});
    default:
      return state;
  }
};

export default CharactersReducer;
