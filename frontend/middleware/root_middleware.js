import {applyMiddleware} from 'redux';
import CharactersMiddleware from './characters_middleware';

const RootMiddleware = applyMiddleware(
  CharactersMiddleware
);

export default RootMiddleware;
