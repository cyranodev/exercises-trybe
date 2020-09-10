import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { id, name, type, averageWeight: { avgWeight, weightMeasureUnit }, image } = this.props;


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