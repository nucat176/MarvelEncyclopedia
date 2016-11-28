import React from 'react';
import {hashHistory} from 'react-router';
import SearchBar from './search_bar';

class Character extends React.Component {
  constructor(props){
    super(props);
    this.createImgLink = this.createImgLink.bind(this);
    this.backToHome = this.backToHome.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
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

  backToHome(){
    hashHistory.push("/");
  }

  renderDescription(){
    if (this.state.character.description === ""){
      return (<span></span>);
    } else {
      return (
        <p className="character-description">
          {this.state.character.description}
          <button className='back-to-home' onClick={this.backToHome}>Back To Home</button>
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
              {this.renderDescription()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Character;
