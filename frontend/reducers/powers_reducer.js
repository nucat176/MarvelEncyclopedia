import {
  RECEIVE_POWERS
} from '../actions/character_actions';

import merge from 'lodash/merge';

const PowersReducer = (state = [], action) => {
  switch(action.type){
    case RECEIVE_POWERS:
      let powers = $(action.powers).find('.powers').children()[1];
      let abilities = $(action.powers).find('.abilities').children()[1];
      if (powers){
        powers = powers.innerText;
      } else {
        powers = "None";
      }
      if (abilities){
        abilities = abilities.innerText;
      } else {
        abilities = "None";
      }
      return [powers, abilities];
    default:
      return state;
  }
};

export default PowersReducer;
