import React from 'react';
import { motion } from 'framer-motion';
interface TimerCardProps {
  seconds: number;
  className: string;
  started: boolean;
}
const TimerCard: React.FC<TimerCardProps> = ({ seconds, className, started }) => {
  return (
    <div className='relative flex justify-center'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: started ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5, repeat: Infinity }}
        className={` w-1/6 rounded-b-md flex justify-center text-[2vw] ${seconds <= 10 ? 'bg-red-600' : 'bg-white'}`}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: started ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`absolute inset-x-auto w-[15%] h-[92%] h- rounded-b-md flex justify-center items-center text-[2vw] ${className}`}
      >
        {seconds}
      </motion.div>
    </div>
  );
};
export default TimerCard;
