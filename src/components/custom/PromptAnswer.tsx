import { motion } from 'framer-motion';
export default function PromptAnswer({ children, className }: { children: string; className: string }) {
  /*      initial={{ rotate: '0deg' }}
      animate={{ rotate: ['-2deg', '0deg', '2deg', '0deg'] }}
      transition={{ duration: 0.15, repeat: 2 }}*/
  return <div className={`px-[5%] h-fit leading-tight rounded-xl oswald-500 ${className}`}>{children}</div>;
}
