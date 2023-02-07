import { motion } from 'framer-motion';
import React, { FC } from 'react';

import images from './images';

export const SmoothSlider: FC = () => {
  return (
    <motion.div className='carousel'>
      <motion.div className='carousel-inner'>
        {images.map((image) => {
          return (
            <motion.div className='carousel-inner-item' key={image}>
              <img src={image} alt='' />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
