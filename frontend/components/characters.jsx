import React from 'react';
import CharacterItem from './character_item';

class Characters extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      characters: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      characters: nextProps.characters
    })
  }

  render(){
    return (
      <section className="characters-section">
        <ul className="characters-list">
          {this.state.characters.map(character => (
            <CharacterItem
              key={character.id}
              character={character}/>
          ))}
        </ul>
      </section>
    );
  }
};

export default Characters;
