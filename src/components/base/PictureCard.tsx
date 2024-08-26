import React from 'react';
import { motion } from 'framer-motion';
interface PictureCardProp {
  className?: string;
  layoutId?: string;
}
const PictureCard: React.FC<PictureCardProp> = ({ className, layoutId }) => {
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      layoutId={layoutId}
      className={`size-[6vw] border-[0.15vw] rounded-[0.5vw] m-[1%] bg-[#060e49] border-[#33c8fecc] ${className} `}
    />
  );
};
export default PictureCard;
