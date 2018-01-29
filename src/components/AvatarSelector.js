import React from 'react';
import PropTypes from 'prop-types';
import esmeralda from '../images/esmeralda.png';
import zac from '../images/zac.png';
import morgana from '../images/morgana.png';

const AvatarSelector = ({ currentPersona }) => {
  let img = zac;
  if (currentPersona === 'Zac') {
    img = zac;
<<<<<<< HEAD
=======
  //  console.log(img);
>>>>>>> ef84e9e891a56a2447e651ad83b619efe76598d5
  }
  if (currentPersona === 'Esmeralda') {
    img = esmeralda;
  }
  if (currentPersona === 'Morgana') {
    img = morgana;
  }
  return (
    <img
      src={img}
      className="w-12 rounded-full"
      alt="Avatar"
      style={{ transform: 'translateY(20px)' }}
    />
  );
};

AvatarSelector.propTypes = {
  currentPersona: PropTypes.string.isRequired
};

export default AvatarSelector;
