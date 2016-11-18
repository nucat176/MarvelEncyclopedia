import React from 'react';
import {Provider} from 'react-redux';
import CharactersContainer from './characters_container';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <CharactersContainer />
    </Provider>
  )
}

export default Root;
