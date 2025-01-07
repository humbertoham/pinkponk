import React from 'react';
import { motion } from 'framer-motion';

const TestMotion: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'lightblue',
      }}
    >
      Hello, Motion!
    </motion.div>
  );
};

export default TestMotion;
