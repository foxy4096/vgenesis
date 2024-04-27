import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.body.style.display = 'hidden';
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      style={{ left: position.x, top: position.y }}
      whileHover={{ scale: 1.5 }} // Scale cursor on hover for visual feedback
    ></motion.div>
  );
};

export default CustomCursor;
