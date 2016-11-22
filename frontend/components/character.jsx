import React from 'react';

class Character extends React.Component {
  constructor(props){
    super(props);
    this.createImgLink = this.createImgLink.bind(this);
    this.state = {character: {}}
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      character: nextProps.character
    });
  }

  createImgLink(){
    if(this.state.character.thumbnail){
      return this.state.character.thumbnail.path + '/portrait_fantastic.' + this.state.character.thumbnail.extension;
    } else {
      return "";
    }
  }

  render(){
    return (
      <section>
        <h1>{this.state.character.name}</h1>
        <img className='character-thumbnail' src={this.createImgLink()}/>
      </section>
    );
  }
}

export default Character;
