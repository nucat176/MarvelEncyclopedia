import {connect} from 'react-redux';
import {fetchCharacters, fetchCharacter} from '../actions/character_actions';
import Character from './character';

const mapStateToProps = state => ({
  character: state.character,
  powers: state.powers[0],
  abilities: state.powers[1]
});

const mapDispatchToProps = dispatch => ({
  fetchCharacters: () => dispatch(fetchCharacters()),
  fetchCharacter: id => dispatch(fetchCharacter(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Character);
