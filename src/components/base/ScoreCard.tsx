import React from 'react';
import { motion } from 'framer-motion';
const ScoreCard = ({ score, started }: { score: number; started: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: started ? 1 : 0 }}
      transition={{ delay: 0.5 }}
      className={`text-center text-[1.5vw] ${score < 0 ? 'text-red-700' : 'text-white'}`}
    >
      {score}
    </motion.div>
  );
};
export default ScoreCard;
