import React from 'react';
import {hashHistory} from 'react-router';
import SearchBar from './search_bar';
var $ = require('jQuery');

class Character extends React.Component {
  constructor(props){
    super(props);
    this.createImgLink = this.createImgLink.bind(this);
    this.backToHome = this.backToHome.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.state = {character: {name: ""}, powers: "", abilities: ""};
  }

  componentWillReceiveProps(nextProps) {

    this.setState({
      character: nextProps.character,
      powers: nextProps.powers,
      abilities: nextProps.abilities
    });
  }

  createImgLink(){
    if(this.state.character.thumbnail){
      return this.state.character.thumbnail.path + '/portrait_fantastic.' + this.state.character.thumbnail.extension;
    } else {
      return "";
    }
  }

  backToHome(){
    hashHistory.push("/");
  }

  renderDescription(){
    if (this.state.character.description === ""){
      return (
        <span>
          <b className="char-label">Description</b>
          <br/>
          <br/>
          None
        </span>
      );
    } else {
      return (
        <p className="character-description">
          <b className="char-label">Description</b>
          <br/>
          <br/>
          {this.state.character.description}
        </p>
      );
    }
  }

  render(){
      return (
      <section className='characters-section'>
        <div className='overlay'>
          <div className='character-div'>
            <h1 className='char-title'>
              {this.state.character.name}
              <SearchBar />
            </h1>
            <div className="char-info">
              <img className='character-show-img' src={this.createImgLink()}/>
              <div className='char-desc-powers'>
                {this.renderDescription()}
                <p className="powers">
                  <b className="char-label">Powers</b>
                  <br/>
                  <br/>
                  {this.state.powers}
                </p>
                <p className="powers">
                  <b className="char-label">Abilities</b>
                  <br/>
                  <br/>
                  {this.state.abilities}
                </p>
                <button className='back-to-home' onClick={this.backToHome}>Back To Home</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Character;
