import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/logo.png';

export const Top: FC = () => {
  return (
    <div className='top'>
      <div className='top-container'>
        <div className='top-container-title'>
          <img src={Logo} alt='framer motion' />
          <h1>Framer Motion</h1>
        </div>
        <ul>
          <li>
            <Link to='/expandable-card'>Expandable Card</Link>
          </li>
          <li>
            <Link to='/smooth-slider'>Smooth Slider</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
