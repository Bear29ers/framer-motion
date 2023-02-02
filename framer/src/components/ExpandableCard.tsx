import { motion } from 'framer-motion';
import React, { FC, memo, useState } from 'react';

export const ExpandableCard: FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='expandable'>
      <motion.div
        transition={{ layout: { duration: 1, type: 'spring' } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        className='expandable-card'
        style={{ borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)' }}
      >
        <motion.h2 layout='position'>Framer Motion 🚀</motion.h2>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className='expandable-card-content'
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus cumque culpa suscipit rerum quaerat
              unde inventore voluptatem iusto quo sit?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia commodi labore praesentium dolore,
              tenetur maxime voluptas! Incidunt quos laborum ipsam.
            </p>
            <button type='button'>Read more</button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
});
