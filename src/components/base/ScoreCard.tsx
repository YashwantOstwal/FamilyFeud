import React from 'react';
import { motion } from 'framer-motion';
const ScoreCard = ({ score, started }: { score?: number; started: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: started ? 1 : 0 }}
      transition={{ delay: 0.5 }}
      className={`text-center text-[1.5vw] text-white ${score && 'text-red-700'}`}
    >
      {score}
    </motion.div>
  );
};
export default ScoreCard;
