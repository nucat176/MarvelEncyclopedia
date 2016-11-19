import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import CharactersContainer from './characters_container';
import {fetchCharacters} from '../actions/character_actions';

const Root = ({store}) => {

  const _fetchCharacters = () => {
    store.dispatch(fetchCharacters());
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={CharactersContainer} onEnter={_fetchCharacters}/>
      </Router>
    </Provider>
  )
}

export default Root;
