import {
  receiveCharacters,
  receiveCharacter,
  receiveShowCharacter,
  receivePowers,
  receiveAbilities,
  FETCH_CHARACTER,
  FETCH_CHARACTERS,
  FETCH_SHOW_CHARACTER,
  GET_POWERS,
  GET_ABILITIES
} from '../actions/character_actions';

import {
  fetchCharacter,
  fetchCharacters,
  getPowers,
  getAbilities
} from '../util/characters_api_util';

const CharactersMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = e => console.log(e.responseJSON);
  let receiveCharactersSuccess = characters => dispatch(receiveCharacters(characters));
  let receiveCharacterSuccess = character => dispatch(receiveCharacter(character));
  let receiveShowCharacterSuccess = character => dispatch(receiveShowCharacter(character));
  let receivePowersSuccess = powers => dispatch(receivePowers(powers));
  let receiveAbilitiesSuccess = abilities => dispatch(receiveAbilities(abilities));
  switch(action.type){
    case FETCH_CHARACTERS:
      fetchCharacters(receiveCharactersSuccess, error);
      return next(action);
    case FETCH_CHARACTER:
      fetchCharacter(action.id, receiveCharacterSuccess, error);
      return next(action);
    case FETCH_SHOW_CHARACTER:
      fetchCharacter(action.id, receiveShowCharacterSuccess, error);
      return next(action);
    case GET_POWERS:
      getPowers(action.id, receivePowersSuccess, error);
      return next(action);
    case GET_ABILITIES:
      getAbilities(action.id, receiveAbilitiesSuccess, error);
      return next(action);
    default:
      return next(action);
  }
};

export default CharactersMiddleware;
