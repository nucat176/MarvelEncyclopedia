import {
  RECEIVE_CHARACTERS,
  RECEIVE_CHARACTER
} from '../actions/character_actions';

import merge from 'lodash/merge';

const _defaultState = {0: {comics: [],
                          description: "",
                          events: {},
                          id: 0,
                          name: "",
                          series: {},
                          stories: {},
                          thumbnail: {},
                          urls: []}};

const CharactersReducer = (state = _defaultState, action) => {
  switch(action.type){
    case RECEIVE_CHARACTERS:
      let charObj = {};
      action.characters.data.results.forEach(character => {
        charObj[character.id] = character
      });
      return merge({}, charObj);
    case RECEIVE_CHARACTER:
      return merge({}, state, {[action.character.id]: action.character});
    default:
      return state;
  }
};

export default CharactersReducer;
