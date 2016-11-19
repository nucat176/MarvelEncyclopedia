import React from 'react';


class CharacterItem extends React.Component {
  constructor(props){
    super(props);
    this.createImgLink = this.createImgLink.bind(this);
  }

  createImgLink(){
    return this.props.character.thumbnail.path + '/portrait_small.' + this.props.character.thumbnail.extension;
  }

  render(){
    console.log(this.props);
    return (
      <li className='character-item'>
        <h1 className='character-title'>{this.props.character.name}</h1>
        <img className='character-thumbnail' src={this.createImgLink()}/>
      </li>
    );
  }
}

export default CharacterItem;
