import React from 'react';
interface ButtonProps {
  className: string;
  children: string;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button
      style={{ boxShadow: '0px 2px 4px 0px inset #86a272' }}
      className={`relative rounded-md oswald-500 text-white shadow-md shadow-black text-[2vw] bg-[#024091] drop-shadow-md  hover:bg-[#255798] ${className}`}
      onClick={onClick}
    >
      <div className='absolute inset-0 shadow-md shadow-black'></div>
      {children}
    </button>
  );
};
export default Button;
