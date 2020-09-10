import React from 'react';
import Data from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex-container">
      {Data.map(pokemon => (
        <Pokemon
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          image={pokemon.image}
          avgWeight={pokemon.averageWeight.value}
          weightMeasure={pokemon.averageWeight.measurementUnit}
          moreInfo={pokemon.moreInfo} />
      ))}
    </div>
    )
  }
}

export default Pokedex;

// {
//   id: 148,
//   name: "Dragonair",
//   type: 'Dragon',
//   averageWeight: {
//       value: 16.5,
//       measurementUnit: "kg"
//   },
//   image: "https://cdn.bulbagarden.net/upload/2/2c/Spr_5b_148.png",
//   moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
// }