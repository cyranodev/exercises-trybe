import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { id, name, image, type, avgWeight, weightMeasure, moreInfo } = this.props;
    return (
      <div id={id} className="pokemon-card">
        <h2>{name}</h2>
        <img className="pokemon-img" src={image} alt={name} />
        <h3>type: {type}</h3>
        <h3>
          Average weight: {avgWeight} {weightMeasure}
        </h3>
        <p>
          Click for <a href={moreInfo}>more info</a>.
        </p>
      </div>
    )
  }
}

Pokemon.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.string,
  avgWeight: PropTypes.number,
  weightMeasureUnit: PropTypes.string,
  image: PropTypes.string,
}

export default Pokemon;



// {
//   id: 25,
//   name: "Pikachu",
//   type: 'Electric',
//   averageWeight: {
//       value: 6.0,
//       measurementUnit: "kg"
//   },
//   image: "https:\/\/cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
//   moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
// },