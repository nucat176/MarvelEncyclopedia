import {
  receiveCharacters,
  receiveCharacter,
  FETCH_CHARACTER,
  FETCH_CHARACTERS
} from '../actions/character_actions';

import {
  fetchCharacter,
  fetchCharacters
} from '../util/characters_api_util';

const CharactersMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = e => console.log(e.responseJSON);
  let receiveCharactersSuccess = characters => dispatch(receiveCharacters(characters));
  let receiveCharacterSuccess = character => dispatch(receiveCharacter(character));
  switch(action.type){
    case FETCH_CHARACTERS:
      fetchCharacters(receiveCharactersSuccess, error);
      return next(action);
    case FETCH_CHARACTER:
      fetchCharacter(action.id, receiveCharacterSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};

export default CharactersMiddleware;
