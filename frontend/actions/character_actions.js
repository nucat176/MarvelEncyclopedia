export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const FETCH_CHARACTER = "FETCH_CHARACTER";
export const RECEIVE_CHARACTERS = "RECEIVE_CHARACTERS";
export const RECEIVE_CHARACTER = "RECEIVE_CHARACTER";

export const fetchCharacters = () => ({
  type: FETCH_CHARACTERS
});

export const fetchCharacter = id => ({
  type: FETCH_CHARACTER,
  id
});

export const receiveCharacters = characters => ({
  type: RECEIVE_CHARACTERS,
  characters
});

export const receiveCharacter = character => ({
  type: RECEIVE_CHARACTER,
  character
});
