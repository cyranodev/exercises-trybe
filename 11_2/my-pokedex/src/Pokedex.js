import React from 'react';
import Data from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    <div className="pokedex-container">
      {Data.map(pokemon => {
        const { id, name, type, averageWeight: { avgWeight, weightMeasureUnit, moreInfo }, image } = pokemon;
        <Pokemon
          key={id}
          id={id}
          name={name}
          type={type}
          avgWeight={avgWeight}
          weightMeasure={weightMeasureUnit}
          moreInfo={moreInfo} />;
      }
      )}
    </div>
  }
}

export default Pokedex;