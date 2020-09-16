import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Buttons from './Buttons';
import FilterButtons from './FilterButtons';

class App extends React.Component {
  constructor() {
    super();
    const pokemonTypes = [ ...new Set(pokemons.map(pokemon => pokemon.type)) ];
    this.state = {
      currentArray: pokemons,
      arrayIndex: 0,
      PokemonTypes: pokemonTypes,
      disabled: false,
    };
  }

  filterCards = (event) => {
    const newArray = pokemons.filter(pokemon => (event.target.innerText === pokemon.type) ? true : false);
    this.setState({
      currentArray: newArray,
      arrayIndex: 0,
      disabled: (newArray.length > 1 ) ? false : true,
    });
  }

  prevCard = () => {
    this.setState((prevState) => (prevState.arrayIndex === 0)
    ? ({ arrayIndex: prevState.currentArray.length -1 })
    : ({ arrayIndex: prevState.arrayIndex - 1 })
    );
  }

  resetCard = () => this.setState({
    currentArray: pokemons,
    arrayIndex: 0,
    disabled: false,
  });

  nextCard = () => {
    this.setState((prevState) => (prevState.arrayIndex === prevState.currentArray.length - 1)
      ? ({ arrayIndex: 0 })
      : ({ arrayIndex: prevState.arrayIndex + 1 })
      );
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemon={this.state.currentArray[this.state.arrayIndex]} />
        <div className="buttons">
          <Buttons buttonClass="button" iconClass="fas fa-arrow-circle-left" callback={this.prevCard} disabled={this.state.disabled} />
          <Buttons buttonClass="button small" iconClass="fas fa-redo-alt" callback={this.resetCard} />
          <Buttons buttonClass="button" iconClass="fas fa-arrow-circle-right" callback={this.nextCard} disabled={this.state.disabled} />
        </div>
        <div className="buttons">
          {this.state.PokemonTypes.map(type => <FilterButtons buttonClass="filter" key={type} text={type} callback={this.filterCards} />)}
        </div>
      </div>
    );
  }
}

export default App;