import { motion } from 'framer-motion';
import React, { FC, useEffect, useRef, useState } from 'react';

import images from './images';

export const SmoothSlider: FC = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }}>
      <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='carousel-inner'>
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
