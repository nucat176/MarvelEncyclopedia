import {
  RECEIVE_ABILITIES
} from '../actions/character_actions';

import merge from 'lodash/merge';

const AbilitiesReducer = (state = "", action) => {
  switch(action.type){
    case RECEIVE_ABILITIES:
      let meta = $(action.abilities).find('.abilities').children()[1];
      if (meta){
        meta = meta.innerText;
      } else {
        meta = "None";
      }
      return meta;
    default:
      return state;
  }
};

export default AbilitiesReducer;
